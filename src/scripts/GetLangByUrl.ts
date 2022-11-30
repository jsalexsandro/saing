import { useRouter } from "next/router"

export function GetLangByUrl(){
  const routers = useRouter()
  const { lang } = routers.query
  return lang? lang : null;
}