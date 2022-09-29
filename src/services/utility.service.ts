import moment from "moment";

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
}
