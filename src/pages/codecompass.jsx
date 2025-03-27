'use client'
import Head from 'next/head'
import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonial } from '@/components/Testimonial'
import { FadeIn } from '@/components/FadeIn'
import { InlineWidget } from "react-calendly";
import { useRouter } from 'next/router'

function ContactDetails() {
  return (
    <FadeIn>
      <InlineWidget url="https://calendly.com/joey-pedicini/free-30min-career-roadmap-session" />
    </FadeIn>
  )
}

function NavItem({ href, children }) {
  debugger
  let isActive = useRouter().pathname === href

  return (
    <Link
      href={href}
      className="text-lg font-medium text-zinc-600 dark:text-zinc-400 transition hover:text-teal-500 dark:hover:text-teal-400 mb-10 display: block"
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
      )}
    </Link>

  )
}


export default function Consulting() {
  return (
    <>
      <Head>
        <title>CodeCompass - Joey Pedicini</title>
        <meta
          name="description"
          content="CodeCompass"
        />
      </Head>
      <SimpleLayout
        title="CodeCompass"
        intro="CodeCompass is my software consulting business. I help companies build better software and help developers grow their careers. I offer a variety of services including consulting, training, and mentorship. Click the link below to go to my business website and learn more."
      >
        <div className="mt-8 flex justify-center">
          <div className="max-w-xl w-full bg-white dark:bg-zinc-800 shadow-lg rounded-lg p-6">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              For more information, visit my business website at{' '}
              <a
                href="https://codecompass.org"
                className="text-teal-500 hover:text-teal-700 underline"
              >
                CodeCompass
              </a>.
            </p>
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
