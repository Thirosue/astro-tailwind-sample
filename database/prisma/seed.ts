import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const thrisoue = await prisma.account.create({
    data: {
      email: "test@test.com",
      password: "test",
      name: "thrisoue",
      description:
        "I'm a software engineer. I especially like React.js, Next.js, Raycast, Amplify, etc.",
    },
  });

  const workstation = await prisma.category.create({
    data: {
      name: "Workstation",
      order: 1,
    },
  });

  const tools = await prisma.category.create({
    data: {
      name: "Tools",
      order: 2,
    },
  });

  await prisma.users.createMany({
    data: [
      {
        title: "14” MacBook Pro, M1 Pro, 32GB RAM (2021)",
        categoryId: workstation.id,
        description:
          "The 16-inch MacBook Pro is a powerful laptop with a 16-inch Retina display, a Magic Keyboard, and a powerful processor. It’s a great choice for anyone who wants a powerful laptop that can handle demanding tasks like video editing and 3D modeling.",
      },
      {
        title: "27インチUltraFine™ 5Kモニター",
        categoryId: workstation.id,
        description:
          "The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.",
      },
      {
        title: "HHKB Professional HYBRID Type-S US配列／墨",
        categoryId: workstation.id,
        description:
          "プログラマーが理想とするキー配列のキーボード」。ミニマルなキーが合理的に並んでいるためホームポジションから手を移動させる必要がなく、本質的に...",
      },
      {
        title: "Apple Magic Trackpad",
        categoryId: workstation.id,
        description:
          "Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.",
      },
      {
        title: "カウンターチェア バーチェア 昇降 昇降式",
        categoryId: workstation.id,
        description:
          "たまにスタンディングで作業できるよう、昇降式を選びました。机は、書斎スペースを立ちにも対応したポジションで高さを固定しています。",
      },
    ],
  });

  await prisma.users.createMany({
    data: [
      {
        title: "Raycast",
        categoryId: tools.id,
        description:
          "最高のランチャーアプリ！非常に高速で拡張可能なMacのランチャーアプリケーションです。Macの標準機能であるSpotlightの自由度を高めたようなアプリで、優れたUIUXによる利便性や拡張性も兼ね備えており（割と手軽に）作業の生産性を大いに高めることができます。",
      },
      {
        title: "VS Code",
        categoryId: tools.id,
        description:
          "I don’t care if it’s missing all of the fancy IDE features everyone else relies on, VS Code is still the best text editor ever made.",
      },
      {
        title: "Warp",
        categoryId: tools.id,
        description:
          "Warpとは、多くの便利な機能と最新のコードエディタのような操作感が実現されている非常に高速なRustベースのターミナルで、モダンなUIで利用体験も良く、生産性を上げられそうなアプリケーションです。iTerm2から乗り換えました。",
      },
      {
        title: "Mockoon",
        categoryId: tools.id,
        description:
          "Mockoonでは、開発用のモックAPIサーバーを数秒で立ち上げることができます。リモート環境やアカウントは不要かつ、オープンソースで提供されています。",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
