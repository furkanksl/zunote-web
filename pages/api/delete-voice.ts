// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const DELETE_API_URL: string = process.env.API_DELETE_URL!;

    if (parseBody(req, "uuid") && parseBody(req, "fileName"))
        try {
            const response = await fetch(DELETE_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uuid: parseBody(req, "uuid"),
                    fileName: parseBody(req, "fileName"),
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

function parseBody(req: any, key: string) {
    try {
        return process.env.NODE_ENV === "production" ? req.body[key] : JSON.parse(req.body)[key];
    } catch (error) {
        console.log(error);
    }
}

//set bodyparser
export const config = {
    api: {
        bodyParser: true,
    },
};