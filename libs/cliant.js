import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nextjs-blog-tutrial", // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.MICRO_CMS_API_KEY,
});
