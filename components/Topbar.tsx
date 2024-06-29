"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import Link from 'next/link'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRightIcon, Gem } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button";



import MaxWidthWrapper from "./Max-widthWrapper";
import UserAccount from "./UserAccount";

const Topbar = () => {
  const {
    user } = useKindeBrowserClient()


  return (
    <nav className='sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>

      <MaxWidthWrapper>
        <div className='flex h-16 items-center justify-between border-b border-zinc-200'>
          {/* logo */}
          <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span className='underline underline-offset-4 decoration-2 decoration-green-600'>EcoSaviour.</span>
          </Link>

          {/* Mobile Nav will done later */}

          <div className='hidden sm:flex items-center gap-x-4'>


            {/* Login Logout */}
            {
              user && user !== null ?
                <div className="flex items-center justify-center gap-4">
                  <Link href={"/dashboard"} className={buttonVariants({
                    variant: "ghost",
                    size: "sm"

                  })}>Dashboard</Link>

                  <Link href='/pricing' className={buttonVariants({
                    variant: "ghost",
                    size: "sm"
                  })}>
                    Upgrade{' '}
                    <Gem className='text-green-600 h-4 w-4 ml-1.5' />
                  </Link>

                  <UserAccount email={user.email || " "} imageUrl={user.picture || "/avatar/avatar.jpeg"} name={!user.given_name || !user.family_name
                    ? 'My Account'
                    : `${user.given_name} ${user.family_name}`} />
                </div>

                :
                <div className="flex items-center justify-center gap-4">
                  <LoginLink className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}>Sign In</LoginLink>

                  <RegisterLink className={buttonVariants({ variant: 'default', size: "sm" })}>Start Build Better Futute Today <ArrowRightIcon className='ml-2 w-5 h-5' /></RegisterLink>
                </div>
            }
          </div>

          {/* Mobilenav */}
          <div className='flex items-center gap-x-4 sm:hidden'>


            {/* Login Logout */}
            {
              user && user !== null ?
                <UserAccount email={user.email || " "} imageUrl={user.picture || "/avatar/avatar.jprg"} name={!user.given_name || !user.family_name
                  ? 'My Account'
                  : `${user.given_name} ${user.family_name}`} />
                :
                <div className="flex items-center justify-center gap-4">


                  <RegisterLink className={buttonVariants({ variant: 'default', size: "sm" })}>Started for Free <ArrowRightIcon className='ml-2 w-5 h-5' /></RegisterLink>
                </div>
            }
          </div>

        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Topbar
