import { createClient } from "altogic";
import { env } from "(/)/env/server.mjs";

export const altogic = createClient(
  env.ALTOGIC_API_BASE_URL,
  env.ALTOGIC_CLIENT_KEY
);
