'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-2xl text-black dark:text-white">
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
            className="h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-700"
          />
        </Link>
      </div>
    </header>
  )
}
