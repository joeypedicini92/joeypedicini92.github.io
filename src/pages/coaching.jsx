/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonial } from '@/components/Testimonial'

export default function Coaching() {
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
        title="Software Development Coaching"
        intro="I guide entrepreneurs and engineering leaders like you to build high-performing software development teams by fostering technical growth, optimizing project management, and reducing development risk. This leads to scalable, reliable software that helps you serve clients better, create higher-value products, and ultimately, increase your bottom line."
      >
        <a href="https://mentorcruise.com/mentor/joeypedicini/">
          <img src="https://cdn.mentorcruise.com/img/banner/navy-booking-badge.svg" width="240" alt="MentorCruise"></img>
        </a>
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
