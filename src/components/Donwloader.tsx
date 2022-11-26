import { useEffect, useState } from "react"
import { ArrowCircleDown, XCircle } from "phosphor-react"
import { ListBox } from "./ListBox";
import { GetThumbURL } from "../scripts/ThumbURL";
import { useDownload } from "../hooks/useDownlaod";
import { Option } from "../types/Option";
import { RotateButton } from "../scripts/RotateButton"

type DownloadProps = {
  modalIsOpen:boolean
  closeOrOpen:Function
  url:string
}

export function Donwloader(props:DownloadProps){
  const { type } = useDownload()
  const { closeOrOpen, url } = props
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const [rotate, setRotate] = useState(false)
  const origin = document.location.origin


  let option:Option[] = []

  if (type == "youtube-video"){
    option = [{ name: "Highest"}, {name: "Lowest"}]
  }
  const [selectedOption, setSelectedOption] = useState(option[0])

  function Download(){
    if (type == "youtube-video") {
      const callApi = `${origin}/api/youtube-video-download/?url=${url}&quality=${selectedOption.name}`
      console.log(callApi)
      location.assign(callApi)
    }

    RotateButton(rotate, setRotate)
  }

  useEffect(() => {
    if (type == "youtube-video") {
      const data = GetThumbURL(url)
      setThumbnailUrl(data)
    }
  })
  
  return (
    <section className="flex items-center justify-center top-0 fixed z-10 w-full h-full bg-black backdrop-filter backdrop-blur-sm bg-opacity-30">
      <div className="sm:w-[550px] p-4 w-[calc(100vw_-_50px)] bg-violet-500 rounded">
        <div className="text-zinc-100 py-4 flex h-8 items-center justify-between">
          <h2 className="text-md font-medium">
            Save Video
          </h2>
          <div className="flex">
            <button onClick={ () => closeOrOpen() }>
              <XCircle size={32} />
            </button>
          </div>
        </div>
        <div className="py-2">
          <img  className="sm:w-[550px] w-[calc(100vw_-_50px)] rounded"  src={thumbnailUrl} alt=""/>
        </div>
        <div>
          <ListBox option={option} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        </div>
        <div>
          <button onClick={ Download } className="hover:bg-violet-800  flex items-center justify-between rounded w-full text-left mt-2 py-3 bg-violet-700 px-2 text-zinc-100 font-bold">
            <p>Downlaod</p>
            <div id="icon" className="flex items-center justify-center">
              <ArrowCircleDown size={32} className="text-slate-100" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
