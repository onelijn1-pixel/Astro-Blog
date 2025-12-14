import checkDevice from "./middleware/CheckDevice";
import { sequence } from "astro:middleware";

export const onRequest = sequence(checkDevice);
