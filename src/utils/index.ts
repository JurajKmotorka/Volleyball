export const CONTACT_MAIL = "volejbaltopolcany@gmail.com";
export const SHOP_URL = "https://www.vktopolcany.eu";

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const propOf = <T>(prop: keyof T) => prop;
