import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoWorld from '@/images/music/this_world_feels_like_its_falling_apart_sometimes.png'
import logoFishing from '@/images/music/fishing_for_thoughts_from_the_sea_of_my_mind.png'
import logoGoing from '@/images/music/going_on_3_and_31.png'
import logoEmotional from '@/images/music/emotional_constipation.png'
import logoClementine from '@/images/music/clementine.png'
import logoBoychoir from '@/images/music/columbus_boychoir.png'

const projects = [
  {
    name: `This World Feels Like It's Falling Apart Sometimes`,
    description:
      `April 2024. The world will always feel like it's falling apart sometimes, how do you stay focused on your inner world and maintain balance there? All of the solutions to your problems already exist. It just requires knowing yourself more intimately. Not running away from the scary thoughts, not trying to numb the painful thoughts, breathing through the anxious thoughts. It's all energy. Feel the energy. Use the energy and convert it to love. And that starts by loving yourself unconditionally.`,
    link: { href: 'https://joeypedicini.notion.site/This-World-Feels-Like-It-s-Falling-Apart-Sometimes-a2baab236a8343f8a2c766b6fef797a6?pvs=74', label: `This World Feels Like It's Falling Apart Sometimes` },
    logo: logoWorld,
  },
  {
    name: 'Fishing For Thoughts From The Sea Of My Mind',
    description:
      'October 2023. A collection of songs that I made while my wife and daughter were in Peru. Then I was able to join them in Peru, but I struggled to enjoy my time with them as I was very stressed about my job. I was not myself at all and made life hard on my family so I headed home to deal with work and try to figure out a way to stay remote to support the life we were trying to build between Ohio and Peru. This was necessary to bring us back to Ohio to properly close out this chapter of our lives. But it caused me a lot of anger and resentment to the company that promised me I could work remotely which was the only reason I left my job to join them.',
    link: { href: 'https://youtube.com/playlist?list=OLAK5uy_kUwsG-e-wJ57d8XCLkDOJ_fSR9d6_X1rM&si=wgu0_rusJwUsS24T', label: 'Fishing For Thoughts From The Sea Of My Mind' },
    logo: logoFishing,
  },
  {
    name: 'Going on 3 and 31',
    description:
      'May 2023. An experimental album of songs that incorporate my daughter in them. A mix of soundscapes, recordings of her singing, and my musical progression.',
    link: { href: 'https://youtube.com/playlist?list=OLAK5uy_nW_eCXV7nM-v18sqdrWWZMxVman_N3ptE&si=68NHUDBsOBthf9XV', label: 'Going on 3 and 31' },
    logo: logoGoing,
  },
  {
    name: 'Emotional Constipation',
    description:
      'May 2023. My first album of songs that I made to deal with some difficult emotions I was facing.',
    link: { href: 'https://youtube.com/playlist?list=OLAK5uy_m4-s5ERtDIqYhiKwciY9p0moIG_kaunEE&si=lEkWc0K5cWtEtfQh', label: 'Emotional Constipation' },
    logo: logoEmotional,
  },
  {
    name: 'Clementine - Discount Tents',
    description:
      'August 2015. 2nd album that I played trombone on. Folk Punk music from Columbus, Ohio.',
    link: { href: 'https://discounttents.bandcamp.com/album/clementine', label: 'Clementine - Discount Tents' },
    logo: logoClementine,
  },
  {
    name: 'Columbus Boychoir - Discount Tents',
    description:
      'November 2012. 1st album that I played trombone on. Folk Punk music from Columbus, Ohio.',
    link: { href: 'https://discounttents.bandcamp.com/album/columbus-boychoir', label: 'Columbus Boychoir - Discount Tents' },
    logo: logoBoychoir,
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
  debugger
  return (
    <>
      <Head>
        <title>Music - Joey Pedicini</title>
        <meta
          name="description"
          content="My Musical Journey."
        />
      </Head>
      <SimpleLayout
        title="My Musical Journey"
        intro="Recently, I have been learning the fundamentals of recording, mixing, and playing synthesizer and guitar and am thoroughly enjoying the process. I hope you find joy in it as well!"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className=""
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
