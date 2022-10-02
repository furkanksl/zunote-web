import { auth } from "../../firebase";

export default class AwsService {
    async upload(fileName: string, fileType: string, file: Blob) {
        let formData = new FormData();

        formData.append("file", file, fileName);
        formData.append("fileType", fileType);
        formData.append("fileName", fileName);
        formData.append("uuid", auth?.currentUser?.uid ?? "");

        const response = await fetch("./api/upload", {
            method: "POST",
            body: formData,
        });

        console.log("RESPONSE");
        let resp = response.status;
        console.log(resp);
    }
}
