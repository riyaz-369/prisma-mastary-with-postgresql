import UserRole = require("@prisma/client");
import _default = require("@prisma/client");

const prisma = new _default.PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user1",
  //       email: "user1@gmail.com",
  //       role: UserRole.UserRole.user,
  //     },
  //   });
  //   console.log(createUser);
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "This is a sample bio",
  //       userId: 1,
  //     },
  //   });
  //   console.log(createProfile);
  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "Software Engineering",
  //     },
  //   });
  //   console.log(createCategory);

  const createPost = await prisma.post.create({
    data: {
      title: "Software Engineering VS Software Development",
      content:
        "Software engineering and software development are often used interchangeably, but they have distinct meanings. Software engineering is a broader discipline that encompasses the entire software development lifecycle, including requirements gathering, design, implementation, testing, deployment, and maintenance. It focuses on applying engineering principles to create high-quality software systems. On the other hand, software development refers specifically to the process of writing code and building software applications. It is a subset of software engineering that involves the actual coding and implementation of software solutions.",
      authorId: 1,
      published: true,
      postCategory: {
        // create: {
        // //   categoryId: 5,
        //   //   category: {
        //   //     connect: {
        //   //       id: 1,
        //   //     },
        //   //   },
        // },

        // many-to-many relationship
        create: [
          {
            categoryId: 3,
          },
          {
            categoryId: 4,
          },
          {
            categoryId: 5,
          },
        ],
      },
    },
    include: {
      postCategory: {
        include: {
          category: true,
          post: true,
        },
      },
      author: true,
    },
  });

  console.log(createPost);
};

main();
