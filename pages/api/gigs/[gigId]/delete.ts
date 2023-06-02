import prisma from "@core/libraries/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "DELETE")
    return response.json({ message: "Invalid Method" });

  try {
    const gigId = request.query.gigId;

    // Delete the gig using the gigId
    const deletedGig = await prisma.gig.delete({
      where: {
        id: String(gigId),
      },
    });

    return response.json(deletedGig);
  } catch (error) {
    console.error({ error });
    return response.json({ message: "Internal Server Error" });
  }
};

export default handler;
