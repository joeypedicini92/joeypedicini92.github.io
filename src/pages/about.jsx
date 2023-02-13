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
          content="I’m Joey Pedicini. I live in New York City, where I design the future."
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
                Hello! My name is Joey and I am the founder of Comunidaddies. I
                am a husband, father, and a software developer with 10 years of
                professional experience, and have a passion for building tools
                which genuinely improve the lives of others.
              </p>
              <p>
                I became a first time father right as lock downs were happening
                across the world. It was a difficult time to adjust to so many
                life changes at once. I reached a breaking point about halfway
                through that first year and was taken to the ER for
                self-inflicted wounds. Since that time I decided that I wanted
                to help new dads be the dads that they want to be.
              </p>
              <p>
                Recently begun to dive deep into spiritual learning, therapy,
                inner child healing, and general mindfulness. Part of that
                process has involved a lot of writing and journaling and
                reflection. I started by training myself to write whenever I
                sense my mind starting to wander. That then turned into a daily
                practice of writing down my thoughts and feelings.
              </p>
              <p>
                The problem I started to run into was that I was writing in a
                lot of different places. I had a journal, a Notion notebook,
                Google Docs, and a few other places where I was writing. I
                wanted to consolidate all of that into one place, and I wanted
                to be able to share it with others, and share my wisdom with
                Lucy as she grows up.
              </p>
              <p>
                That’s where Comunidaddies comes in; I initially wanted a place
                where I could share learned wisdom with Lucy as she gets older.
                We share the same birthday she is exactly 28 years younger than
                me. What do I want her to know about me, about herself, about
                the world, when she turns 28? The problem I have with most
                social media or blogging platforms is that they are not designed
                for long form writing. They are also not designed to be shared
                in the long term future. Those were problems I wanted to solve
                with Comunidaddies.
              </p>
              <p>
                Beyond Communidaddies, I have dreams to start various 
                software-related companies, from a bootcamp serving individuals 
                from underrepresented backgrounds, to a software consultancy, 
                to a software development agency. I am also a musician, and I 
                have a passion for creating music and sharing it with the world. 
                I have a few projects in the works, and I am excited to share 
                them with you all.
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
