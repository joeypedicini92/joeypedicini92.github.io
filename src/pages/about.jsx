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
import { Button } from '@/components/Button'
import logoAmazon from '@/images/logos/amazon.svg'
import logoBattleface from '@/images/logos/battleface.svg'
import logoCOTA from '@/images/logos/cota.svg'
import logoChase from '@/images/logos/chase.svg'

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

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Amazon',
      title: 'Frontend Engineer II',
      logo: logoAmazon,
      start: 'April 2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'battleface',
      title: 'Senior Software Engineer',
      logo: logoBattleface,
      start: 'September 2021',
      end: 'April 2022',
    },
    {
      company: 'COTA',
      title: 'Senior Software Engineer',
      logo: logoCOTA,
      start: 'October 2016',
      end: 'September 2021',
    },
    {
      company: 'JP Morgan Chase',
      title: 'Application Developer',
      logo: logoChase,
      start: 'January 2013',
      end: 'October 2016',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${role.end.label ?? role.end
                  }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/Joey Pedicini Resume.pdf" target="_blank" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
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
        <Resume />
      </Container>
    </>
  )
}
