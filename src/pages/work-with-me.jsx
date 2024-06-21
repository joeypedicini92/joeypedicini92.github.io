'use client'
import Head from 'next/head'
import Link from 'next/link'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonial } from '@/components/Testimonial'
import { FadeIn } from '@/components/FadeIn'
import { InlineWidget } from "react-calendly";
import { useRouter } from 'next/router'

function ContactDetails() {
  return (
    <FadeIn>
      <InlineWidget url="https://calendly.com/joey-pedicini/free-30min-career-roadmap-session" />
    </FadeIn>
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


export default function Consulting() {
  return (
    <>
      <Head>
        <title>Coaching - Joey Pedicini</title>
        <meta
          name="Software Development Coaching."
          content="Software Development Coaching."
        />
      </Head>
      <SimpleLayout
        title="Software D evelopment Coaching"
        intro="I've been a software developer for over a decade and have worked with a variety of technologies and industries. I've helped startups and established companies build and scale their products. I've also mentored junior developers and engineering leaders. Whatever your goals are, I'm here to help you achieve them."
      >

        <NavItem href="https://codecompass.org">Software Product Development Coaching</NavItem>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Are you feeling stuck in a deadend job or lost in your career?
        </h2>
        <p className="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">

          Are you looking to find a job that better aligns with your values? Are you struggling with burnout, impostor syndrome, or any negative emotions that come with a toxic job? Do you want to gain more flexibility in your work? Are you considering making a career change, either into technology or into a different role in technology? Together, we can make the most of your free time during the work day, learn new skills that better align with your passions and interests, build a portfolio that showcases your best work, and find a job that you love.
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Are you an aspiring software developer overwhelmed with the seemingly endless amount of concepts to learn?
        </h2>
        <p className="mt-6 mb-6 text-base text-zinc-600 dark:text-zinc-400">

          Are you struggling to find a learning routine that works for you? Are you interested in building your own project but don't know where to start? Do you have problems managing your time and focus? Together we can develop a learning path that works for you, build a project that showcases your skills, and create a portfolio that will help you land your dream job.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Are you ready to hear more about how I can help you?
        </h2>
        <p>
          Schedule a free 30 minute roadmap session to discuss your goals and how I can help you achieve them. I will provide you with a roadmap to success and a plan to get you there. I look forward to working with you!
        </p>
        <ContactDetails />
        <h2 className="mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          Testimonials
        </h2>
        <Testimonial
          className={"mb-24 mt-6"}
          client={{ name: 'Nic', logo: null }}
        >
          Joey made my very first foray into development a total breeze. I came to him with little more than an idea, but Joey was able to elicit the right details from me to get us moving down the runway immediately. Faster than I ever expected, he whipped up a proof of concept that inspired confidence and allowed me to iterate and improve the project in ways that I otherwise wouldn't have discovered.
          <br></br><br></br>
          From the get-go, Joey was an asset. He took the project on as his own and expertly guided me through the noise and confusion of building our MVP. The process felt clean and highly cost-effective due to Joey's experience, discernment, and skillset in software development as well as plain-language communication.
          <br></br><br></br>
          Congrats! You've found your guy.
        </Testimonial>
        <Testimonial
          className={"mb-24 mt-6"}
          client={{ name: 'Tejas', logo: null }}
        >
          I reached out to Joey for a basic prototype for my immigrant thought leadership platform. Joey was extremely responsive, and provided me a mock prototype pro-bono, without any payments, just so that I could be unblocked.
          His wireframe diagrams were clean, extremely slick, and helped me move extremely fast. I am a great believer in working with good human beings, and Joey is one of the few I would definitely advocate for.
          He is ethical, honest, helpful, and empathetic, and it is a pleasure to work with him and his team.
          I strongly recommend leveraging Joey & his team for any software architecture and implementation.
        </Testimonial>
        <Testimonial
          className="mb-24 mt-6"
          client={{ name: 'Davide', logo: null }}
        >
          Joey helped me switch my career to Web Development, he's an amazing mentor. He gave me great advice on how to enhance my portfolio website, improving my CV, how to bring out my best potential at jobs interviews and managing my personal projects. Plus, he's really friendly and easy to talk to. Thanks to him, I succeded in finding a great job. I highly recommend him to anyone looking for career guidance!
        </Testimonial>
        <Testimonial
          className="mb-24 mt-6"
          client={{ name: 'Ekaterina', logo: null }}
        >
          Joey is a great mentor not only for newbies, but for anyone who wants to start a project and learn how to 'get things done'. I was able to benefit not only from his technical knowledge, but also from his very good product and practice orientation, which helped me to stay on track and not get thrown around by irrelevant details.
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Aurora', logo: null }}
        >
          Joey is a wonderful mentor! He is very kind and responsive when I need help. He is always open to hear me out in my career searching journey. If you are looking for a real expert in the field who is kind and ready to listen and help with your technical issues, questions or even curiosities. With joey you will find the right person.
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Jacob', logo: null }}
        >
          I highly recommend Joey as a coding mentor. He is respectful of his clients' time and consistently comes prepared to sessions. His guidance is spot on and he always provides helpful resources to assist with problem-solving. I am grateful for his support and expertise.
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Jielin', logo: null }}
        >
          I had the privilege of being mentored by Joey, and it was a great experience working with him. His deep technical knowledge and patient guidance have significantly advanced my software development skills. Joey fosters a supportive learning environment where questions are encouraged, and with real-world project practice, he emphasizes the importance of effective communication and teamwork in Agile development. I wholeheartedly recommend Joey to anyone looking to excel in the field. Want help? Don't hesitate to reach out Joey!
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Navdeep', logo: null }}
        >

          Joey is very knowledgeable and responded quickly and thoroughly to all questions I had both technical and career related - would highly recommend!
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Filip', logo: null }}
        >

          Great communication and advice from the beginning, highly recommend
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Dan', logo: null }}
        >

          Joey is fantastic. No complaints.
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Anukiran', logo: null }}
        >

          The conversation with my mentor was incredibly helpful. They showed a keen understanding of my needs and were genuinely willing to help and provide guidance.
        </Testimonial>

      </SimpleLayout>
    </>
  )
}
