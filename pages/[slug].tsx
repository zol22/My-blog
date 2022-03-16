import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { getPosts, getPostDetails } from '../services'
import { PostDetail } from '../components'
import { ParsedUrlQuery } from 'querystring'
import { Edge, Node } from '../types'

interface IParams extends ParsedUrlQuery {
  slug: string
}
const PostDetails: NextPage<{ post: Node }> = ({ post }) => {
  console.log(post)
  return (
    <div className="h-full  p-4">
      <div className="mx-auto mt-16 max-w-3xl ">
        <PostDetail post={post} />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }: Edge) => ({ params: { slug } })),
    fallback: true,
  }
}
// Fetch data at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams
  const data = await getPostDetails(slug)
  return {
    props: { post: data },
  }
}

export default PostDetails
