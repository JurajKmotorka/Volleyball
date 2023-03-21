import { dateSchema } from "./model";

import { createTRPCRouter, publicProcedure } from "(/)/server/api/trpc";

interface ApiResponse {
  // define the type of the response from the API
  // you may need to adjust this depending on the actual API response
  message: string;
  success: boolean;
}

export const datesRouter = createTRPCRouter({
  reserveDate: publicProcedure
    .input(dateSchema)
    .mutation(async (input): Promise<ApiResponse> => {
      const url = "https://volejbal.c1-europe.altogic.com/api/dates";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: input }),
      });
      const data: ApiResponse = await response.json();
      return data;
    }),
});
