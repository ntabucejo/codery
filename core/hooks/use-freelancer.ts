import prisma from "@core/libraries/prisma";
import useUser from "./use-user";

const useFreelancer = async () => {
  const user = await useUser();

  const freelancer = await prisma.freelancer.findUnique({
    where: {
      userId: user?.id,
    },
  });

  return freelancer;
};

export default useFreelancer;
