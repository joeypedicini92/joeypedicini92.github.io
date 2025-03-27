/* eslint-disable react/no-unescaped-entities */
import Image from 'next/future/image'
import Head from 'next/head'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import Link from 'next/link'

import { Testimonial } from '@/components/Testimonial'
import { FadeIn } from '@/components/FadeIn'
import { InlineWidget } from "react-calendly";
import About from './about'
import portraitImage from '@/images/portrait.jpg'

function ContactDetails() {
  return (
    <FadeIn>
      <InlineWidget url="https://calendly.com/joey-pedicini/free-roadmap-session" />
    </FadeIn>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Joey Pedicini - CTO
        </title>
        <meta
          name="description"
          content="I’m Joey Pedicini, a CTO and software development coach based in Columbus, Ohio."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 mb-10">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi, I’m Joey Pedicini
            </h1>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-400 sm:text-3xl">
              - The Holistic CTO
            </h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 mb-10">
              <p>
                My mission is to infuse more humanity into the tech world. Building software is not just about writing code; it’s about designing systems that solve real problems without creating new ones. It’s about empowering people—clients, teams, and users—to thrive in their roles and achieve their aspirations.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <Link href="/mentorship" passHref>
                  <a className="block p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      Mentorship
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Learn more about my mentorship programs and how I can help you grow.
                    </p>
                  </a>
                </Link>
                <Link href="/codecompass" passHref>
                  <a className="block p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      CodeCompass
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Explore CodeCompass, my holistic software consulting company.
                    </p>
                  </a>
                </Link>
                <Link href="/media" passHref>
                  <a className="block p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      Media
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Check out my podcasts, videos, articles, and other media appearances.
                    </p>
                  </a>
                </Link>
                <Link href="/about" passHref>
                  <a className="block p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      About
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Learn more about me and my journey as a CTO and coach.
                    </p>
                  </a>
                </Link>
                <Link href="/blog" passHref>
                  <a className="block p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      Blog
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Read my latest thoughts and insights on technology and leadership.
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
