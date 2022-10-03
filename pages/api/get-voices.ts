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

            res.status(200).send({
                status: resp.status,
                fileNames: resp.files,
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
