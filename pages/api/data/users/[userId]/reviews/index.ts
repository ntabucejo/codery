import prisma from "@core/libraries/prisma";
import { type NextApiRequest, type NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const { userId } = request.query;
    const { body } = request;
    try {
      const review = await prisma.review.create({
        data: {
          message: body.message,
          rating: body.rating,
          gigId: body.gigId,
          userId: String(userId),
        },
      });
      response.status(201).send({ message: "OK", review });
    } catch (error) {
      console.error(error);
      response.status(500).send({ error });
    }
  }
};

export default handler;
