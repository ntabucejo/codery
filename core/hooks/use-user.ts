import prisma from "@core/libraries/prisma";
import useSession from "./use-session";

const useUser = async () => {
  const { session } = await useSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! || "!" },
  });

  return user;
};

export default useUser;
