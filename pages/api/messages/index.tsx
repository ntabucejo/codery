import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { clientId, freelancerId },
  } = request;
  switch (request.method) {
    case "GET":
      const messages = await prisma.message.findMany({
        where: {
          userId: String(clientId),
          freelancerId: String(freelancerId),
        },
        include: {
          freelancer: true,
        },
      });
      return response.json(messages);
    case "POST":
      const { text } = JSON.parse(request.body);
      await prisma.message.create({
        data: {
          userId: String(clientId),
          freelancerId: String(freelancerId),
          text: String(text),
        },
      });
      return response.json("Good");
    default:
      return response.status(505).json("Internal Server Error");
  }
};

export default handler;
