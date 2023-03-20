import { z } from "zod";

export const dateSchema = z.object({
  date: z.string(),
});

export type ReservationRequest = z.infer<typeof dateSchema>;
