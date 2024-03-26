import { cn } from '@/src/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarItem from './sidebar-item'
type Props = {
    className?: string
}

const Sidebar = ({
    className
}: Props) => {
  return (
      <div className={cn('flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-1 flex-col', className)}>
          <Link href={"/"}>
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/MedSyncLogo.svg" height={40} width={40} alt="MedSync" />
          <h1 className="text-2xl font-extrabold text-slate-700 tracking-wide">
            MedSync
          </h1>
              </div>
          </Link>
          <div className=' flex flex-col gap-y-2 flex-1'>
              <SidebarItem
                  label='Home'
                  href='/'
                  iconSrc='/home.svg'
              />
              <SidebarItem
                  label='About'
                  href='/about'
                  iconSrc='/about.svg'
              />
              <SidebarItem
                  label='Services'
                  href='/services'
                  iconSrc='/services.svg'
              />
              <SidebarItem
                  label='Contact'
                  href='/contact'
                  iconSrc='/contact.svg'
              />
          </div>
      </div>
  )
}

export default Sidebar