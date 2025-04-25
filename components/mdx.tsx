import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React, { ReactNode } from 'react'
import { useMDXComponents } from '@/mdx-components'

type TableData = {
  headers: string[]
  rows: string[][]
}

function Table({ data }: { data: TableData }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
}

function CustomLink(props: CustomLinkProps) {
  const { href, children, ...rest } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props: ImageProps) {
  return <Image className="rounded-lg" {...props} />
}

type CodeProps = React.HTMLAttributes<HTMLElement> & {
  children: string
}

function Code({ children, ...props }: CodeProps) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    // Convert children to plain text
    const childText =
      typeof children === 'string'
        ? children
        : Array.isArray(children)
          ? children.map(child => (typeof child === 'string' ? child : '')).join('')
          : '';

    const slug = slugify(childText);

    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`
  return Heading
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

type CustomMDXProps = MDXRemoteProps & {
  components?: Record<string, React.ComponentType<any>>
}

export function CustomMDX(props: CustomMDXProps) {
  const extendedComponents = useMDXComponents(components)
  return (
    <MDXRemote
      {...props}
      components={{ ...extendedComponents, ...(props.components || {}) }}
    />
  )
}
