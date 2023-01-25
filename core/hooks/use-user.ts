import prisma from "@core/libraries/prisma";
import useSession from "./use-session";

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
