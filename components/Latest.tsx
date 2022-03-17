import React from 'react'
import { DataRecentPost } from '../types'
import moment from 'moment'
import Link from 'next/link'

const Latest = ({ post }: { post: DataRecentPost }) => {
  return (
    <div
      className="cursor-pointer  rounded p-2
    transition duration-700 hover:bg-neutral-800"
    >
      <Link href={`/post/${post.slug}`}>
        <a className="flex justify-between no-underline">
          <div>
            <h1 className="text-lg">{post.title}</h1>
          </div>
          <div>
            <p className="text-lg text-gray-500">
              {' '}
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Latest
