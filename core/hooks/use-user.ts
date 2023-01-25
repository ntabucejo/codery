import prisma from "@core/libraries/prisma";
import { Prisma } from "@prisma/client";
import useSession from "./use-session";

const x: Prisma.UserFindUniqueArgs = {
  where: { username: "" },
  include: {
    freelancer: true,
  },
};

const useUser = async (username: string) => {
  const session = await useSession();

  const getUser = async () => {
    if (username) {
      const user = await prisma.user.findUnique({
        where: {
          username: username,
        },
      });
      return user;
    }
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! || "!" },
    });
    return user;
  };

  const user = await getUser();

  return user;
};

export default useUser;
