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
        <title>Coaching - Joey Pedicini</title>
        <meta
          name="Software Development Coaching."
          content="Software Development Coaching."
        />
      </Head>
      <SimpleLayout
        title="Software D evelopment Coaching"
        intro="I've been a software developer for over a decade and have worked with a variety of technologies and industries. I've helped startups and established companies build and scale their products. I've also mentored junior developers and engineering leaders. Whatever your goals are, I'm here to help you achieve them."
      >

<p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        For more information, visit my business website at{' '}
        <a href="https://codecompass.org" className="pl-2 text-teal-500 hover:text-teal-700">
          CodeCompass
        </a>.
      </p>

      </SimpleLayout>
    </>
  )
}
