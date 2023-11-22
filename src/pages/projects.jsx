import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoComunidaddies from '@/images/logos/comunidaddies.png'
import logoGithub from '@/images/logos/github.png'
import logoCodeCompass from '@/images/logos/codecompass.png'
import logoAfricaBridge from '@/images/logos/africabridge.jpg'
import logoFridgeraider from '@/images/logos/fridgeraider.png'

const projects = [
  {
    name: 'Initial Web UI Mock Ups for GoEB1',
    description:
      'GoEB1 aids applicants in fulfilling EB1A visa requirements by providing a comprehensive platform with several features. These include profile evaluation, recommendation, document management, and opportunity ingestion. I collaborated with the founder to create initial mock-ups for the web UI.',
    link: { href: '/goeb1_visily_design.pdf', label: 'GoEB1 Mock Ups' },
    logo: logoCodeCompass,
  },
  {
    name: 'Breakfast Menu',
    description: 'Breakfast Menu is a simple tool that helps you build a consistent morning routine. I developed a quick proof-of-concept to test the idea. I then worked with the Nic to design and build the MVP based on his specifications, which included daily alerts sent to his phone which I was able to develop using Firebase and Web Notificaitons. PWA Built with Next.js, Firebase, and Tailwind.',
    link: { href: 'https://breakfast-menu.vercel.app/', label: 'Breakfast Menu' },
    logo: logoCodeCompass
  },
  {
    name: 'Africa Bridge Data Collection',
    description: 'Africa Bridge is a nonprofit, rural economic development organization. I set up the infrastructure to manage data collection from rural Tanzania to be analyzed in Portland, Oregon. This involved offline dynamic forms built with ODK Collect, an open-source Android project, as well as an ODK server built on Google App Engine to ingest the data and serve the forms. Built with ODK Collect.',
    link: { href: 'https://africabridge.org/our-impact/', label: 'Kisondela Wellbeing Survey 2021' },
    logo: logoAfricaBridge
  },
  {
    name: 'Fridgeraider',
    description:
      'This is a project that I collaborated on with my mentee, Jacob, after he completed his mentorship. It is a web app that generates new recipes based on the ingredients available in your kitchen. The app also includes tools to help track food expiration dates and reduce food waste. It is a progressive web app (PWA) built with Next.js, ChatGPT, and Firebase.',
    link: { href: 'https://app.fridgeraider.org/', label: 'Fridgeraider' },
    logo: logoFridgeraider,
  },
  {
    name: 'Bonjournl',
    description:
      'This is a project I built for myself during a year of self-improvement, with the goal of developing a daily journaling habit. It includes social features and end-to-end encryption. You can see it in action on the "Blog" page. The project is a Progressive Web App (PWA) built using Angular, Tailwind, and Supabase.',
    link: { href: 'https://bonjournl.com/', label: 'Bonjournl' },
    logo: logoComunidaddies,
  },
  {
    name: 'Pretzel (work in progress)',
    description:
      'Currently working with a co-founder to create an app for dads to meet other dads. The Peanut app for dads. Built with React, Supabase, Chakra UI.',
    link: { href: 'https://pretzel-app.vercel.app/', label: 'Pretzel' },
    logo: logoGithub,
  },
  {
    name: 'Rhythm RPG (work in progress)',
    description:
      'An experimental project that my friend Danny came up with. A text-based RPG game where you have to play beats on a midi controller to fight battles. Built with React, MIDI.js, WebMidi.',
    link: { href: 'https://rhythm-rpg.vercel.app/', label: 'Rhythm RPG' },
    logo: logoGithub,
  },
  {
    name: 'Diplomacy AI (work in progress)',
    description:
      'This is a personal project of mine that I started over 5 years ago with Ember and Ruby, but am working on rewriting it. A modern Diplomacy game engine and SVG-based web app to play with AI, built with Next.js, Supabase, ChatGPT.',
    link: { href: 'https://diplomacy-ai.vercel.app/', label: 'Diplomacy AI' },
    logo: logoGithub,
  }
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
        title="Projects"
        intro="I'm excited to share some personal side projects that I've worked on during my spare time, as well as projects I've built for clients. These projects reflect my curiosity, eagerness to learn, and passion for exploring new technologies and techniques in software development."
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
                  className="w-10"
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
