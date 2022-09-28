import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../../firebase";

export default class FirebaseService {
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
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Successfully logged in!");
            return true;
        } catch (error) {
            toast.error("Something went wrong");
            return false;
        }
    }

    async logout() {
        try {
            await auth.signOut();
            toast.success("Successfully logged out");
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
}
