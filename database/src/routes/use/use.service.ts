import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findAll(accountId: number) {
  const users = await prisma.uses.findMany({
    where: { accountId },
    include: { category: true },
    orderBy: { categoryId: "asc" },
  });
  return users;
}
