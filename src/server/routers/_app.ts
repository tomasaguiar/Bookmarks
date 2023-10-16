import { publicProcedure, router } from "../trpc";
import { bookmarkRouter } from "./bookmark";

export const appRouter = router({
  bookmark: bookmarkRouter,
});

export type AppRouter = typeof appRouter;
