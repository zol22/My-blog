import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { getPosts } from '../services'
import { Edge } from '../types'
import moment from 'moment'
import { useState } from 'react'
import Head from 'next/head'

const Articles: NextPage<{ posts: Edge[] }> = ({ posts }) => {
  const [articles, setArticles] = useState(posts)
  const [input, setInput] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const filterArticleList = articles.filter((article) =>
    article.node.title.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  )
  return (
    <div className="h-screen">
      <Head>
        <title>Articles | Solange Ormeno </title>
        <meta
          name="viewport"
          content="Tutorial, technical articles, snippets, reference materials and all development-related resources I've written"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="mt-16 mb-10 flex justify-center">
        <h1 className="text-4xl">Articles</h1>
      </div>
      <div className="mx-auto max-w-3xl">
        <input
          type="text"
          className="mb-14 w-full rounded-md border border-neutral-700 bg-neutral-800  px-3 py-3 text-sm placeholder-gray-500 shadow-sm
       focus:border-violet-500 focus:via-violet-500
      focus:outline-none focus:ring-1 
      disabled:border-slate-200 disabled:bg-slate-50
      disabled:text-slate-500 disabled:shadow-none"
          placeholder="Begin typing to search.."
          onChange={handleChange}
        ></input>
        <div>
          {' '}
          {filterArticleList.map((post, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer  rounded p-2
              transition duration-700 hover:bg-neutral-800"
              >
                <Link href={`/post/${post.node.slug}`}>
                  <a className="flex justify-between no-underline">
                    <div>
                      <h1>{post.node.title}</h1>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {' '}
                        {moment(post.node.createdAt).format('MMM DD, YYYY')}
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}

export default Articles
