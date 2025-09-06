import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { NAVBAR_HEIGHT } from '@/lib/constants'
import { authLinks } from '@/lib/links'

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 z-50 w-full shadow"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <nav
        aria-label="Main"
        className="flex w-full items-center justify-between bg-gray-900 px-8 py-3 text-white"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="group hover:text-gray-300"
            aria-labelledby="home-link-text"
            scroll={false}
          >
            <span
              className="sr-only"
              id="home-link-text"
            >
              Home
            </span>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div className="text-xl font-bold">
                <span>RENT</span>
                <span className="font-light text-cyan-400 group-hover:text-gray-300">IFUL</span>
              </div>
            </div>
          </Link>
        </div>

        <p className="hidden text-gray-200 lg:block">Discover your perfect rental apartment with our advanced search</p>

        <div className="flex items-center gap-5">
          <Button
            asChild
            variant="outline"
            className="rounded-lg border-white bg-transparent text-white hover:bg-white hover:text-gray-700"
          >
            <Link href={authLinks.LOGIN}>Sign In</Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="rounded-lg bg-cyan-700 text-white hover:bg-white hover:text-gray-700"
          >
            <Link href={authLinks.REGISTER}>Sign Up</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
