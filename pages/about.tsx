import { NextPage } from 'next'
import Link from 'next/link'
import { FcImport } from 'react-icons/fc'

const About: NextPage = () => {
  return (
    <div className="h-full p-2">
      <div className="mt-16 mb-10 flex flex-col items-center justify-center">
        <h1 className="font-spartan text-4xl">About me</h1>
        <p className="mt-3 text-gray-500">
          Full stack developer specialized in modern Javascript
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-3xl ">
        <p>
          Hey, I'm Solange! I'm a full stack developer. Finally, I decided to
          start documenting my learnings in a blog. My main goal is to share
          what I've learned, and what I'm learning currently as a developer.
        </p>
        <p className="my-5">You can find me in:</p>
        <ul className="mb-8">
          <li className="mb-2">
            <Link href="https://solangeormeno.com/">
              <a
                className="flex decoration-violet-500 decoration-2
    underline-offset-4 transition duration-500 hover:text-white "
              >
                <span className="mr-2 flex items-center">
                  {' '}
                  <FcImport />{' '}
                </span>
                My Website
              </a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="https://github.com/zol22">
              <a
                className="flex decoration-violet-500 decoration-2
    underline-offset-4 transition duration-500 hover:text-white "
              >
                <span className="mr-2 flex items-center">
                  {' '}
                  <FcImport />{' '}
                </span>
                Github
              </a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="https://twitter.com/solangeormeno22">
              <a
                className="flex decoration-violet-500 decoration-2
    underline-offset-4 transition duration-500 hover:text-white"
              >
                <span className="mr-2 flex items-center">
                  {' '}
                  <FcImport />{' '}
                </span>
                Twitter
              </a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="https://www.linkedin.com/in/solangeormeno22/">
              <a
                className="flex decoration-violet-500 decoration-2
    underline-offset-4 transition duration-500
    hover:text-white"
              >
                <span className="mr-2 flex items-center">
                  {' '}
                  <FcImport />{' '}
                </span>
                Linkedln
              </a>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="https://codepen.io/zol22">
              <a
                className="flex decoration-violet-500 decoration-2
    underline-offset-4 transition duration-500
    hover:text-white"
              >
                <span className="mr-2 flex items-center">
                  {' '}
                  <FcImport />{' '}
                </span>
                CodePen
              </a>
            </Link>
          </li>
        </ul>
        <div className="mb-8">
          <h1 className="mb-3 font-spartan text-2xl text-violet-500 ">
            Why I'm doing now
          </h1>
          <ul>
            <li className="mb-2 flex ">
              {' '}
              <span className="mr-2 flex items-center">
                <FcImport />
              </span>{' '}
              Looking for my dream job as a developer.
            </li>
            <li className="mb-2 flex ">
              {' '}
              <span className="mr-2 flex items-center">
                <FcImport />
              </span>{' '}
              Building side projects.
            </li>
            <li className="mb-2 flex">
              {' '}
              <span className="mr-2 flex items-center">
                <FcImport />
              </span>{' '}
              Learning Next.js and Graphql. This blog was made using Next.js,
              grapql and graphCMS.
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h1 className="mb-3 font-spartan text-2xl text-violet-500 ">
            Random Facts
          </h1>
          <ul>
            <li className="mb-2 flex">
              <span className="mr-2 flex items-center">
                <FcImport />
              </span>
              I took my first programmning class when I was twenty. It was
              python and to be honest, I didn't like it at first.
            </li>
            <li className="mb-2 flex">
              {' '}
              <span className="mr-2 flex items-center">
                <FcImport />
              </span>{' '}
              I love dancing. I used to dance mostly in high school but I'm
              considering taking dancing classes again.
            </li>
            <li className="mb-2 flex">
              <span className="mr-2 flex items-center">
                {' '}
                <FcImport />
              </span>
              I went to college to get a bachelor in IT but I'm a self-taught
              developer.
            </li>
            <li className="mb-2 flex">
              <span className="mr-2 flex items-center">
                {' '}
                <FcImport />
              </span>
              Out of nowhere, I moved to Florida. I did it within a week because
              I wanted a fresh start. I don't regret it at all.
            </li>
            <li className="mb-2 flex">
              <span className="mr-2 flex items-center">
                {' '}
                <FcImport />
              </span>
              Ughh I love dogs! My baby is a 1 year maltipoo. His name is tobby.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
