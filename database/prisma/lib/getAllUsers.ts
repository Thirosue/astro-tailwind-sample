import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.users.findMany({
    include: { category: true },
    orderBy: { categoryId: "asc" },
  });
  return users;
}

export async function getAllUsers() {
  const users = await main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  return users;
}
