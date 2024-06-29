import Image from 'next/image'
import React from 'react'

const WastePoster = ({ heading, para, img }: { heading: string, para: string, img: string }) => {
  return (
    <div className='p-5 bg-white rounded-lg shadow-md flex flex-col gap-y-3'>
      <h3 className='font-semibold text-xl'>{heading}</h3>
      <Image src={img} alt={heading} height={250} width={250} className='mx-auto' />
      <p className='texy-sm p-2'>{para}</p>
    </div>
  )
}

export default WastePoster
