import prisma from "@core/libraries/prisma";

const useCategories = async () => {
  const categories = await prisma.category.findMany()

  return categories;
};

export default useCategories;
