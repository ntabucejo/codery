import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "GET")
    return response.json({ message: "Invalid Method" });

  try {
    const gigId = request.query.gigId;
    const gig = await prisma.gig.findUnique({
      where: {
        id: String(gigId),
      },
      include: {
        thumbnails: true,
        freelancer: {
          include: {
            user: true,
          },
        },
      },
    });

    return response.json(gig);
  } catch (error) {
    console.error({ error });
    return response.json({ message: "Internal Server Error" });
  }
};

export default handler;
