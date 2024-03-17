import { Language } from "./item-interface";

export enum Evariant {
  danger = "danger",
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  info = "info",
  light = "light",
  dark = "dark",
}

export const languages: Language[] = [
  { code: "vn", name: "Tiếng việt" },
  { code: "us", name: "English" },
  // Add more languages as needed
];

export enum ErrorMes {
  UseNotFound = "User not found",
  InvalidPassword = "Invalid password",
  UserIsInactive = "User is inactive",
}
