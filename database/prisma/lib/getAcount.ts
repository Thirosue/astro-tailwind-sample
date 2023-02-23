import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const account = await prisma.account.findFirst();
  return account;
}

export async function getAcount() {
  const account = await main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  return account;
}
