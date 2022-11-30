import { XCircle } from "phosphor-react";
import toast, { Toaster } from "react-hot-toast";

export function runToast(message: string){
  toast.custom(function(t) {
    return (
      <div className=" bg-zinc-100 rounded flex items-center justify-between">
        <div className="px-2">
          <p className="text-marine-500 text-md font-extrabold">
            { message }
          </p>
        </div>
        <div onClick={() => toast.dismiss(t.id)} className="hover:bg-marine-700 transition-colors bg-marine-600 rounded-[0px_4px_4px_0px] p-4 flex items-center justify-center">
          <button>
            <XCircle weight="fill" size={32} className="text-zinc-100" />
          </button>
        </div>
      </div>
    )
  })
}

export function Toast(){
  return (
    <Toaster position="top-right" />
  )
}