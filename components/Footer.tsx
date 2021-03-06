import { FaGithubAlt } from 'react-icons/fa'
import Link from 'next/link'

/* Footer */
function Footer() {
  return (
    <div className="w-full bg-neutral-900">
      <div className="flex h-32 flex-col items-center justify-center">
        <div className="mb-5">
          <p className="text-sm">Made by Solange Ormeno</p>
        </div>

        <span className=" flex items-center text-sm">
          <Link href="https://github.com/zol22/My-blog">
            <a
              className="flex no-underline  transition
    duration-500 hover:text-violet-300"
            >
              <span>
                {' '}
                <FaGithubAlt className="mr-2" fontSize="large" />
              </span>{' '}
              Github
            </a>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Footer
