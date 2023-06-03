import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    try {
      await prisma.review.create({
        data: {
          message: JSON.parse(request.body).message,
          rating: JSON.parse(request.body).rating,
          gigId: JSON.parse(request.body).gigId,
          userId: JSON.parse(request.body).userId,
        },
      });
      response.json("Good");
    } catch (error) {
      console.log(error);
      response.status(505).json("Internal Server Error");
    }
  }
  if (request.method === "DELETE") {
    await prisma.review.deleteMany();
  }
};

export default handler;
