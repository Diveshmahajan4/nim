import { BlogPosts } from "@/components/posts"


export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <p className="font-semibold text-2xl tracking-tighter">Blogs</p>
      <p className="">Here you can find all the blogss I wrote. You can read about web development, software engineering and tech career.</p>
      <BlogPosts />
    </section>
  )
}