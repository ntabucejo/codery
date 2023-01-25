import prisma from "@core/libraries/prisma";
import { type NextApiRequest, type NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "GET") {
    const { userId } = request.query;
    try {
      const user = await prisma.user.findUnique({
        where: { id: String(userId) },
      });
      response.status(200).send(user);
    } catch (error) {
      console.error(error);
      response.status(500).send({ error });
    }
  }
};

export default handler;
