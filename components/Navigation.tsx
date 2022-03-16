import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className="w-full bg-neutral-900 px-10 py-5 ">
      <header className=" my-0 mx-auto flex h-full max-w-2xl items-center justify-between py-2 px-6">
        <div className="text-base font-bold hover:text-violet-300">
          <Link href="/">
            <a className="no-underline">Solange Ormeno</a>
          </Link>
        </div>
        <nav>
          <ul className="items baseline m-0 flex list-none p-0">
            <li className="ml-5">
              <Link href="/articles">
                <a
                  className="text-sm no-underline  transition
    duration-500 hover:text-violet-300"
                >
                  Articles
                </a>
              </Link>
            </li>
            {/*
            <li className="ml-5">
              <Link href="/projects">
                <a
                  className="text-sm  no-underline  transition
    duration-500 hover:text-violet-300"
                >
                  Projects
                </a>
              </Link>
            </li>*/}
            <li className="ml-5">
              <Link href="/about">
                <a
                  className="text-sm  no-underline  transition
    duration-500 hover:text-violet-300"
                >
                  About me
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
