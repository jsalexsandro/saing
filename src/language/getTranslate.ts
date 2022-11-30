import { English } from "./english"

export type Lang = "en" | "pt" | "es"

export function GetTranslate(lang:Lang){
  if (lang === "en"){
    return English
  }
}