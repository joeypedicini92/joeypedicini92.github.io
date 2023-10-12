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
    name: 'Going on 3 and 31',
    description:
      'A collaboration with my daughter for her 3rd birthday and my 31st birthday.',
    link: { href: 'https://bonjournl.com/', label: 'Bonjournl' },
    logo: logoComunidaddies,
  },
  {
    name: 'CodeCompass',
    description: 'A mentorship platform for software engineers. Built with Next.js.',
    link: { href: 'https://www.codecompass.org/', label: 'CodeCompass' },
    logo: logoCodeCompass
  },
  {
    name: 'Africa Bridge Data Collection',
    description: 'A data collection app for the non-profit Africa Bridge which supported their independent program audit report in 2021. Built with ODK Collect.',
    link: { href: 'https://africabridge.aplos.org/Page/20195', label: 'Kisondela Wellbeing Survey' },
    logo: logoAfricaBridge
  },
  {
    name: 'Angular Module Federation Starter',
    description: 'A starter repo for Angular projects with Module Federation which laid the groundwork for a microapp repo at battleface. Built with Nx.',
    link: { href: 'https://github.com/joeypedicini92/angular-mfe-starter', label: 'github.com' },
    logo: logoGithub
  },
  {
    name: 'Diplomacy',
    description:
      'A modern Diplomacy game engine and SVG-based web app, built with Ember, Ruby and Firebase.',
    link: { href: 'https://github.com/joeypedicini92/diplomacy', label: 'github.com' },
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
        title="My Musical Endeavors"
        intro="I started playing trombone as a kid and when I first went to university I met some great dudes who had a band called Discount Tents and they were nice enough to let me make music with them. I've kept in touch with them over the years, and recently Danny helped teach me the basics of recording and mixing and playing synthesizer and guitar. I've been making music on my own since then and I'm really enjoying it. I hope you enjoy it too!"
      >
        <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1626327117&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" width="100%" height="300" frameBorder="0" allow="autoplay"></iframe>
        <br></br>
        <iframe src="https://open.spotify.com/embed/album/7pKO6J6HeAcj5EhOD9Aj5C?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <br></br>
        <iframe src="https://open.spotify.com/embed/album/7kuyvK4UyvYRMG0sKFVORz?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <br></br>
        <iframe src="https://open.spotify.com/embed/album/3ngjJ6ayCbAAHXU2AA7ZTG?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <br></br>
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=989791973/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" width="100%" loading="lazy"><a href="https://discounttents.bandcamp.com/album/clementine">Clementine by Discount Tents</a></iframe>
        <br></br>
        <iframe src="https://bandcamp.com/EmbeddedPlayer/album=328204959/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" width="100%" loading="lazy"><a href="https://discounttents.bandcamp.com/album/columbus-boychoir">Columbus Boychoir by Discount Tents</a></iframe>
      </SimpleLayout>
    </>
  )
}
