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
  YoutubeIcon,
  BonjournlIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import { Button } from '@/components/Button'
import logoAmazon from '@/images/logos/amazon.svg'
import logoBattleface from '@/images/logos/battleface.svg'
import logoCOTA from '@/images/logos/cota.svg'
import logoChase from '@/images/logos/chase.svg'
import logoCleverApply from '@/images/logos/cleverapply.png'
import logoFullstack from '@/images/logos/FSA logo.png'
import { useRouter } from 'next/router'

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
      company: 'CleverApply',
      title: 'Co-Founder & CTO',
      logo: logoCleverApply,
      start: 'January 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Amazon',
      title: 'Frontend Engineer II',
      logo: logoAmazon,
      start: 'April 2022',
      end: 'February 2024',
    },
    {
      company: 'Fullstack Academy',
      title: 'Mentor II',
      logo: logoFullstack,
      start: 'May 2023',
      end: 'October 2023',
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

function NavItem({ href, children }) {
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
              Hi, I’m Joey Pedicini
            </h1>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-600 dark:text-zinc-400 sm:text-3xl">
              - The Holistic CTO
            </h2>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 mb-10">
              <p>
                My mission is to infuse more humanity into the tech world. Building software is not just about writing code; it’s about designing systems that solve real problems without creating new ones. It’s about empowering people—clients, teams, and users—to thrive in their roles and achieve their aspirations.
              </p>
              <p>
                At the heart of my philosophy is Human Driven Development (HDD):
              </p>
              <ul className="list-disc list-inside">
                <li>Adaptable Processes: Rejecting rigid frameworks in favor of flexible methods that evolve as the team grows.</li>
                <li>Employee Morale as the Foundation: Placing each team member in their optimal position—not just for the company’s success, but for their personal fulfillment and growth.</li>
                <li>Software Designed by Humans, for Humans: Crafting tools that enhance lives and address real-world needs with care and intention.</li>
              </ul>
              <p>
                I draw inspiration from sports, where the best managers—like José Mourinho—see the unique strengths in each player and create an environment where even the most unassuming individuals can shine. Similarly, a great manager in tech focuses on creating a culture where everyone is empowered to contribute meaningfully, aligning personal goals with the team’s mission.
              </p>
              <p>
                This requires more than processes or metrics; it demands authentic, ongoing conversations to truly understand each individual’s strengths, motivations, and challenges. It means embracing open dialogue about what’s working and what isn’t, without forcing interactions through rigid systems.
              </p>
              <p>
                By centering the team and adapting to their unique dynamics, we unleash their full potential and create products that matter. This is what Human Driven Development is all about: letting the energy flow naturally within the team, and nurturing a culture of collaboration, trust, and purpose.
              </p>
              <p>
                Let’s build software—and teams—that inspire.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.linkedin.com/in/joey-p-a3343924/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/joeypedicini92"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/holistic_cto"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://www.youtube.com/@holistic_cto"
                icon={YoutubeIcon}
                className="mt-4"
              >
                Follow on Youtube
              </SocialLink>
              <SocialLink
                href="https://soundcloud.com/los-gookies"
                icon={SoundcloudIcon}
                className="mt-4"
              >
                Follow on Soundcloud
              </SocialLink>
              <SocialLink
                href="https://app.bonjournl.com/public/824514e2-5960-4e2c-8b60-2f54bf3a4d86"
                icon={BonjournlIcon}
                className="mt-4"
              >
                Follow on Bonjournl
              </SocialLink>
            </ul>
          </div>
        </div>
        <Resume />
      </Container>
    </>
  )
}
