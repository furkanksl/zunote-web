import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, update, push, set, get, child, remove } from "firebase/database";

import { toast } from "react-toastify";
import { auth } from "../../../firebase";
import Note from "../../models/Note.model";
import VoiceNote from "../../models/VoiceNote.model";

export default class FirebaseService {
    async signup(email: string, password: string): Promise<boolean> {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

            if (auth.currentUser) {
                sendEmailVerification(auth.currentUser);

                toast.info("We sent a verification link to your mail.\nCheck you mailbox to verify your email!", {
                    icon: "📧",
                });
            } else
                setTimeout(() => {
                    toast.info("Please login to continue");
                }, 1000);

            return true;
        } catch (error: any) {
            if (error?.message?.includes("auth/email-already-in-use")) toast.error("This email is already registered!");
            else
                toast.error("Something went wrong", {
                    icon: "🤔",
                });

            return false;
        }
    }

    async login(email: string, password: string): Promise<boolean> {
        let response: any;

        try {
            response = await signInWithEmailAndPassword(auth, email, password);

            if (!auth.currentUser?.emailVerified) {
                toast.info("Please verify your email to login!");
                return false;
            } else toast.success("Successfully logged in!");

            return true;
        } catch (error: any) {
            if (error?.message?.includes("auth")) toast.error("Wrong email/password");
            else
                toast.error("Something went wrong", {
                    icon: "🤔",
                });

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

    async saveNote(note?: VoiceNote | Note) {
        if (note instanceof VoiceNote) note.voiceUrl = `${auth.currentUser?.email}/${note.createdAt}`;

        const notesRef = ref(getDatabase(), "notes/" + auth.currentUser?.uid + "/" + note?.createdAt);
        try {
            await set(notesRef, JSON.stringify(note));
        } catch (error) {
            console.log(error);
        }
    }

    async updateNote(note: VoiceNote | Note) {
        const notesRef = ref(getDatabase());
        try {
            const updates: any = {};

            updates["/notes/" + auth.currentUser?.uid + "/" + note?.createdAt] = JSON.stringify(note);

            await update(notesRef, updates);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteNote(noteId: string) {
        const notesRef = ref(getDatabase(), "notes/" + auth.currentUser?.uid + "/" + noteId);
        try {
            await remove(notesRef);
        } catch (error) {
            console.log(error);
        }
    }

    async getAllNotes() {
        const notes: any[] = [];

        const notesRef = ref(getDatabase());

        try {
            const snapshot = await get(child(notesRef, "notes/" + auth.currentUser?.uid));
            if (snapshot.exists()) {
                let key: string;
                let value: any;

                for ([key, value] of Object.entries(snapshot.val())) {
                    try {
                        let noteObject = JSON.parse(value);
                        let isVoiceNote = noteObject.isVoiceNote;

                        if (isVoiceNote) {
                            const newVoiceNote = new VoiceNote(undefined, noteObject);
                            notes.push(newVoiceNote);
                        } else {
                            const newNote = new Note(undefined, noteObject);
                            notes.push(newNote);
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            } else {
                console.log("No data available");
            }
        } catch (error) {
            console.log(error);
        }

        return notes;
    }
}
