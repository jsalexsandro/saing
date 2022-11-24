import { createContext, HtmlHTMLAttributes, ReactElement, useContext } from "react";

export type DownlaodType = {
  type:"youtube-video" | "youtube-thumbnail";
  downloadType:string,
  title:string;
}


export const DownloadContext = createContext({} as DownlaodType)

export const useDownload = () => useContext(DownloadContext)