import sgMail from "@sendgrid/mail";
import { env } from "../../../env/server.mjs";

sgMail.setApiKey(env.SENDGRID_API_KEY);

export const sendgridClient = sgMail;
