import { createTRPCRouter } from "../api/trpc";
export const appRouter = createTRPCRouter({});
export type AppRouter = typeof appRouter;
