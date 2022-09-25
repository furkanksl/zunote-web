import moment from "moment";

export default class UtilityService {
    formatRecorderTime(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }

    timestampToString(value: number): string {
        const localTime = moment.utc(value).toDate();
        return moment(localTime).format("DD-MMM-YYYY  HH:mm");
    }
}
