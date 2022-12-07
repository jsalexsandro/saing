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
  const author = infos.videoDetails.author.name
  const title = infos.videoDetails.title

  const filename = `[${author}] ${title}.mp4`.replaceAll(" ","-")
  res.writeHead(200, {
      'Content-Disposition':`attachment; filename="${filename}`,
      'Content-Transfer-Encoding': 'binary',
      'Content-Type': 'application/octet-stream'
  });

  await ytdl(url, { quality:quality }).pipe(res)
  // res.status(200).redirect(`${process.env.API_DOWNLOAD}/youtube-video-download/?url=${url}&filename=${filename}&quality=${quality}`)
} 

export const config = {
  api: {
    responseLimit: false,
  },
}