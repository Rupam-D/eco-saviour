"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react"

interface WasteImgContextTypes {
  imgUrl: string,
  setUrl: any
  // setImgUrl:()=>void
}
export const wasteImgContext = createContext<WasteImgContextTypes>({
  imgUrl: "",
  setUrl: () => { }
  // setImgUrl
  // setImgUrl:()=>()
})

const WasteImgContextStore = ({ children }: { children: React.ReactNode }) => {
  const [imgUrl, setImgUrl] = useState("")
  const setUrl = setImgUrl

  return (
    <wasteImgContext.Provider value={{ imgUrl, setUrl }}>
      {children}
    </wasteImgContext.Provider>
  )
}

export default WasteImgContextStore