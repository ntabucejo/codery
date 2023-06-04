import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "DELETE") {
    await prisma.freelancer.deleteMany();
    response.json("Deleted all client");

  }
};

export default handler;
