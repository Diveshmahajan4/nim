'use client'
import { NavBar } from '@/components/tubelight-navbar'

export function Header() {
  return (
    <header className="mb-8 flex-col items-center justify-between">
      <div className="mb-10 flex justify-end items-end w-full">
        <NavBar />
      </div>
    </header>
  )
}
