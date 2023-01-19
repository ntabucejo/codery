import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    response.status(200).send({ message: "Invalid Method" });
  }

  const optionsIntent = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        process.env.PAYMONGO_SECRET!
      ).toString("base64")}`,
    },
    body: JSON.stringify(request.body),
  };

  const success = await fetch(
    "https://api.paymongo.com/v1/payment_intents",
    optionsIntent
  )
    .then((response) => response.json())
    .then(async (response) => {
      if (response.errors) {
        console.log(JSON.stringify(response.errors));
      } else return { body: response };
    });

  response.status(200).send(success);
};

export default handler;
