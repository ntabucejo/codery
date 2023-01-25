import prisma from "@core/libraries/prisma";
import { type NextApiRequest, type NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    const { userId } = request.query;
    const { body } = request;
    try {
      await prisma.freelancer.update({
        where: { userId: String(userId) },
        data: {
          gigs: {
            create: {
              title: body.title,
              description: body.description,
              categoryId: body.categoryId,
              period: body.period,
              from: body.from,
              to: body.to,
              tags: {
                createMany: {
                  data: body.tags,
                },
              },
              thumbnails: {
                createMany: {
                  data: body.thumbnails,
                },
              },
            },
          },
        },
      });
      response.status(201).send({ message: "OK  " });
    } catch (error) {
      console.error(error);
      response.status(500).send({ error });
    }
  }
};

export default handler;
