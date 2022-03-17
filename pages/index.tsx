import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Latest, Welcome } from '../components'
import { getRecentPosts } from '../services'
import { DataRecentPost } from '../types'

const Home: NextPage<{ posts: DataRecentPost[] }> = ({ posts }) => {
  return (
    <div className="mx-auto mb-8 h-screen max-w-3xl p-2">
      <Head>
        <title>Web developer | Solange Ormeno </title>
        <meta
          name="viewport"
          content="Solange Ormeno is a full stack developer specialized in modern Javascript. In this, blog, she's sharing her knowledge as a developer"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div>
        <div>
          <Welcome />
          <div className=" flex justify-between p-2 ">
            <h1 className="text-2xl text-violet-500">Latest Articles</h1>
            <h1 className="flex items-center">
              <Link href="/articles">
                <a className="no-underline hover:text-violet-300">View All</a>
              </Link>
            </h1>
          </div>

          <div className="mb-6 w-full border-t border-neutral-600"></div>

          {posts.map((post, index) => (
            <Latest key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
// Fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getRecentPosts()) || []
  return {
    props: { posts },
  }
}
export default Home
