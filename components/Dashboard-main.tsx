"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Dashboardmain = ({ name }: { name: string }) => {
  const namearr = name.split(" ")
  console.log(namearr)
  return (
    <section className='grid grid-cols-2 gap-x-12 py-8 px-6'>
      <div className='flex flex-col gap-y-4'>
        <div className=" flex flex-col gap-y-2">
          <h2 className='font-bold text-4xl '>Welcome back, {namearr[0]}</h2>
          <p>Discover the journey</p>
        </div>

        <div className=" flex flex-col gap-y-2 border-b-green-400 border-spacing-y-8 ">
          <h3 className='text-xl font-semibold'>Ongoing Events</h3>
          <p>Join Now!</p>
          {/* list of all events */}
        </div>

        <div className='carbon-footprint-calculator p-6 rounded-xl bg-green-500 flex flex-col gap-y-2 text-white shadow-md'>
          <h3 className='text-xl font-semibold text-white'>Check Your CO2 Emmision</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, iste.</p>
          <Link href={"/dashboard/carbon-calculator"}><Button variant={'secondary'} className='rounded-lg mt-4' size={'lg'}>Check Now</Button></Link>
        </div>

        <div className='manage-waste p-6 rounded-xl bg-green-500 flex flex-col gap-y-2 text-white shadow-md'>
          <h3 className='text-xl font-semibold'>Manage Waste Efficiently</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, iste.</p>
          <Link href={"/dashboard/waste-management"}><Button variant={'secondary'} className='rounded-lg mt-4' size={'lg'}>Manage Now</Button></Link>
        </div>

        <div className='Save The World p-6 rounded-xl bg-green-500 flex flex-col gap-y-2 text-white shadow-md'>
          <h3 className='text-xl font-semibold '>Save The World</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, iste.</p>
          <Link href={"/dashboard/save-the-world"}><Button variant={'secondary'} className='rounded-lg mt-4' size={'lg'}>Contribute Now</Button></Link>
        </div>
      </div>

      {/* right half */}
      <div className='flex flex-col gap-y-6'>
        <div className='eco-challenges p-6 rounded-xl bg-green-500 flex flex-col gap-y-2 text-white shadow-md'>
          <h3 className='text-2xl font-semibold '>Eco Challenges</h3>
          <p>Explore Eco-Friendly Challenges Today</p>
          <Link href={"/dashboard/eco-challenge"}><Button variant={'secondary'} className='rounded-lg mt-4 bg-white text-green-600' size={'lg'}>Check Now</Button></Link>
        </div>

        <div className='flex flex-col gap-y-1'>
          <h3 className='text-2xl font-semibold bg-green-500 text-white p-3 rounded-lg '>Leaderboard</h3>
          <div className='p-4 bg-gray-100 rounded-lg shadow-md'>
            <ul>
              <li>Rupam</li>
              <li>Rupam</li>
              <li>Rupam</li>
              <li>Rupam</li>
              <li>Rupam</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Dashboardmain
