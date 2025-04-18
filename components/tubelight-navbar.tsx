'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, FileText, Home, LucideIcon, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string
}

export function NavBar({ className = '' }: NavBarProps) {
  const pathname = usePathname()
  const items = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Blogs', url: '/blog', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Hackathons', url: '/hackathons', icon: FileText },
  ]
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={` ${className}`}>
      <div className="flex items-end justify-end rounded-full border px-1 py-1 shadow-md backdrop-blur-lg dark:border-zinc-600/20 dark:bg-black/5 dark:shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.url

          return (
            <Link
              key={item.name}
              href={item.url}
              className={`relative cursor-pointer rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? 'bg-gray-100 dark:bg-neutral-800/10 dark:text-gray-50'
                  : 'dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              {/* Text label on desktop, icon on mobile */}
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-neutral-300/5"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -bottom-1 left-1/2 h-[1px] w-8 -translate-x-1/2 rounded-t-full bg-blue-400 dark:bg-white">
                    <div className="absolute -bottom-2 -left-2 h-6 w-12 rounded-full bg-blue-400/20 blur-md dark:bg-white/20" />
                    {/* <div className="absolute w-8 h-5 bg-white/20 rounded-full blur-md -bottom-1" />
                    <div className="absolute w-4 h-3 bg-white/20 rounded-full blur-sm bottom-0 left-2" /> */}
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
