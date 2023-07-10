import * as trpc from "@trpc/server";
import { z } from "zod";

import { Context } from "./trpc";

export const serverRouter = trpc
  .router<Context>()
  .query("getBookmarks", {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.bookmark.findMany();
    },
  })

  .mutation("updateOne", {
    input: z.object({
      id: z.string(),
      url: z.string(),
      title: z.string(),
      color: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, ...rest } = input;

      return await ctx.prisma.bookmark.update({
        where: { id },
        data: { ...rest },
      });
    },
  });

export type ServerRouter = typeof serverRouter;
