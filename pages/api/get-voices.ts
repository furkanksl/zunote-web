// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const GET_ALL_API_URL: string = process.env.API_GET_ALL_URL!;

    if (req.body["uuid"])
        try {
            const signedUrlResponse = await fetch(GET_ALL_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uuid: req.body["uuid"],
                }),
                cache: "default",
            });

            const resp = await signedUrlResponse.json();
            const voiceUrls = await getVoiceRecordUrlsByName(resp.files, req.body["uuid"]);

            res.status(200).send({
                status: resp.status,
                voiceUrls: voiceUrls,
            });
        } catch (error) {
            res.status(409).send({
                status: "Conflict!",
            });
        }
    else
        res.status(400).send({
            status: "Bad Request!",
        });
}

async function getVoiceRecordUrlsByName(fileNames: any[], uuid: string): Promise<string[]> {
    const GET_URL_BY_FILE_NAME_API = process.env.API_GET_URL_BY_FILE_NAME!;

    const voiceUrls: any[] = [];

    for (let index = 0; index < fileNames.length; index++) {
        try {
            const response = await fetch(GET_URL_BY_FILE_NAME_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uuid: uuid,
                    fileName: fileNames[index],
                    fileType: "audio/mpeg",
                }),
                cache: "default",
            });
            const fileUrl = (await response.json()).url;

            if (response.url) voiceUrls.push({ url: fileUrl, fileName: fileNames[index] });
        } catch (error) {}
    }

    return voiceUrls;
}
