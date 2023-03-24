import { router, publicProcedure } from "..";
import { contactSchema } from "./model";
import { sendgridClient } from "../../sendgrid/index";
import { CONTACT_MAIL } from "(/)/utils";
import { createTRPCRouter } from "../../trpc";

export const contactRouter = createTRPCRouter({
  contactMe: publicProcedure
    .input(contactSchema)
    .mutation(async ({ input }) => {
      try {
        const [res] = await sendgridClient.send({
          from: CONTACT_MAIL,
          to: CONTACT_MAIL,
          templateId: "d-adcbfb1c6ab24f7ab6fda0dc5f32bac8",
          dynamicTemplateData: {
            buyer: input.buyer,
          },
        });

        return {
          success: res.statusCode >= 200 && res.statusCode < 300,
        };
      } catch (e) {
        const errors = (e as any).response.body.errors;
        console.log(errors);
        return { success: false, errors };
      }
    }),
});
