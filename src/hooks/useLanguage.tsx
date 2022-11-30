import { Lang, GetTranslate } from "../language/getTranslate";
import { ITranslate } from "../language/translate";
import { GetByUrlQuery } from "../scripts/GetUrlByQuery";

export type LanguageType =  { lang:Lang, translate:ITranslate }

export function useLanguage(): LanguageType {
  if ( typeof window != undefined){
    const lang = localStorage.getItem("language")
    let langName:Lang | null;
  
    if (lang != "en" && lang != "pt" && lang != "es") {
      const urlLang = GetByUrlQuery()
      if (urlLang != "en" && urlLang != "pt" && urlLang != "es"){
        console.log("Language not identified")
        langName = "en"
      }
    } else {
      langName = lang as Lang
    }
  
    const translate = GetTranslate(langName)
    
    return {
      lang:langName,
      translate
    }
  }
}