import { z } from "zod";
import { dateSchema } from "./model";

import { createTRPCRouter, publicProcedure } from "(/)/server/api/trpc";

export const datesRouter = createTRPCRouter({
  reserveDate: publicProcedure.input(dateSchema).mutation(async (input) => {
    const url = "https://volejbal.c1-europe.altogic.com/api/dates";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: input }),
    });
    const data = await response.json();
    return data;
  }),
});
