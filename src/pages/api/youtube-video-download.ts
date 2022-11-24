import { strict } from "assert";
import { NextApiRequest, NextApiResponse } from "next";
import ytdl, { getInfo } from "ytdl-core";

export default async function YoutubeVideoDownload(req:NextApiRequest, res:NextApiResponse){
  const url = req.query.url as string;
  const quality = String(req.query.quality).toLocaleLowerCase()

  if (!url)  {
    return res.status(400).json({ error:"url not found" })
  }
  if (!(quality == "lowest" || quality == "highest")) {
    return res.status(400).json({ error:"quality not found" })
  }
  // 'lowest' | 'highest' 
  // | 'highestaudio' | 'lowestaudio' | 'highestvideo' | 'lowestvideo' |

  const infos = await getInfo(url)
  const video = ytdl(url, { quality: "highestvideo" })
  const author = infos.videoDetails.author.name
  const filename = `${author}.mp4`.replaceAll(" ","-")

  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`)
  video.pipe(res)
} 