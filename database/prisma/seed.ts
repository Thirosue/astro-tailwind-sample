import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // master
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

  // thrisoue
  const thrisoue = await prisma.account.create({
    data: {
      email: "thirosue@test.com",
      password: "test",
      name: "Thrisoue",
      title: "Software Engineer, Frontend, DevOps",
      description:
        "I'm a software engineer. I especially like React.js, Next.js, Raycast, Amplify, etc.",
    },
  });

  await prisma.uses.createMany({
    data: [
      {
        accountId: thrisoue.id,
        title: "14” MacBook Pro, M1 Pro, 32GB RAM (2021)",
        categoryId: workstation.id,
        description:
          "The 14-inch MacBook Pro is a powerful laptop with a 14-inch Retina display, a Magic Keyboard, and a powerful processor. It’s a great choice for anyone who wants a powerful laptop that can handle demanding tasks like video editing and 3D modeling.",
      },
      {
        accountId: thrisoue.id,
        title: "27インチUltraFine™ 5Kモニター",
        categoryId: workstation.id,
        description:
          "The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.",
      },
      {
        accountId: thrisoue.id,
        title: "HHKB Professional HYBRID Type-S US配列／墨",
        categoryId: workstation.id,
        description:
          "プログラマーが理想とするキー配列のキーボード」。ミニマルなキーが合理的に並んでいるためホームポジションから手を移動させる必要がなく、本質的に...",
      },
      {
        accountId: thrisoue.id,
        title: "Apple Magic Trackpad",
        categoryId: workstation.id,
        description:
          "Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.",
      },
      {
        accountId: thrisoue.id,
        title: "カウンターチェア バーチェア 昇降 昇降式",
        categoryId: workstation.id,
        description:
          "たまにスタンディングで作業できるよう、昇降式を選びました。机は、書斎スペースを立ちにも対応したポジションで高さを固定しています。",
      },
    ],
  });

  await prisma.uses.createMany({
    data: [
      {
        accountId: thrisoue.id,
        title: "Raycast",
        categoryId: tools.id,
        description:
          "最高のランチャーアプリ！非常に高速で拡張可能なMacのランチャーアプリケーションです。Macの標準機能であるSpotlightの自由度を高めたようなアプリで、優れたUIUXによる利便性や拡張性も兼ね備えており（割と手軽に）作業の生産性を大いに高めることができます。",
      },
      {
        accountId: thrisoue.id,
        title: "VS Code",
        categoryId: tools.id,
        description:
          "I don’t care if it’s missing all of the fancy IDE features everyone else relies on, VS Code is still the best text editor ever made.",
      },
      {
        accountId: thrisoue.id,
        title: "Warp",
        categoryId: tools.id,
        description:
          "Warpとは、多くの便利な機能と最新のコードエディタのような操作感が実現されている非常に高速なRustベースのターミナルで、モダンなUIで利用体験も良く、生産性を上げられそうなアプリケーションです。iTerm2から乗り換えました。",
      },
      {
        accountId: thrisoue.id,
        title: "Mockoon",
        categoryId: tools.id,
        description:
          "Mockoonでは、開発用のモックAPIサーバーを数秒で立ち上げることができます。リモート環境やアカウントは不要かつ、オープンソースで提供されています。",
      },
    ],
  });

  //
  const john = await prisma.account.create({
    data: {
      email: "john.doe@test.com",
      password: "test",
      name: "John Doe",
      title: "Software designer, founder, and amateur astronaut.",
      description:
        "I'm Johe Doe. I live in New York City, where I design the future.",
    },
  });

  await prisma.uses.createMany({
    data: [
      {
        accountId: john.id,
        title: "16” MacBook Pro, M1 Max, 64GB RAM (2021)",
        categoryId: workstation.id,
        description:
          "The 16-inch MacBook Pro is a powerful laptop with a 16-inch Retina display, a Magic Keyboard, and a powerful processor. It’s a great choice for anyone who wants a powerful laptop that can handle demanding tasks like video editing and 3D modeling.",
      },
      {
        accountId: john.id,
        title: "Apple Pro Display XDR (Standard Glass)",
        categoryId: workstation.id,
        description:
          "The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.",
      },
      {
        accountId: john.id,
        title: "IBM Model M SSK Industrial Keyboard",
        categoryId: workstation.id,
        description:
          "They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.",
      },
      {
        accountId: john.id,
        title: "Apple Magic Trackpad",
        categoryId: workstation.id,
        description:
          "Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.",
      },
      {
        accountId: john.id,
        title: "Herman Miller Aeron Chair",
        categoryId: workstation.id,
        description:
          "If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.",
      },
    ],
  });

  await prisma.uses.createMany({
    data: [
      {
        accountId: john.id,
        title: "Sublime Text 4",
        categoryId: tools.id,
        description:
          "I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.",
      },
      {
        accountId: john.id,
        title: "iTerm2",
        categoryId: tools.id,
        description:
          "I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.",
      },
      {
        accountId: john.id,
        title: "TablePlus",
        categoryId: tools.id,
        description:
          "Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.",
      },
      {
        accountId: john.id,
        title: "Alfred",
        categoryId: tools.id,
        description:
          "It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.",
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
