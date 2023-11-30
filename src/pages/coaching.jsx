/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonial } from '@/components/Testimonial'

export default function Coaching() {
  return (
    <>
      <Head>
        <title>Mentorship - Joey Pedicini</title>
        <meta
          name="Career Mentorship"
          content="Software Development Career Mentorship."
        />
      </Head>
      <SimpleLayout
        title="Career Mentorship"
        intro="I have been offering career mentorship for software developers since February 2023 on MentorCruise. I have helped developers land their first job in the industry with 100% success rate. Contact me on MentorCruise to find out how I can help you achieve your career goals!"
      >
        <a href="https://mentorcruise.com/mentor/joeypedicini/">
          <img src="https://cdn.mentorcruise.com/img/banner/navy-booking-badge.svg" width="240" alt="MentorCruise"></img>
        </a>
        <Testimonial
          className="mb-24 mt-6"
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

      </SimpleLayout>
    </>
  )
}
