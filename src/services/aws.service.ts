import { auth } from "../../firebase";

export default class AwsService {
    async upload(fileName: string, fileType: string, file: Blob) {
        let formData = new FormData();

        formData.append("file", file, fileName);
        formData.append("fileType", fileType);
        formData.append("fileName", fileName);
        formData.append("uuid", auth?.currentUser?.uid ?? "");

        let resp = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/upload-voice", {
            method: "POST",
            body: formData,
        });
    }

    async getVoiceRecords() {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/get-voices", {
            method: "POST",
            body: JSON.stringify({ uuid: auth?.currentUser?.uid }),
        });

        let resp = await response.json();

        if (resp.voiceUrls) return resp.voiceUrls;
    }

    async deleteVoiceRecord(fileName: string) {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/delete-voice", {
            method: "POST",
            body: JSON.stringify({ uuid: auth?.currentUser?.uid, fileName: fileName }),
        });

        let resp = await response.json();
        console.log(resp);
    }
}
