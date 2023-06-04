import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { userId, freelancerId, senderId },
  } = request;
  switch (request.method) {
    case "GET":
      const messages = await prisma.message.findMany({
        where: {
          userId: String(userId),
          freelancerId: String(freelancerId),
        },
        include: {
          freelancer: true,
          sender: true
        },
      });
      return response.json(messages);
    case "POST":
      const { text } = JSON.parse(request.body);
      await prisma.message.create({
        data: {
          userId: String(userId),
          freelancerId: String(freelancerId),
          text: String(text),
          senderId: String(senderId),
        },
      });
      return response.json("Good");
    case "DELETE":
      await prisma.message.deleteMany();
      return response.json("Good");
    default:
      return response.status(505).json("Internal Server Error");
  }
};

export default handler;
