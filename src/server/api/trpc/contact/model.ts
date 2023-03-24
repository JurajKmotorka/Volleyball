import { z } from "zod";

export const contactSchema = z.object({
  buyer: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().min(1).email(),
    note: z.string(),
  }),
});

export type ContactRequest = z.infer<typeof contactSchema>;
