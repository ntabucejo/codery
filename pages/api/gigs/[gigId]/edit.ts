import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "PUT") {
    try {
      await prisma.gig.update({
        where: {
          id: JSON.parse(request.body).id,
        },
        data: {
          title: JSON.parse(request.body).title,
          description: JSON.parse(request.body).description,
          from: JSON.parse(request.body).from,
          to: JSON.parse(request.body).to,
          period: JSON.parse(request.body).period,
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
