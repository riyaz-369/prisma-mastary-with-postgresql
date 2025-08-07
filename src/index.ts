import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "Hello Prisma",
      content: "This is a sample post created using Prisma Client.",
      published: true,
      author: "Alice",
    },
  });
  console.log("Post created:", result);

  const allPosts = await prisma.post.findMany();
  console.log("All posts:", allPosts);
};

main();
