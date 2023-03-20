import { createTRPCRouter } from "(/)/server/api/trpc";
import { datesRouter } from "(/)/server/api/trpc/dates";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  dates: datesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
