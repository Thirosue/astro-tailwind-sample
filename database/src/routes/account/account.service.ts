import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findFirst(id: number) {
  const user = await prisma.account.findFirst({
    where: {
      id,
    },
  });
  return user;
}
