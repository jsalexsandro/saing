import { useEffect, useState } from "react"
import { XCircle } from "phosphor-react"
import { ListBox } from "./ListBox";
import { GetThumbURL } from "../scripts/ThumbURL";
import { useDownload } from "../hooks/useDownlaod";
import { Option } from "../types/Option";

type PopoverProps = {
  modalIsOpoen:boolean
  closeOrOpen:Function
  url:string
}

export function Popover(props:PopoverProps){
  const { type, downloadType, title  } = useDownload()
  const { modalIsOpoen, closeOrOpen, url } = props
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const origin = document.location.origin
  const [isStart, setStart] = useState(false)

  let option:Option[] = []

  if (type == "youtube-video"){
    option = [{ name: "Highest"}, {name: "Lowest"}]
  }
  const [selectedOption, setSelectedOption] = useState(option[0])

  function Download(){
    if (type == "youtube-video") {
      const callApi = `${origin}/api/youtube-video-download/?url=${url}&quality=${selectedOption.name}`
      console.log(callApi)
      setStart(true)
      location.assign(callApi)
      setTimeout(() => setStart(false), 5000)
    }
  }

  useEffect(() => {
    const data = GetThumbURL(url)
    setThumbnailUrl(data)
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
          <button onClick={ Download } className="hover:bg-violet-800 rounded w-full text-left mt-2 py-3 bg-violet-700 px-2 text-zinc-100 font-bold">
            Downlaod
          </button>
        </div>
        {isStart && <div className="absolute w-64 flex items-center justify-between right-2 top-2 bg-violet-900 mt-2 px-2 py-3 rounded text-zinc-100">
          <p className="font-bold">
            Downlaod Started
          </p>
          <div onClick={() => { setStart(false) }}>
            <XCircle size={32} />
          </div>
        </div>}
      </div>
    </section>
  )
}
