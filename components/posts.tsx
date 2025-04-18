import { formatDate, getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import { AnimatedBackground } from './ui/animated-background'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
  
    <div className="flex flex-col space-y-0">
    <AnimatedBackground
      enableHover
      className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-800/80"
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
    >
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
        <Link
          key={post.slug}
          className="-mx-3 rounded-xl px-3 [text-decoration:none]"
          href={"blog/" + post.slug}
          data-id={post.slug}
        >
          <div className="flex flex-col">
            <h4 className="dark:text-zinc-100">
              {post.metadata.title}
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400">
              {post.metadata.summary}
            </p>
          </div>
        </Link>
      ))}
    </AnimatedBackground>
  </div>
  )
}