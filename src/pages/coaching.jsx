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
          client={{ name: 'Ekaterina', logo: null }}
        >
Joey is a great mentor not only for newbies, but for anyone who wants to start a project and learn how to 'get things done'. I was able to benefit not only from his technical knowledge, but also from his very good product and practice orientation, which helped me to stay on track and not get thrown around by irrelevant details.        </Testimonial>
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
        <Testimonial
          className="mb-24"
          client={{ name: 'Jielin', logo: null }}
        >
          I had the privilege of being mentored by Joey, and it was a great experience working with him. His deep technical knowledge and patient guidance have significantly advanced my software development skills. Joey fosters a supportive learning environment where questions are encouraged, and with real-world project practice, he emphasizes the importance of effective communication and teamwork in Agile development. I wholeheartedly recommend Joey to anyone looking to excel in the field. Want help? Don't hesitate to reach out Joey!
        </Testimonial>

      </SimpleLayout>
    </>
  )
}
