import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// @/components/vehicles/add/utils/date.ts
export const toIsoDate = (ddmmyyyy: string): string => {
  if (!ddmmyyyy || !ddmmyyyy.includes("/")) return "";
  const [d, m, y] = ddmmyyyy.split("/");
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
};

export const toDisplayDate = (iso: string): string => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};