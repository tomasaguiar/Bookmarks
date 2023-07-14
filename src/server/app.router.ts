import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import {
  createBookmark,
  deleteBookmark,
  findBookmark,
  findAllBookmarks,
  updateBookmark,
} from "./bookmark.controller";
import {
  params,
  filterQuery,
  createBookmarkSchema,
  updateBookmarkSchema,
} from "./bookmark.schema";

const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  createBookmark: t.procedure
    .input(createBookmarkSchema)
    .mutation(({ input }) => createBookmark({ input })),
  updateBookmark: t.procedure
    .input(updateBookmarkSchema)
    .mutation(({ input }) =>
      updateBookmark({ paramsInput: input.params, input: input.body })
    ),
  deleteBookmark: t.procedure
    .input(params)
    .mutation(({ input }) => deleteBookmark({ paramsInput: input })),
  getBookmark: t.procedure
    .input(params)
    .query(({ input }) => findBookmark({ paramsInput: input })),
  getBookmarks: t.procedure
    .input(filterQuery)
    .query(({ input }) => findAllBookmarks({ filterQuery: input })),
});

export type AppRouter = typeof appRouter;
