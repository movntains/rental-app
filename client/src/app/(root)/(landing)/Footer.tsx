import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { companyLinks } from '@/lib/links'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4">
            <Link
              href="/"
              className="text-xl font-bold"
              scroll={false}
            >
              RENTIFUL
            </Link>
          </div>

          <nav
            aria-label="Footer"
            className="mb-6 md:mb-4"
          >
            <ul className="flex space-x-6">
              <li>
                <Link
                  href={companyLinks.ABOUT}
                  className="hover:text-gray-700 hover:underline"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href={companyLinks.CONTACT}
                  className="hover:text-gray-700 hover:underline"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href={companyLinks.FAQ}
                  className="hover:text-gray-700 hover:underline"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mb-4 flex gap-6">
            <a
              href="#"
              aria-labelledby="facebook-link-text"
              className="hover:text-gray-600"
            >
              <span
                id="facebook-link-text"
                className="sr-only"
              >
                Follow Us on Facebook
              </span>

              <FontAwesomeIcon
                icon={faFacebook}
                className="size-6"
              />
            </a>

            <a
              href="#"
              aria-labelledby="instagram-link-text"
              className="hover:text-gray-600"
            >
              <span
                id="instagram-link-text"
                className="sr-only"
              >
                Follow Us on Instagram
              </span>

              <FontAwesomeIcon
                icon={faInstagram}
                className="size-6"
              />
            </a>

            <a
              href="#"
              aria-labelledby="x-link-text"
              className="hover:text-gray-600"
            >
              <span
                id="x-link-text"
                className="sr-only"
              >
                Follow Us on X
              </span>

              <FontAwesomeIcon
                icon={faTwitter}
                className="size-6"
              />
            </a>

            <a
              href="#"
              aria-labelledby="linkedin-link-text"
              className="hover:text-gray-600"
            >
              <span
                id="linkedin-link-text"
                className="sr-only"
              >
                Follow Us on LinkedIn
              </span>

              <FontAwesomeIcon
                icon={faLinkedin}
                className="size-6"
              />
            </a>

            <a
              href="#"
              aria-labelledby="youtube-link-text"
              className="hover:text-gray-600"
            >
              <span
                id="youtube-link-text"
                className="sr-only"
              >
                Follow Us on YouTube
              </span>

              <FontAwesomeIcon
                icon={faYoutube}
                className="size-6"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 text-sm text-gray-500 md:flex-row">
          <span>&copy; Rentiful. All rights reserved.</span>

          <Link
            href={companyLinks.PRIVACY}
            className="hover:text-gray-700 hover:underline"
          >
            Privacy Policy
          </Link>

          <Link
            href={companyLinks.TERMS}
            className="hover:text-gray-700 hover:underline"
          >
            Terms of Service
          </Link>

          <Link
            href={companyLinks.COOKIES}
            className="hover:text-gray-700 hover:underline"
          >
            Cookie Policy
          </Link>

          <Link
            href={companyLinks.ACCESSIBILITY}
            className="hover:text-gray-700 hover:underline"
          >
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  )
}
