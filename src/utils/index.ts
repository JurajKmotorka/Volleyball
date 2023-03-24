import slugify from "slugify";

export const CONTACT_MAIL = "scarabeus.team@gmail.com";
export const SHOP_URL = "https://www.vktopolcany.eu";

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const propOf = <T>(prop: keyof T) => prop;
