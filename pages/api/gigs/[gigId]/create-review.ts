import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    try {
      await prisma.review.create({
        data: {
          message: JSON.parse(request.body).message,
          gigId: JSON.parse(request.body).gigId,
          rating: JSON.parse(request.body).rating,
          clientId: JSON.parse(request.body).clientId,
        },
      });
      response.json("Good");
    } catch (error) {
      console.log(error);
      response.status(505).json("Internal Server Error");
    }
  }
};

export default handler;
