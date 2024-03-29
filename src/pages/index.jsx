/* eslint-disable react/no-unescaped-entities */
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  SoundcloudIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
  YoutubeIcon,
  BonjournlIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { Testimonial } from '@/components/Testimonial'

function MailIcon(props) {
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
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Joey Pedicini - Software developer
        </title>
        <meta
          name="description"
          content="I’m Joey Pedicini, a software developer based in Columbus, Ohio."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Thank you for stopping by
          </h1>
          <p className="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Joey Pedicini, a software developer based in Columbus,
            Ohio. I specialize in building high-quality, scalable web applications.
          </p><p className="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">With a passion for mentoring and teaching, I have dedicated many years to guiding young engineers and fostering their "lightbulb" moments. My professional expertise extends to 11 years of software product delivery, overcoming unique challenges, and leading projects like Amazon's One Medical integration. Since 2023, I have mentored over 20 individuals in their software development careers, helping them build their own products while enhancing their soft skills. My mission is to transform the software development industry's approach to nurturing talent, hoping to make learning more accessible and enable more visions to turn into tangible products.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/joeypedicini92"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/joey-p-a3343924/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://www.instagram.com/dadbod591"
              icon={InstagramIcon}
              aria-label="Follow on Instagram"
            />
            <SocialLink
              href="https://soundcloud.com/los-gookies"
              icon={SoundcloudIcon}
              aria-label="Follow on Soundcloud"
            />
            <SocialLink
              href="https://www.youtube.com/@dadbod591"
              icon={YoutubeIcon}
              aria-label="Follow on Youtube"
            />
            <SocialLink
              href="https://app.bonjournl.com/public/824514e2-5960-4e2c-8b60-2f54bf3a4d86"
              icon={BonjournlIcon}
              aria-label="Follow on Bonjournl"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-9">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Testimonials
        </h2>
        <Testimonial
          className={"mb-24 mt-6"}
          client={{ name: 'Nic, The Breakfast Menu', logo: null }}
        >
          Joey made my very first foray into development a total breeze. I came to him with little more than an idea, but Joey was able to elicit the right details from me to get us moving down the runway immediately. Faster than I ever expected, he whipped up a proof of concept that inspired confidence and allowed me to iterate and improve the project in ways that I otherwise wouldn't have discovered.
          <br></br><br></br>
          From the get-go, Joey was an asset. He took the project on as his own and expertly guided me through the noise and confusion of building our MVP. The process felt clean and highly cost-effective due to Joey's experience, discernment, and skillset in software development as well as plain-language communication.
          <br></br><br></br>
          Congrats! You've found your guy.
        </Testimonial>
        <Testimonial
          className={"mb-24 mt-6"}
          client={{ name: 'Tejas, GoEB1', logo: null }}
        >
          I reached out to Joey for a basic prototype for my immigrant thought leadership platform. Joey was extremely responsive, and provided me a mock prototype pro-bono, without any payments, just so that I could be unblocked.
          His wireframe diagrams were clean, extremely slick, and helped me move extremely fast. I am a great believer in working with good human beings, and Joey is one of the few I would definitely advocate for.
          He is ethical, honest, helpful, and empathetic, and it is a pleasure to work with him and his team.
          I strongly recommend leveraging Joey & his team for any software architecture and implementation.
        </Testimonial>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
  }

  return {
    props: {},
  }
}
