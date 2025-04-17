"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Briefcase, FileText, Home, LucideIcon, User } from "lucide-react"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  className?: string
}

export function NavBar({ className = "" }: NavBarProps) {
    const items = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Blogs', url: '/blog', icon: User },
        { name: 'Projects', url: '/projects', icon: Briefcase },
        { name: 'Hackathons', url: '/hackathons', icon: FileText }
      ]
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={` ${className}`}
    >
      <div className="flex items-end justify-end dark:bg-black/5 border dark:border-zinc-600/20 backdrop-blur-lg py-1 px-1 rounded-full dark:shadow-lg shadow-md">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors duration-200 ${
                isActive
                  ? "bg-gray-100 dark:bg-neutral-800/10 dark:text-gray-50"
                  : "dark:text-gray-300 dark:hover:text-white"
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
                  className="absolute inset-0 w-full bg-neutral-300/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[1px] dark:bg-white bg-blue-400 rounded-t-full">
                    <div className="absolute w-12 h-6 dark:bg-white/20 bg-blue-400/20 rounded-full blur-md -bottom-2 -left-2" />
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
