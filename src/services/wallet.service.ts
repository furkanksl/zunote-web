import { WindowRef } from "./window-ref.service";
import { ethers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { toast } from "react-toastify";
import { dev } from "../config";
import FirebaseService from "./firebase/firebase.service";

const NETWORK = "binance";

const providerChainID: number = Number(dev ? process.env.NEXT_PUBLIC_TEST_CHAIN_ID : process.env.NEXT_PUBLIC_CHAIN_ID);

const provider = new WalletConnectProvider(<any>{
    package: WalletConnectProvider,
    rpc: {
        1: process.env.NEXT_PUBLIC_PROVIDER_MAIN_NET_URL,
        56: process.env.NEXT_PUBLIC_PROVIDER_MAIN_NET_URL,
        97: process.env.NEXT_PUBLIC_PROVIDER_TEST_NET_URL,
    },
    network: NETWORK,
    chainId: providerChainID,
});

export class WalletService {
    private readonly windowRef = new WindowRef();
    private readonly firebaseService = new FirebaseService();

    private readonly ETH_REQUEST_ACCOUNTS: string = "eth_requestAccounts";
    private readonly CHAIN_CHANGED: string = "chainChanged";
    private readonly DISCONNECT: string = "disconnect";

    private account: string = "";
    private signer!: ethers.providers.JsonRpcSigner;
    private provider!: ethers.providers.Web3Provider;

    async connectWallet() {
        try {
            await this.windowRef.nativeWindow.ethereum.request({ method: this.ETH_REQUEST_ACCOUNTS });
            this.provider = new ethers.providers.Web3Provider(this.windowRef.nativeWindow.ethereum);

            let currentNetwork = await this.provider.getNetwork();

            if (currentNetwork.chainId != providerChainID) {
                //   this.setWalletState(false);
                toast.error("Please connect your wallet to the Binance Smart Chain");
                throw "Wrong network";
            }

            await this.setWalletData();

            this.windowRef.nativeWindow.ethereum.on(this.CHAIN_CHANGED, async (code: number, reason: string) => {
                await this.connectWallet();
                // this.setWalletState(true);
            });

            this.windowRef.nativeWindow.ethereum.on(this.DISCONNECT, (code: number, reason: string) => {
                if (provider.close) provider.close();
                // this.setWalletDisconnected();
            });
        } catch (error) {
            console.log(error);
        }
    }

    async setWalletData() {
        this.signer = this.provider?.getSigner();
        this.account = await this.signer?.getAddress();
    }

    async sendTransaction(planName: string, planPrice: number, planId: number): Promise<any> {
        if (!this.hasWallet()) {
            toast.error("Please install metamask extension!");
            return;
        }

        await this.connectWallet();

        const currentBalance = await this.checkBalance();

        if (currentBalance <= planPrice) {
            toast.error("You do not have enough BNB!");
            return;
        }

        const tx = {
            from: this.account,
            to: process.env.NEXT_PUBLIC_ADDRESS,
            value: ethers.utils.parseEther(`${planPrice}`),
        };

        try {
            let transaction = await this.signer.sendTransaction(tx);

            if (transaction !== undefined) {
                toast.success(`Yay!, You upgraded to ${planName}! plan`);
                this.firebaseService.saveUser(planId, planName);
                location.reload();
                return true;
            } else {
                toast.error("Upps, something went wrong!");
                return false;
            }
        } catch (error: any) {
            if (error.message.includes("user rejected")) toast.error("Operation rejected by you!");
            else toast.error("Upps, something went wrong!");

            return false;
        }
    }

    async checkBalance() {
        const balance = await this.provider.getBalance(this.account);
        return Number(ethers.utils.formatEther(balance));
    }

    hasWallet() {
        const window = this.windowRef.nativeWindow.ethereum;
        return typeof window !== "undefined" && typeof window !== undefined;
    }
}
