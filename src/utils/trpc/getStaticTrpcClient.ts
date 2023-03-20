import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "../../server/api/trpc/appRouter";
import superjson from "superjson";

export const getStaticTrpcClient = () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: {},
    transformer: superjson,
  });
