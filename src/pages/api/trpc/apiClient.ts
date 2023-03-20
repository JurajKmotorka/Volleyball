export const nobodyCares = () => {
  return "";
};

// import { z } from "zod";
// import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
// import type { AppRouter } from "(/)/server/api/trpc/appRouter";
// import { RegisterOptions } from "superjson/dist/class-registry";
// import { CustomTransfomer } from "superjson/dist/custom-transformer-registry";
// import { SuperJSONResult, Class, JSONValue } from "superjson/dist/types";

// // Define your schema for the request payload
// const reservationSchema = z.object({
//   time: z.string(),
// });

// // Define the type of the response
// type ReservationResponse = {
//   success: boolean;
//   message: string;
// };

// // Create a TRPC client that points to your Altogic API endpoint
// const client = createTRPCProxyClient<AppRouter>({
//   links: [
//     httpBatchLink({
//       url: "https://volejbal.c1-europe.altogic.com/trpc",
//     }),
//   ],
//   transformer: {
//     stringify: function (object: any): string {
//       throw new Error("Function not implemented.");
//     },
//     parse: function <T = unknown>(string: string): T {
//       throw new Error("Function not implemented.");
//     },
//     serialize: function (object: any): SuperJSONResult {
//       throw new Error("Function not implemented.");
//     },
//     deserialize: function <T_1 = unknown>(payload: SuperJSONResult): T_1 {
//       throw new Error("Function not implemented.");
//     },
//     registerClass: function (
//       v: Class,
//       options?: string | RegisterOptions | undefined
//     ): void {
//       throw new Error("Function not implemented.");
//     },
//     registerSymbol: function (
//       v: Symbol,
//       identifier?: string | undefined
//     ): void {
//       throw new Error("Function not implemented.");
//     },
//     registerCustom: function <I, O extends JSONValue>(
//       transformer: Omit<CustomTransfomer<I, O>, "name">,
//       name: string
//     ): void {
//       throw new Error("Function not implemented.");
//     },
//     allowErrorProps: function (...props: string[]): void {
//       throw new Error("Function not implemented.");
//     },
//   },
// });

// // Define your TRPC endpoint
// const reservationEndpoint = client.endpoint("reservation");

// // Define a function that calls the reservation endpoint
// async function reserveTime(time: string): Promise<ReservationResponse> {
//   // Validate the input using zod
//   const input = reservationSchema.parse({ time });

//   // Call the reservation endpoint with the validated input
//   const response = await reservationEndpoint.mutation(input);

//   // Return the response from the server
//   return response;
// }
