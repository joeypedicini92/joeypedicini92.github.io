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
          content="I’m Joey Pedicini, a freelance software developer based in Columbus, Ohio."
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
                As a dedicated software engineer with over ten years of experience in the industry, I&apos;ve been fortunate enough to work in a variety of roles. This diverse background has given me the opportunity to develop a comprehensive skill set and learn from many talented colleagues. I am always looking for ways to grow, learn, and contribute positively to the tech industry, and I believe that collaboration and continuous improvement are key to success.
              </p>
              <p>
                One of the most rewarding aspects of my career has been the opportunity to lead and mentor others. I have had the privilege of guiding teams through complex projects, fostering a culture of collaboration and mutual learning. By emphasizing the importance of open communication and the sharing of ideas, I have been able to help create environments where everyone can thrive and excel.
              </p>
              <p>
                My passion for technology extends beyond the workplace. I firmly believe in giving back to the community and have been involved in several volunteer initiatives throughout the years. I have helped set up mobile data collection solutions in Tanzania, mentored students in computer science clubs, and taught high school computer science classes via Skype. These experiences have been incredibly fulfilling, allowing me to share my knowledge while also learning from others.
              </p>
              <p>
                In my career, I&apos;ve had the opportunity to work on many challenging projects, but one of my proudest achievements was at battleface. As the lead frontend developer and senior Angular expert, I architected a new micro-frontend architecture using the latest frontend tools and best practices in Nx, and Module Federation API. This solution effectively addressed maintainability and scalability issues within the company, providing a more efficient and streamlined process that positively impacted the entire engineering organization.
              </p>
              <p>
                Another proud technical accomplishment of mine was during my tenure at COTA Healthcare, where I designed and built the abstractor grading platform. The platform allows users to easily compare and grade large, complex datasets, which was previously done using excel sheets. This innovative solution transformed the way our users worked with data, improving accuracy and efficiency while also providing valuable insights to drive business decisions.
              </p>
              <p>
                As I continue to advance in my career, I remain committed to learning new technologies and staying up-to-date with industry trends. I am eager to contribute to the success of future projects, collaborate with talented professionals, and be an active member of the tech community. My focus on leadership, continuous improvement, and giving back has shaped the professional I am today, and I look forward to the opportunities and challenges that lie ahead.
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
