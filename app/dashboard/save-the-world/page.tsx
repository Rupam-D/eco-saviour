"use client"
import { trpc_client } from '@/app/_trpc/client'
import Eventbox from '@/components/Eventbox'
import MaxWidthWrapper from '@/components/Max-widthWrapper'
import React from 'react'





interface CardProps{
    _id:string,
    eveDesc:string,
    eveImgUrl:string,
    eveName:string,
    evePoints:number,
    eveTags:[]





}
const SaveTheWold = () => {
    const {data}=trpc_client.getEvents.useQuery()
    console.log(data)
  return (
    <MaxWidthWrapper>

    <div className="bg-gray-200 min-h-full">
        <h2 className='font-bold text-3xl'>Our Upcoming Event</h2>
        {
            data && data.map((card:CardProps)=>(
        <Eventbox key={card._id}eveName={card.eveName} eveDesc={card.eveDesc} eveImgUrl={card.eveImgUrl} eveTags={card.eveTags} evePoints={card.evePoints} eveId={card._id}/>

            ))
        }

        
        
    </div>
    </MaxWidthWrapper>
    
  )
}

export default SaveTheWold
