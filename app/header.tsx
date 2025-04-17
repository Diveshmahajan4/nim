'use client'
import { NavBar } from '@/components/tubelight-navbar'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex-col items-center justify-between">
      <div className="mb-10 flex justify-end items-end w-full">
        <NavBar />
      </div>

      <div className=' flex items-center justify-between w-full'>
        <div>
          <Link
            href="/"
            className="text-2xl font-medium text-black dark:text-white"
          >
            Divesh Mahajan
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </div>
        {/* My avatar in circle */}
        <div>
          <Link href="/about">
            <img
              src="/avatar.jpeg"
              alt="Divesh Mahajan"
              className="h-15 w-15 rounded-full border border-zinc-200 dark:border-zinc-700"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}
