import _default = require("@prisma/client");

const prisma = new _default.PrismaClient();

const relationalQuery = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
      profile: true,
    },
  });

  //   console.log("User Details:", result);

  const publishedPostUsers = await prisma.user.findMany({
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQuery();
