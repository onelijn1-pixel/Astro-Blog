import type { MiddlewareHandler } from "astro";

function isMobile(userAgent: string): boolean {
  return /android|iphone|ipad|ipod|mobile|windows phone/i.test(userAgent);
}

const checkDevice : MiddlewareHandler = async (context, next) => {
  const ua = context.request.headers.get("user-agent") || "";

  const device = isMobile(ua) ? "sp" : "pc";

  context.locals.device = device;
  context.locals.isMobile = device === "sp";

  return next();
};

export default checkDevice;
