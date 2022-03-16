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
            <a className="font-bold text-gray-200 decoration-violet-500 decoration-2 underline-offset-4 hover:text-yellow-200">
              {obj.children[0].text}
            </a>
          </Link>
        )
      }
    }

    switch (type) {
      /* TODO: Tell modifiedText is type PurpleChildArray for mapping */

      /*TODO: Tell obj is type RawChild */

      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item: any, i: React.Key) => (
              <React.Fragment key={i}>{item as PurpleChild}</React.Fragment>
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
    <div>
      <p>
        Written by {post.author.name} on{' '}
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <h1>{post.title}</h1>
      {post.content.raw.children.map((typeObj: RawChild, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        )

        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  )
}

export default PostDetail
