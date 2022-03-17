import React from 'react'
import { Node, PurpleChild, PurpleChildArray, RawChild } from '../types'
import moment from 'moment'
import Link from 'next/link'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { textContent } from 'domutils'
import Image from 'next/image'

const PostDetail = ({ post }: { post: Node }) => {
  /* const getContentFragment = (
    index: React.Key,
    text: PurpleChild | PurpleChildArray | any,
    obj: PurpleChild | RawChild | any,
    type?: string
  ) => {
    let modifiedText = text

    // About the children array
  
    if (obj) {
      if (obj.bold) {
        modifiedText = (
          <b className="text-gray-200" key={index}>
            {text}
          </b>
        )
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = (
          <u
            className="decoration-violet-500 decoration-2 underline-offset-4"
            key={index}
          >
            {text}
          </u>
        )
      }

      if (obj.href !== undefined) {
        modifiedText = (
          <Link key={index} href={obj.href}>
            <a className="text-lg font-bold text-gray-200 decoration-violet-500 decoration-2 underline-offset-4 hover:bg-violet-500">
              {obj.children[0].text}
            </a>
          </Link>
        )
      }
    }

    // About the types
    switch (type) {
     

      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item: any, i: React.Key) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: React.Key) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item: any, i: React.Key) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
  
      case 'numbered-list':
        return (
          <ol key={index} className="ml-5 mt-5 mb-5 list-decimal">
            {obj.children.map((eachChild: any) =>
              eachChild.children.map((oneChild: any, index: React.Key) => (
                <li key={index}>
                  {oneChild.children.map((one: any) => one.text)}
                </li>
              ))
            )}
          </ol>
        )
  
      case 'bulleted-list':
        return (
          <ul key={index} className="ml-5 mt-5 mb-5 list-disc">
            {obj.children.map((eachChild: any) =>
              eachChild.children.map((oneChild: any, index: React.Key) => (
                <li key={index}>
                  {oneChild.children.map((one: any) => one.text)}
                </li>
              ))
            )}
          </ul>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }*/

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
      {/*post?.content.raw.children.map((typeObj: RawChild, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        )

        return getContentFragment(index, children, typeObj, typeObj.type)
      })*/}
      <RichText
        content={post?.content.raw.children as any}
        renderers={{
          h1: ({ children }) => (
            <h1 className="text-3xl text-gray-200 ">{children}</h1>
          ),
          h2: ({ children }) => (
            <h1 className="text-2xl text-gray-200 ">{children}</h1>
          ),
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
            <ul className="ml-5 mt-5 mb-5 list-disc">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="ml-5 mt-5 mb-5 list-decimal">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-4 mb-4 ml-5  border-l-2 border-gray-700 p-2 italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="mt-5 mb-14  bg-gray-800 p-2">{children}</code>
          ),
          img: ({ src, altText, height, width }) => (
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
