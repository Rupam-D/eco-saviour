"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
// import { calculateCarbonEmission } from '@/actions/calculateCarb'
import { cn } from '@/lib/utils'

import { calculateCarbonEmission } from '@/action/calculateCarbon'
import Bot from './Bot'

//  Define emission factors(example values, replace with accurate data)




const CarbonCalculator = () => {

  const [dist, setDist] = useState<number>(0)
  const [waste, setWaste] = useState<number>(0)
  const [electricity, setElectricity] = useState<number>(0)
  const [meals, setMeals] = useState<number>(0)

  const [transportation_emissions, setTransportation_emissions] = useState<string>("")
  const [electricity_emissions, setElectricity_emissions] = useState<string>("")
  const [diet_emissions, setDiet_emissions] = useState<string>("")
  const [waste_emissions, setWaste_emissions] = useState<string>("")
  console.log(dist, electricity, waste, meals, "client usestate")

  const total_emissions = Number(transportation_emissions) + Number(electricity_emissions) + Number(diet_emissions) + Number(waste_emissions)

  const calculateCarbon = () => {

    const { transportation_emissions,
      electricity_emissions,
      diet_emissions,
      waste_emissions } = calculateCarbonEmission({ dist, electricity, meals, waste })
    setTransportation_emissions(transportation_emissions.toFixed(2))
    setElectricity_emissions(electricity_emissions.toFixed(2))
    setDiet_emissions(diet_emissions.toFixed(2))
    setWaste_emissions(waste_emissions.toFixed(2))


  }




  return (
    <div className=' bg-green-50 rounded-2xl px-7 py-7'>
      <h1 className='font-bold text-4xl mb-5 text-center text-green-900'>Check Your Carbon Emmision</h1>
      <div className='input_area grid grid-rows-2 gap-y-4 '>
        {/* input area */}
        <form action={calculateCarbon} className='flex flex-col items-center w-full'>


          <div className='flex flex-row gap-6 mt-6 w-full'>

            <div className='border border-green-900 p-4 rounded-lg flex flex-col items-center justify-center gap-y-4'>
              <h2 className='font-semibold'>🚗 Daily commute distance (in km)</h2>
              <Input type='number' step="0.01" placeholder='Ex. 10' className='border-green-400' onChange={(e: any) => setDist(e.target.value)} />
            </div>

            <div className='border border-green-900 p-4 rounded-lg flex flex-col items-center justify-center gap-y-4'>
              <h2 className='font-semibold'>💡 Monthly electricity consumption (in kWh)</h2>
              <Input type='number' step="0.01" placeholder='Ex. 3.5' className='border-green-400' onChange={(e: any) => setElectricity(e.target.value)} />
            </div>

            <div className='border border-green-900 p-4 rounded-lg flex flex-col items-center justify-center gap-y-4'>
              <h2 className='font-semibold'>🍽️ Number of meals per day</h2>
              <Input type='number' step="0.01" placeholder='Ex. 4' className='border-green-400' onChange={(e: any) => setMeals(e.target.value)} />
            </div>

            <div className='border border-green-900 p-4 rounded-lg flex flex-col items-center justify-center gap-y-4'>
              <h2 className='font-semibold'>🗑️ Waste generated per week (in kg)</h2>
              <Input type='number' step="0.01" placeholder='Ex. 3.5' className='border-green-400' onChange={(e: any) => setWaste(e.target.value)} />
            </div>
            {/* <InputComp sliderHeading='🚗 Daily commute distance (in km)' placeholder='Ex. 10' />
          <InputComp sliderHeading='💡 Monthly electricity consumption (in kWh)' placeholder='Ex. 3.5' />
          <InputComp sliderHeading='🗑️ Waste generated per week (in kg)' placeholder='Ex. 5' />
          <InputComp sliderHeading='🍽️ Number of meals per day' placeholder='Ex. 4' /> */}
          </div>

          {/* calculation */}
          <Button variant={"default"} size={"lg"} className='w-1/4 mx-auto rounded-lg m-12' type='submit'>Calculate</Button>
        </form>


        {/* results */}
        {total_emissions !== 0 &&
          <div className='grid grid-cols-2 flex-row justify-center gap-x-10'>
            <div className='bg-white p-8 h-fit rounded-xl shadow-md'>
              <p className='font-semibold text-2xl mb-4'>Carbon Emissions by Category</p>

              <p className=''>{`🚗 Transportation: ${transportation_emissions} tonnes CO2 per year`}</p>
              <p className=''>{`💡 Electricity: ${electricity_emissions} tonnes CO2 per year`}</p>
              <p className=''>{`🍽️ Diet: ${diet_emissions} tonnes CO2 per year`}</p>
              <p className=''>{`🗑️ Waste: ${waste_emissions} tonnes CO2 per year`}</p>
            </div>
            <div className={cn(total_emissions <= 2.2 ? "bg-green-500 text-white" : "bg-yellow-500 text-black", ' p-8 h-fit rounded-xl shadow-md')}>
              <p className='font-semibold text-2xl mb-4'>Total Carbon Footprint</p>
              <p className='font-medium'>{`🌍 Your total carbon footprint is: ${total_emissions.toFixed(2)} tonnes CO2 per year`}</p>

              <p className='text-sm mt-4'>{`⚠  Per capita carbon dioxide (CO₂) emissions in India have soared in recent decades, climbing from 0.39 metric tons in 1970 to a high of 2.2 metric tons in 2022. This was an increase of 5.5 percent in comparison to 2021 levels. Total CO₂ emissions in India also reached a record high in 2022.`}</p>
            </div>
          </div>
        }

        {/* <EcoBot /> */}
        <Bot />
      </div>
    </div>
  )
}

export default CarbonCalculator
