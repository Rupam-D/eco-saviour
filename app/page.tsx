"use client"

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { trpc_client } from "./_trpc/client";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon, CircleUserRound, Github, Globe, Leaf, MessagesSquare, Recycle, UploadCloud, WholeWord } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/Max-widthWrapper";
import Image from "next/image";

export default function Home() {
  const { data, isLoading } = trpc_client.test.useQuery()
  console.log(isLoading, data, "client sid")
  return (
    <div className="bg-gray-50/20">
    <div className="relative bg-gray-50">

      {/* <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" />
      </div> */}



      <section className=" py-12 sm:py-16 lg:pt-20 lg:pb-36">
        {/* <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-1 -z-10 transform-gpu overflow-hidden  '>
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          />
        </div> */}

        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj capitalize">
                  Combining {' '}
                  <span className='text-green-600'>Greenery</span>{' '} with Tech
                  for a better planet
                </h1>

                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                  

                  {/* <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">Used by <span className="font-bold">500+ Students,Researchers & Teachers</span> on their daily life.</p> */}
                </div>
              </div>

              <div className=" z-50 mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <RegisterLink
                  className={buttonVariants({ variant: "default", size: "lg" })}>
                  Start Journey With Us
                  <ArrowRightIcon className='ml-2 w-5 h-5' />
                </RegisterLink>


                <Link
                  href='https://github.com/Rupam-D/eco-saviour'
                  target='_blank'>
                  <Button variant={"outline"} size={"default"} className="mt-5 sm:mt-0 border border-green-500 shadow-sm ring-1 ring-green-200">
                    <Github className='mr-2 h-5 w-5 ' />
                    Give us a star{' '}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="xl:col-span-3">
              
              <img className="w-[87%] mx-auto scale-110 rounded-md bg-white p-2  shadow-lg shadow-green-600/10 ring-1 ring-green-900/10" src="/home/1.png" alt="" />


            </div>


          </div>
        </div>

      </section>
    </div>


    {/* Feature section */}
    <MaxWidthWrapper>
      <div className='relative mx-auto mb-32 mt-32 max-w-5xl sm:mt-28'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Make A Healthier Future
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
             Empower positive change with every decision for a sustainable tomorrow.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='bg-green-100 text-green-600 p-3 cursor-pointer w-fit rounded-xl'>
                <Leaf className='h-8 w-8' />
              </span>
              <span className='text-xl font-semibold'>
                Reduce Carbon Emmision
              </span>
              <span className='mt-2 text-zinc-700'>
              Harness artificial intelligence for smarter, eco-friendly choices and a cleaner planet
                
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='bg-green-100 text-green-600 p-3 cursor-pointer w-fit rounded-xl'>
                <Recycle className='h-8 w-8' />
              </span>
              <span className='text-xl font-semibold'>
               Smart Waste Management at Home
              </span>
              <span className='mt-2 text-zinc-700'>
              Optimize household waste handling for a cleaner, more efficient environment.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='bg-green-100 text-green-600 p-3 cursor-pointer w-fit rounded-xl'>
                <Globe className='h-8 w-8' />
              </span>
              <span className='text-xl font-semibold'>
                Commitment To Build A Green Planet
              </span>
              <span className='mt-2 text-zinc-700'>
              Empowering sustainable actions for a cleaner, healthier world
              </span>
            </div>
          </li>
        </ol>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-60 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          {/* <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffc880] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
          /> */}
        </div>
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/home/5.png'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-1 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>

        {/* <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-10'>
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
        />
      </div> */}
      </div>
    </MaxWidthWrapper>

  


   
    {/* footer */}
    <footer className="flex flex-col sm:flex-row w-full py-5 px-7 bg-green-800 text-white text-sm items-center justify-between ">
      <div>
        <p className=""><span className="font-bold">EcoSaviour</span> - Make world More Sustainable</p>
        <p className="text-white/90 text-sm block mt-1">A Hack4Bengal Project</p>
      </div>

      <div>
        <p className="sm:mt-3 text-white text-base ">Team: Rupam Das, Ritobrata Bose, Pranay Bhowmik & Pulak Tarafder</p>
      </div>


    </footer>



  </div>
  );
}
