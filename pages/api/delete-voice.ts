// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const DELETE_API_URL: string = process.env.API_DELETE_URL!;

    if (JSON.parse(req.body).uuid && JSON.parse(req.body).fileName)
        try {
            const response = await fetch(DELETE_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uuid: JSON.parse(req.body).uuid,
                    fileName: JSON.parse(req.body).fileName,
                }),
                cache: "default",
            });

            const resp = await response.json();

            res.status(200).send({
                status: "OK",
                result: resp.result,
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

//set bodyparser
export const config = {
    api: {
        bodyParser: true,
    },
};
