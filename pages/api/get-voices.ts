// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const GET_ALL_API_URL: string = process.env.API_GET_ALL_URL!;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (parseBody(req, "uuid"))
        try {
            const signedUrlResponse = await fetch(GET_ALL_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uuid: parseBody(req, "uuid"),
                }),
                cache: "default",
            });

            const resp = await signedUrlResponse.json();
            const voiceUrls = await getVoiceRecordUrlsByName(resp.files, parseBody(req, "uuid"));

            res.status(200).send({
                status: resp.status,
                voiceUrls: voiceUrls,
            });
        } catch (error) {
            res.status(409).send({
                status: "Conflict!",
            });
        }
    else {
        res.status(400).send({
            status: "Bad Request!",
        });
    }
}

function parseBody(req: any, key: string) {
    try {
        return req.body[key] ?? JSON.parse(req.body)[key];
    } catch (error) {
        console.log(error);
    }
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

//set bodyparser
export const config = {
    api: {
        bodyParser: true,
    },
};
