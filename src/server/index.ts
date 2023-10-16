import { prisma } from "./prisma";
import { publicProcedure, router } from "./trpc";

import { z } from "zod";

const appRouter = router({
  userList: publicProcedure.query(async () => {
    const users = await prisma.user.findMany();

    return users;
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    const user = await prisma.user.findUnique({
      where: {
        uid: input,
      },
    });

    return user;
  }),
});

export type AppRouter = typeof appRouter;
