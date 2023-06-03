import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    try {
      await prisma.offer.create({
        data: {
          title: JSON.parse(request.body).title,
          userId: JSON.parse(request.body).userId,
          freelancerId: JSON.parse(request.body).freelancerId,
          gigId: JSON.parse(request.body).gigId,
          description: JSON.parse(request.body).description,
          price: JSON.parse(request.body).price,
          revision: JSON.parse(request.body).revision,
          deliveryDays: JSON.parse(request.body).deliveryDays,
        },
      });
      response.json("Good");
    } catch (error) {
      console.log(error);
      response.status(505).json("Internal Server Error");
    }
  }
  if (request.method === "DELETE") {
    await prisma.offer.deleteMany();
  }
};

export default handler;
