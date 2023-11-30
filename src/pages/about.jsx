/* eslint-disable react/no-unescaped-entities */
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  SoundcloudIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Joey Pedicini</title>
        <meta
          name="description"
          content="I’m Joey Pedicini, a software developer based in Columbus, Ohio."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
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
              Hi, I’m Joey Pedicini.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="text-lg text-gray-500">
                Recently I led the frontend development for Amazon’s initiative to integrate One Medical membership into the Amazon Prime benefits. Not too long into the project, I found out I would need to relocate my family to Seattle or resign. Despite the stress and pressure from this situation, I fulfilled my responsibilities and completed the project on time. I hoped that my strong effort would give me some room for negotiation, especially since I had previously negotiated a remote position when I first joined Amazon in early 2022. Unfortunately, Amazon was unwilling to budge on their policy, and so I resigned.
              </p>
              <p>
                I walked away from that experience with a strong desire to take a leap of faith on my own business, and so I am now excited to offer my time, experience, and skills from 11 years in software development. I have worked with early stage startups, to more established startups, as well as large enterprises such as Amazon and JPMorgan Chase. I have experience with a wide range of technologies, but I specialize in frontend development. I have experience leading development teams, and a passion for cultivating future industry talent. I look forward to working with you!
              </p>
              <p>
                I’m available for freelance software development work. Contact me if you need someone who:
                <ul className="list-disc ml-5">
                  <li>Has a proven track record of taking projects from ideation to completion.</li>
                  <li>Has experience leading development teams and cultivating tech talent.</li>
                  <li>Can find the right balance between cost, scope, and time.</li>
                  <li>Can effectively communicate with both technical and non-technical stakeholders.</li>
                  <li>Understands that each project and team is unique when it comes to defining processes.</li>
                </ul>
              </p>
              <p>
                I’m also available for monthly mentorship. Contact me if you need help with the following:
                <ul className="list-disc ml-5">
                  <li>Mock interviews and interview preparation.</li>
                  <li>Resume and cover letter review.</li>
                  <li>Building a personal portfolio.</li>
                  <li>Navigating your software development career.</li>
                  <li>Job search advice tailored to your specific needs.</li>
                  <li>Access to a network of other software developers who have gone through similar experiences.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.instagram.com/dadbod591"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://soundcloud.com/los-gookies"
                icon={SoundcloudIcon}
                className="mt-4"
              >
                Follow on Soundcloud
              </SocialLink>
              <SocialLink
                href="https://github.com/joeypedicini92"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/joey-p-a3343924/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:joey.pedicini@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                joey.pedicini@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
