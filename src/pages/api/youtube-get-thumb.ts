import { NextApiRequest, NextApiResponse } from "next";
import { GetThumbURL } from "../../scripts/ThumbURL";

export default function YoutubeGetThumb(req:NextApiRequest, res:NextApiResponse){
  const url = req.query.url as string;

  if (!url)  {
    return res.status(400).json({ error:"url not found" })
  }

  const imageUrl = GetThumbURL(url)

  res.status(200).send(`<html><img src="${imageUrl}" alt=''><body`)
}