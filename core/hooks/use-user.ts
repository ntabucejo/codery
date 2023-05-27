import prisma from "@core/libraries/prisma";
import { Prisma } from "@prisma/client";
import useSession from "./use-session";

const useUser = async (query?: Prisma.UserFindUniqueArgs) => {
  const session = await useSession();

  const getUser = async () => {
    // if (query) {
    //   const user = await prisma.user.findUnique(query);
    //   return user;
    // }
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email! || "!" },
      include: {
        freelancer: true,
      },
    });
    return user;
  };

  const user = await getUser();

  return user;
};

export default useUser;
