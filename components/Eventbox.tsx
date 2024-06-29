"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { trpc_client } from '@/app/_trpc/client'
import { useToast } from './ui/use-toast'

const Eventbox = ({eveName,eveDesc,eveImgUrl,evePoints,eveTags,eveId}:{
    eveDesc:string,
    eveImgUrl:string,
    eveName:string,
    evePoints:number,
    eveTags:[],
    eveId:string
}) => {

    const { toast } = useToast()
    const {mutate:registerEvent,
        isSuccess,
        data
    }=trpc_client.eventRegister.useMutation()
    console.log(data,"register")
   
    
  return (
    <div className='bg-white shadow-lg rounded-lg p-5 flex flex-row justify-between gap-x-5 my-5 mx-5'>
        {/* <div className='w-48'> */}
        <Image src={eveImgUrl} width={800} height={400} alt='event' className='rounded-xl'/>
        {/* </div> */}
        <div className='flex flex-col gap-3 ml-5'>
            <h2 className='text-2xl font-bold'>{eveName}</h2>
            <p >{eveDesc}</p>
            <ul className='flex flex-row gap-x-3 mt-3 pb-4 border-b-2 border-gray-400 '>
                {
                    eveTags.map((tag:string)=>(
                        <li className='border border-gray-400 rounded-md p-2' key={tag}>{tag}</li>

                    ))
                }
                
                
            </ul>
    <div className='flex  gap-x-5'>
        <Button className='' size={"lg"} onClick={()=>{registerEvent({eventId:eveId})}}>Register Here</Button>
    
    <Button variant={"outline"}>{`Bonus: ${evePoints} Points`}</Button>
    </div>
            

        </div>        

            
    </div>
  )
}

export default Eventbox
