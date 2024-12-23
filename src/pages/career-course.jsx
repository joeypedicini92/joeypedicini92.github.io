/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Career Navigation Course</title>
        <meta
          name="Career Navigation Course"
          content="A course I made in 2023 to help people navigate a career in tech."
        />
      </Head>
      <SimpleLayout title="Bringing Humanity to Software Development"
        intro="Welcome to the Career Navigation Course! This course is designed to help you navigate a career in tech. Whether you are just starting a career in tech, or you're looking for the next step in your carer, or you are struggling with burnout and trying to navigate difficult situations at work, this course is for you.">

        <div className="flex justify-left">
          <button
            onClick={() => {
              const iframe = document.querySelector('iframe');
              iframe.src = iframe.src;
            }}
            className="group mt-6 w-30 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Course Home
          </button>
        </div>
        <iframe style={{ width: '100%', height: 'calc(100vh)' }} src="/career navigation course/Career Navigation Course 16603bfd984942148ab80724fabccfe1.html"></iframe>
      </SimpleLayout>
    </>
  )
}

/*
      <Button href="/Joey Pedicini Resume.pdf" target="_blank" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
*/