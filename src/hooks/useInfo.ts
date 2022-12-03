import { useDownload } from "./useDownlaod";
import YoutubeVideoText from "../text/youtube-video-text"
import YoutubeMusicText from "../text/youtube-music-text"

type IuseInfo = {
  title: string;
  content: string;
  linkTitle: string;
  link:string;
} 

export function useInfo():IuseInfo {
  const { type } = useDownload()

  if (type == "youtube-video"){
    return YoutubeVideoText(type)
  }

  if (type == "youtube-music"){
    return YoutubeMusicText(type)
  }
}