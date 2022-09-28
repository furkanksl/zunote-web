import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { auth } from "../../../firebase";

export default class FirebaseService {
    router = useRouter();

    async signup(email: string, password: string): Promise<boolean> {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Successfully registered!");
            setTimeout(() => {
                toast.info("Please login to continue");
            }, 1000);
            return true;
        } catch (error) {
            toast.error("Something went wrong");
            return false;
        }
    }

    async login(email: string, password: string): Promise<boolean> {
        let response: any;
        try {
            response = await signInWithEmailAndPassword(auth, email, password);
            toast.success("Successfully logged in!");
            return true;
        } catch (error: any) {
            if (error.message.includes("auth")) {
                toast.error("Wrong email/password");
            } else toast.error("Something went wrong");
            return false;
        }
    }

    async logout() {
        try {
            await auth.signOut().then(() => {
                toast.success("Successfully logged out!");
            });
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
}
