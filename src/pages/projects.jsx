import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoComunidaddies from '@/images/logos/comunidaddies.png'
import logoGithub from '@/images/logos/github.png'
import logoCodeCompass from '@/images/logos/codecompass.png'
import logoAfricaBridge from '@/images/logos/africabridge.jpg'

const projects = [
  {
    name: 'Comunidaddies',
    description:
      'A community built around daily journaling, with a focus on mental health. Built with Angular and Supabase.',
    link: { href: 'https://comunidaddies.com/', label: 'Comunidaddies' },
    logo: logoComunidaddies,
  },
  {
    name: 'CodeCompass',
    description: 'A mentorship platform for software engineers. Built with Next.js.',
    link: { href: 'https://www.codecompass.org/', label: 'CodeCompass' },
    logo: logoCodeCompass
  },
  {
    name: 'Angular Module Federation Starter',
    description: 'A starter repo for Angular projects with Module Federation which laid the groundwork for a microapp repo at battleface. Built with Nx.',
    link: { href: 'https://github.com/joeypedicini92/angular-mfe-starter', label: 'github.com' },
    logo: logoGithub
  },
  {
    name: 'Africa Bridge Data Collection',
    description: 'A data collection app for the non-profit Africa Bridge which supported their independent program audit report in 2021. Built with ODK Collect.',
    link: { href: 'https://africabridge.aplos.org/Page/20195', label: 'Kisondela Wellbeing Survey' },
    logo: logoAfricaBridge
  },
  {
    name: 'Diplomacy',
    description:
      'A modern Diplomacy game engine and SVG-based web app, built with Ember, Ruby and Firebase.',
    link: { href: 'https://www.amazon.com/b?node=57181331011', label: 'github.com' },
    logo: logoGithub,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Joey Pedicini</title>
        <meta
          name="description"
          content="Creative Pursuits. Personal Projects. Learning Experiences."
        />
      </Head>
      <SimpleLayout
        title="My Personal Contributions and Learning Experiences"
        intro="Welcome to the projects page of my portfolio website! I'm excited to share with you some personal side projects that I've worked on during my spare time. These projects represent my curiosity, my eagerness to learn, and my passion for exploring new technologies and techniques in software development."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
