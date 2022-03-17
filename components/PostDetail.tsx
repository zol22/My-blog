import React from 'react'
import { Node, PurpleChild, PurpleChildArray, RawChild } from '../types'
import moment from 'moment'
import Link from 'next/link'

const PostDetail = ({ post }: { post: Node }) => {
  const getContentFragment = (
    index: React.Key,
    text: PurpleChild | PurpleChildArray | any,
    obj: PurpleChild | RawChild | any,
    type?: string
  ) => {
    let modifiedText = text

    // About the children array
    /* TODO: Tell obj is type PurpleChild here */
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
      /* TODO: Tell modifiedText is type PurpleChildArray for mapping */

      /*TODO: Tell obj is type RawChild */

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
      /* TODO: This is rendering for every number list*/
      case 'numbered-list':
        return (
          <ol key={index} className="ml-5 list-decimal">
            {obj.children.map((eachChild: any) =>
              eachChild.children.map((oneChild: any, index: React.Key) => (
                <li className="mb-6" key={index}>
                  {oneChild.children.map((one: any) => one.text)}
                </li>
              ))
            )}
          </ol>
        )
      /* TODO: This is rendering for every number list*/
      case 'bulleted-list':
        return (
          <ul key={index} className="ml-5 list-disc">
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
  }

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
      {post?.content.raw.children.map((typeObj: RawChild, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        )

        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  )
}

export default PostDetail
