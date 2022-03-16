import Image from 'next/image'
import Link from 'next/link'
import { FaGithubAlt } from 'react-icons/fa'
import { BsEmojiSunglasses } from 'react-icons/bs'

const Welcome = () => {
  return (
    <div className="mb-20 mt-16 w-full">
      <div className="grid grid-cols-1 gap-3 p-2 md:grid-cols-5">
        <div className="col-span-4">
          {' '}
          <h1 className="mb-3 text-4xl font-bold">Hi, I'm Solange.</h1>
          <p className="pr-5 leading-loose">
            {' '}
            I'm a Full Stack{' '}
            <span className="font-bold underline  decoration-violet-500 decoration-4 underline-offset-4">
              Developer
            </span>{' '}
            specializing in modern Javascript. I'm based in Florida. I do
            believe that each day is a learning day so I decided to start a blog
            to learn together.
          </p>
          <div className="mt-2 flex justify-between pt-2">
            <Link href="/about">
              <a
                className="text-sm  text-gray-500 no-underline transition
    duration-500 hover:text-violet-300"
              >
                <span className=" flex items-center">
                  <BsEmojiSunglasses className="mr-2" fontSize="large" />
                  More about me
                </span>
              </a>
            </Link>
            <Link href="https://github.com/zol22">
              <a
                className="mr-20 text-sm text-gray-500 no-underline
    transition duration-500 hover:text-violet-300"
              >
                {' '}
                <span className=" flex items-center">
                  <FaGithubAlt className="mr-2" fontSize="large" />
                  Github
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="https://raw.githubusercontent.com/zol22/images/main/me2-modified.png"
            alt="My image"
            width="250"
            height="250"
          />
        </div>
      </div>
    </div>
  )
}

export default Welcome
