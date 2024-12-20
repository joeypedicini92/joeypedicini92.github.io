import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoFocusAreas from '@/images/articles/focus_areas.png'
import logoSilentVoices from '@/images/articles/silent_voices.png'
import logoStandUp from '@/images/articles/stand_up.jpeg'
import logoPairProgram from '@/images/articles/pair_program.jpeg'
import logoHDD from '@/images/articles/hdd.jpeg'
import logoTopMentor from '@/images/articles/top_mentor.png'
import logoHDDPDF from '@/images/articles/hdd_pdf.png'
import logoMVP from '@/images/articles/building_mvp.png'
//
const projects = [
  {
    name: 'How Did I Become a CTO by an ex-Amazon Frontend Engineer',
    description:
      'Joey Pedicini, a CTO, ex-Amazon worker, and frontend engineer, shares his journey in the tech industry. The impact of becoming a parent on his career, the value of journaling, building projects from personal passion, and his approach to mentorship. Joey also highlights his experiences working at Amazon, dealing with imposter syndrome, and the transition to becoming a CTO at a small startup.',
    link: { href: 'https://www.youtube.com/watch?v=hqZMsnBK3Jc', label: 'How Did I Become a CTO by an ex-Amazon Frontend Engineer' },
    logo: logoTopMentor,
  },
  {
    name: 'Human Driven Development: Balancing Speed, Quality, and Sanity',
    description:
      'A presentation on my career journey, lessons learned, my engineering philosophy, and how to apply the principles of Human Driven Development to your team. This talk was given in 2024.',
    link: { href: '/Human Driven Development.pdf', label: 'Human Driven Development: Balancing Speed, Quality, and Sanity' },
    logo: logoHDDPDF,
  },
  {
    name: 'Building an MVP | Session 1: Idea Generation',
    description:
      'In this presentation I discuss the process of coming up with an idea for a Minimum Viable Product (MVP).',
    link: { href: 'https://youtu.be/kuuFT7ay3Zs?si=6eSaCriPSSAT5uC1', label: 'Building an MVP | Session 1: Idea Generation' },
    logo: logoMVP,
  },
  {
    name: `5 Key Focus Areas for a Successful Start in Your Tech Career`,
    description:
      `If you had to start over in your career, but were able to keep all the knowledge/experience you’ve gained, what would be the top 3-5 most important things you’d focus on to be successful during your first few years in the industry? The 3-5 things could be anything (soft skills, hard skills, company/job details, certain mindset, specific technologies, etc).`,
    link: { href: 'https://www.linkedin.com/pulse/5-key-focus-areas-successful-start-your-tech-career-joey-pedicini-gfvpc/?trackingId=sFGaYGygSE%2BxyFs%2Bws8oGQ%3D%3D', label: `5 Key Focus Areas for a Successful Start in Your Tech Career` },
    logo: logoFocusAreas,
  },
  {
    name: 'Amplifying Silent Voices: Strategies to Run Effective Team Retrospectives',
    description:
      'In this article I discuss effective strategies that not only make your retrospectives more focused and engaging, but also draw out valuable insights from quieter team members.',
    link: { href: 'https://www.linkedin.com/pulse/amplifying-silent-voices-strategies-run-effective-team-joey-pedicini-2es9c/', label: 'Amplifying Silent Voices: Strategies to Run Effective Team Retrospectives' },
    logo: logoSilentVoices,
  },
  {
    name: 'Get Up, Stand Up: Revitalizing Daily Stand-ups',
    description:
      'The daily stand-up then becomes a performative meeting. Everyone stretching the truth in order to save face. Instead of boosting productivity, it diminishes it by heightening anxiety.',
    link: { href: 'https://www.linkedin.com/pulse/get-up-stand-revitalizing-daily-stand-ups-joey-pedicini-bhj9c/', label: 'Get Up, Stand Up: Revitalizing Daily Stand-ups' },
    logo: logoStandUp,
  },
  {
    name: 'Pair Programming: A Double-Edged Sword for Technical Development and Mental Wellness',
    description:
      `Pair programming offers substantial benefits, not only for the technical development of junior and senior engineers, but also for fostering a supportive and communal environment. It's a method that goes beyond simple productivity, serving as a tool for mental wellness and strong team relationships. In the face of modern work challenges, such practices that encourage peer-to-peer interaction and learning become invaluable for both personal growth and team success.`,
    link: { href: 'https://www.linkedin.com/pulse/pair-programming-double-edged-sword-technical-mental-joey-pedicini-otsxc/', label: 'Pair Programming: A Double-Edged Sword for Technical Development and Mental Wellness' },
    logo: logoPairProgram,
  },
  {
    name: 'A new software development methodology: Human-driven Development',
    description:
      'A message to company executives, engineering managers and leaders: your developers are currently experiencing burnout due to layoffs, return-to-office mandates, unreasonable deadlines, and soulless corporate culture.',
    link: { href: 'https://www.linkedin.com/pulse/new-software-development-methodology-human-driven-joey-pedicini-58cpe/?trackingId=1O%2Buef%2BQQQmhEceYrJrRxQ%3D%3D', label: 'A new software development methodology: Human-driven Development' },
    logo: logoHDD,
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
        <title>Media - Joey Pedicini</title>
        <meta
          name="description"
          content="Media content and articles that I have created."
        />
      </Head>
      <SimpleLayout
        title="Media - Joey Pedicini"
        intro="Media videos and articles that I have created or appeared on."
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
