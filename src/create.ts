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
  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "Programming in JavaScript",
  //       content:
  //         "JavaScript is a versatile programming language used for web development. It allows you to create dynamic and interactive web applications.",
  //       authorId: 1,
  //       published: true,
  //       postCategory: {
  //         create: {
  //           categoryId: 5,
  //           //   category: {
  //           //     connect: {
  //           //       id: 1,
  //           //     },
  //           //   },
  //         },
  //       },
  //     },
  //     include: {
  //       postCategory: {
  //         include: {
  //           category: true,
  //           post: true,
  //         },
  //       },
  //       author: true,
  //     },
  //   });
  //   console.log(createPost);
};

main();
