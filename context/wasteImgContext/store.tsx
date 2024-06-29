"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react"

interface WasteImgContextTypes {
  imgUrl: string,
  setUrl: any,
  wasteType:any,
  stWasteType:any
  // setImgUrl:()=>void
}
export const wasteImgContext = createContext<WasteImgContextTypes>({
  imgUrl: "",
  setUrl: () => { },
  wasteType:{},
  stWasteType:()=>{}
  // setImgUrl
  // setImgUrl:()=>()
})

const WasteImgContextStore = ({ children }: { children: React.ReactNode }) => {
  const [imgUrl, setImgUrl] = useState("")
  const setUrl = setImgUrl

  const [wasteType,setWasteType]=useState<any>({})
  const stWasteType=setWasteType

  return (
    <wasteImgContext.Provider value={{ imgUrl, setUrl ,wasteType,stWasteType}}>
      {children}
    </wasteImgContext.Provider>
  )
}

export default WasteImgContextStore