import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import * as trpc from "@trpc/server";
import { publicProcedure, router } from "./trpc";

const prisma = new PrismaClient();

const bookmarkRouter = router({
  getBookmarks: publicProcedure.query(() => {
    return prisma.bookmark.findMany();
  }),
});

export type TBookmark = {
  input: {
    url: string;
    title: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    bookmarkGroupId: string;
    userUid: string;
  };
};
