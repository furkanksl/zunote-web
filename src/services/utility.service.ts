export default class UtilityService {
    formatRecorderTime(value: number): string {
        return value < 10 ? `0${value}` : `${value}`;
    }
}
