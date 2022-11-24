import { useEffect, useState } from "react"
import { XCircle } from "phosphor-react"
import youtubeThumb from "youtube-thumbnail";
import Image from "next/image";
import { YoutubeListBox } from "./YoutubeListBox";

type PopoverProps = {
  modalIsOpoen:boolean
  closeOrOpen:Function
  url:string
}


export function Popover(props:PopoverProps){
  const { modalIsOpoen, closeOrOpen, url } = props
  const [thumbnailUrl, setThumbnailUrl] = useState("")


  useEffect(() => {
    const data = youtubeThumb(url)
    setThumbnailUrl(data.high.url)
  })

  
  return (
    <section className="flex items-center justify-center top-0 fixed z-10 w-full h-full bg-black backdrop-filter backdrop-blur-sm bg-opacity-30">
      <div className="sm:w-[550px] p-4 w-[calc(100vw_-_50px)] bg-violet-500 rounded">
        <div className="text-zinc-100 py-4 flex h-8 items-center justify-between">
          <h2 className="text-md font-medium">
            Save Video
          </h2>
          <div className="flex">
            <button onClick={closeOrOpen}>
              <XCircle size={32} />
            </button>
          </div>
        </div>
        <div className="py-2">
          <img  className="sm:w-[550px] w-[calc(100vw_-_50px)] rounded"  src={thumbnailUrl} alt=""/>
        </div>
        <div>
          <YoutubeListBox />
        </div>
        <div>
          <button className="hover:bg-violet-800 rounded w-full text-left mt-2 py-3 bg-violet-700 px-2 text-zinc-100 font-bold">
            Downlaod
          </button>
        </div>
      </div>
    </section>
  )
}
