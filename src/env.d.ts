/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    device: "pc" | "sp";
    isMobile: boolean;
  }
}
