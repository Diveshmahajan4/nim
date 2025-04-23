'use client'
import { motion } from 'motion/react'
import { PROJECTS } from '../data'
import ProjectVideo from '@/components/project-video'
import { Spotlight } from '@/components/ui/spotlight'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Page() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
            >
              <Spotlight
                className="from-blue-900 via-blue-800 to-blue-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-900">
                <div className="relative flex w-full flex-col justify-between">
                  <div className="m-2">
                    {
                      <project.icon className="h-7 w-7 transition-all duration-200 group-hover:h-8 group-hover:w-8" />
                    }
                  </div>
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {project.name}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
