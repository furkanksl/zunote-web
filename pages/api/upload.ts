// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import * as fs from "fs";

const srcToFile = async (src: string) => fs.readFileSync(src);

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const formData: { err: any; fields: any; files: any } = await new Promise((resolve, reject) => {
        const form = formidable();

        form.parse(req, (err: any, fields: any, files: any) => {
            if (err) reject({ err });
            resolve({ err, fields, files });
        });
    });

    const GET_SIGNED_API_URL: string = process.env.API_PUT_URL!;

    try {
        const signedUrlResponse = await fetch(GET_SIGNED_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uuid: formData?.fields?.uuid,
                fileName: formData?.fields?.fileName,
                fileType: formData?.fields?.fileType,
            }),
            cache: "default",
        });

        const resp = await signedUrlResponse.json();

        var file = await srcToFile(formData.files.file.filepath);

        if (resp.url) {
            const response = await fetch(resp.url, {
                method: "PUT",
                body: file,
            });
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }

    res.status(200).send({
        status: "success",
    });
}

//set bodyparser
export const config = {
    api: {
        bodyParser: false,
    },
};
