import React from 'react'
import { Node } from '../types'
import moment from 'moment'
import Link from 'next/link'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { RichTextContent } from '@graphcms/rich-text-types'

import Image from 'next/image'

const PostDetail = ({ post }: { post: Node }) => {
  return (
    <div className="h-full">
      <div className="mt-16 mb-10 flex flex-col items-center justify-center">
        <p className="mb-8 text-sm text-gray-500">
          Written by{' '}
          <Link href="/about">
            <a className="font-bold text-gray-200 decoration-violet-500 decoration-2 underline-offset-4 hover:bg-violet-500">
              {post && post.author.name}
            </a>
          </Link>{' '}
          on {moment(post?.createdAt).format('MMM DD, YYYY')}
        </p>
        <h1 className="text-4xl text-gray-200">{post && post.title}</h1>
      </div>

      <RichText
        content={post?.content.raw.children as RichTextContent}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-3xl text-gray-200 ">{children}</h1>
          ),
          h2: ({ children }) => (
            <h1 className="text-2xl text-gray-200 ">{children}</h1>
          ),
          p: ({ children }) => <p className="mt-3 mb-3 ">{children}</p>,
          a: ({ children, openInNewTab, href, rel }) => (
            <a
              href={href}
              target={openInNewTab ? '_blank' : '_self'}
              rel={rel || 'noopener noreferrer'}
              className="text-lg font-bold text-gray-200 decoration-violet-500 decoration-2 underline-offset-4 hover:bg-violet-500"
            >
              {children}
            </a>
          ),
          bold: ({ children }) => (
            <strong className="text-gray-200">{children}</strong>
          ),
          ul: ({ children }) => (
            <ul className="ml-5 mt-8 mb-5 list-disc">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="ml-5 mt-8 mb-5 list-decimal">{children}</ol>
          ),
          li: ({ children }) => <li className="mt-5 mb-5 ">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="mt-4 mb-4 ml-5  border-l-2 border-gray-700 p-2 italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="mt-5 mb-5 bg-gray-800 p-2 font-bold">
              {children}
            </code>
          ),
          img: (
            { src, altText, height, width } // images like screenshots
          ) => (
            <Image
              src={src!}
              alt={altText}
              height={height}
              width={width}
              objectFit="cover"
            />
          ),
        }}
      />
    </div>
  )
}

export default PostDetail
