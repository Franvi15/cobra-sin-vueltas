import type { Metadata } from "next";
import { SITE_URL } from "./site";

export function alternates(enPath: string, esPath: string, current: "en" | "es"): Metadata["alternates"] {
  return {
    canonical: current === "en" ? enPath : esPath,
    languages: { en: `${SITE_URL}${enPath}`, es: `${SITE_URL}${esPath}`, "x-default": `${SITE_URL}${enPath}` },
  };
}
