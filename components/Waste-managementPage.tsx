"use client"
import MaxWidthWrapper from '@/components/Max-widthWrapper'
import { generateText } from 'ai';
import WastePoster from '@/components/Waste-Poster'
import { Button, buttonVariants } from '@/components/ui/button'
import { Section } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { openai } from "@ai-sdk/openai";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Calendar } from "@/components/ui/calendar"

// import DropzoneModal from './Dropzone'
import { wasteImgContext } from '@/context/wasteImgContext/store'
import Image from 'next/image'
import DropzoneModal from './Dropzone'
import Link from 'next/link'
import { trpc_client } from '@/app/_trpc/client';

interface TimeSlotArrTypes {
  time: string

}

interface wasteTypes{
  type:string
}



const WasteManagementPage = () => {
  // get from store
  const { imgUrl,wasteType } = useContext(wasteImgContext)

  

  const type:string=wasteType.Class
  
  
  
  console.log(type, "w-m")
// const {data}=trpc_client.suggestWasteManagement.useQuery({wasteType:wasteType.Class})

const {data}=trpc_client.suggestWasteManagement.useQuery({wasteType:type},{
  retry:true,
  retryDelay:600
})

console.log(data,"from suggest client")
//  console.log(data,"trpc suggest")
  // generateSuggetion()



  // const [date, setDate] = useState<Date>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlotArrTypes[]>([]);

  // date value
  const [date, setDate] = React.useState<Date | undefined>(new Date())



  // time value
  const [selectedTime, setSelectedTime] = useState<string>("");



  useEffect(() => {
    getTime();

  }, [])

  // getTime()
  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }

    setTimeSlots(timeList)
  }

  // saveBooking
  const saveBooking = () => {
    setSelectedTime("")
    console.log("date: ", date, "time: ", selectedTime)
  }

  return (
    <MaxWidthWrapper className='py-6'>
      <section >
        <h2 className='text-3xl font-bold '>Waste Management</h2>
        <p>Learn how to reduce, reuse, and recycle effectively. Discover sustainable practices and take action to minimize waste.</p>

        <div className='flex flex-row gap-x-5 my-6'>
          <WastePoster heading='Reduce' para='Minimize consumption to limit waste production, promoting sustainability and conservation of resources for a healthier environment and future generations.' img='/waste/reduce.jpg' />
          <WastePoster heading='Reuse' para='Repurpose items to extend their lifespan, reducing landfill waste and conserving raw materials, fostering a circular economy and sustainable practices.' img='/waste/reuse.jpg' />
          <WastePoster heading='Recycle' para='Convert used materials into new products, conserving energy and resources, reducing pollution, and promoting a closed-loop system for environmental sustainability.' img='/waste/recycle.jpg' />

        </div>

        <div className='bg-green-500 text-white p-5 rounded-xl'>
          <h3 className='text-2xl font-bold '>Take Actions</h3>
          <p>Learn how to reduce, reuse, and recycle effectively. Discover sustainable practices and take action to minimize waste.</p>

          <div className='flex flex-row gap-x-6 mt-6'>
           <Link href={"#smartwastemanagement"}><Button variant={"secondary"} size={"lg"} className='rounded-lg'>Manage Waste At Home</Button></Link> 

            {/* scheduling use sheet*/}
            <Sheet >
              <SheetTrigger asChild>

                <Button variant={"secondary"} size={"lg"} className='rounded-lg'>Schedule Waste Pickup At Your Ease</Button>
              </SheetTrigger>

              <SheetContent side={"right"} className="overflow-auto">
                <SheetHeader>
                  <SheetTitle>Pick up Waste at Your Doorstep</SheetTitle>
                  <SheetDescription>
                  Doorstep waste pickup service: Conveniently collect trash for environmental responsibility.


                    <div className='my-6 flex flex-col gap-y-5' >
                      <div className=''>
                        <p className='mb-5 font-bold' >Pick-up Date</p>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                        />
                      </div>

                      <div>
                        <p className='my-5 font-bold'>Pick Time Slot</p>
                        <div className='grid grid-cols-3 gap-3'>
                          {timeSlots.map((item: TimeSlotArrTypes, index: number) => (
                            <Button key={index}
                              // disabled={isSlotBooked(item.time)}
                              variant={"outline"}
                              className={`border rounded-lg
                              p-2 px-3 hover:bg-primary
                              hover:text-white

                              ${selectedTime == item.time && 'bg-primary text-white'}`}

                              onClick={() => setSelectedTime(item.time)}
                            >{item.time}</Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>

                <SheetFooter className="mt-5">
                  <SheetClose asChild>
                    {/* <div className='flex gap-5'> */}
                    {/* <Button variant="destructive"
                        className="">Cancel</Button> */}

                    <Button
                      variant={"default"}
                      className='w-full rounded-lg'
                      size={"lg"}
                      disabled={(selectedTime === "")}
                      onClick={() => saveBooking()}
                    >
                      Schedule Pickup</Button>
                    {/* </div> */}

                  </SheetClose>
                </SheetFooter>

              </SheetContent>


            </Sheet>

          </div>


        </div>

        {/* ai */}
        <div id="smartwastemanagement"className='bg-white p-5 rounded-xl shadow-lg my-6 flex flex-col gap-y-4'>
          <div>
            <h3 className='text-2xl font-bold '>Smart Waste Management at Home</h3>
            <p>Small actions lead to big impacts in waste reduction and sustainability.</p>
          </div>


          {/* <UploadbtnModal /> */}
          <DropzoneModal />
<div className='flex flex-row gap-5'>
        {imgUrl !== "" &&
            <div>
              <Image src={imgUrl} alt='waste img' width={250} height={250} />
            </div>
        }
        {
            imgUrl !== ""  &&
            <div className='flex flex-row gap-x-5'>
            <div className='bg-gray-100 text-black px-8 py-5 rounded-lg flex flex-col gap-y-6 items-center justify-center'>
              <div className=''>
                  <h2 className='text-sm'>Waste Type :</h2>
                  {/* <p>{wasteType.}</p> */}
                  <p className=' font-medium text-lg'>{wasteType.Class}</p>
              </div>
              
            </div>
          </div>
        }
        {
          // implemented here
          data && 
          <div className='p-5 bg-green-500 rounded-lg'>
            <p className='text-white '>{data}</p>
          </div>

          
        }

        
      
        
</div>
          
          
        </div>





      </section>
    </MaxWidthWrapper>
  )
}

export default WasteManagementPage


// <div className=''>
//                   {/* <h2 className='font-medium text-lg'>Model Confidence Score :</h2>
//                   {/* <p>{wasteType.}</p> */}
//                   {/* <p className='text-sm ml-2'>{wasteType.ConfidenceScore}</p> */} */}
//               </div>