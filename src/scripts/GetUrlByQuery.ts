export function GetByUrlQuery(){
  const query = new URLSearchParams(window.location.search);
  const lang = query.get("l");
  return lang? lang : null;
}