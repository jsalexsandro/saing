import { useRouter } from "next/router"

export default function Tutorial(){
  const { type } = useRouter().query
  
  return (
    <h1>
      { type }
    </h1>
  )
}