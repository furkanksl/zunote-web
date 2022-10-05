import moment from "moment";
import Note from "../models/Note.model";
import VoiceNote from "../models/VoiceNote.model";

export default class UtilityService {
    formatRecorderTime(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    timestampToString(value: number): string {
        const localTime = moment.utc(value).toDate();
        return moment(localTime).format("DD-MMM-YYYY  HH:mm");
    }

    validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    shortEmailAddress(email: string) {
        if (email.length <= 20) return email;
        else {
            const mailPart = email.split("@");
            const shortenedEmail = email.slice(0, 5) + "..." + mailPart[1];
            return shortenedEmail;
        }
    }

    appendVoiceUrlsToVoiceNotes(notes: any[], voiceUrls: { url: string; fileName: string }[]): any[] {
        if (notes && voiceUrls)
            notes.forEach((note: VoiceNote | Note) => {
                if (note instanceof VoiceNote) {
                    voiceUrls.map((element) => {
                        if (note.voiceUrl === element.fileName) {
                            note.voiceUrl = element.url;
                        }
                    });
                }
            });

        return notes;
    }
}
