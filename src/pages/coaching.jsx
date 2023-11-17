import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Coaching() {
  return (
    <>
      <Head>
        <title>Coaching - Joey Pedicini</title>
        <meta
          name="Career Coaching"
          content="Software Development Career Coaching."
        />
      </Head>
      <SimpleLayout
        title="Career Coaching"
        intro="I have been offering career coaching for software developers since February 2023 on MentorCruise. I have helped developers land their first job in the industry with 100% success rate. Contact me on MentorCruise to find out how I can help you achieve your career goals!"
      >
        <a href="https://mentorcruise.com/mentor/joeypedicini/">
          <img src="https://cdn.mentorcruise.com/img/banner/navy-booking-badge.svg" width="240" alt="MentorCruise"></img>
        </a>

      </SimpleLayout>
    </>
  )
}
