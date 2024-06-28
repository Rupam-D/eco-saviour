'use client'

import { FC } from 'react'



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import BotHeader from './Bot-header'
import AllMessages from './Messages'
import BotInput from './Bot-input'
import { Button } from './ui/button'

const Bot: FC = () => {
  return (
    <>
{/* <div className=' bg-pink-500'> */}
<Dialog >
  <DialogTrigger asChild={true}>
    <Button variant={"outline"} className=' w-80 p-8 fixed right-8 bottom-8'>
    <BotHeader />
    </Button>
    
    
  </DialogTrigger>
  <DialogContent className="max-w-7xl w-full h-[90vh]">
    <DialogHeader>
      <DialogTitle className=''>Reduce Carbon Footprint with Ecobot.</DialogTitle>
      <DialogDescription>
      <div className='flex flex-col '>
                <AllMessages />
                <BotInput />
              </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
{/* </div> */}
    

    {/* <Accordion
      type='single'
      collapsible
      className='relative bg-white z-40 shadow'>
      <AccordionItem value='item-1'>
        <div className='fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden'>
          <div className='w-full h-full flex flex-col'>
            <AccordionTrigger className='px-6 border-b border-zinc-300'>
              <BotHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col h-80'>
                <AllMessages />
                <BotInput />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion> */}
    </>
  )
}

export default Bot