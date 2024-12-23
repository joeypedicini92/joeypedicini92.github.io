/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Testimonial } from '@/components/Testimonial'
import { SimpleLayout } from '@/components/SimpleLayout'
import { FadeIn } from '@/components/FadeIn'
import { InlineWidget } from "react-calendly";
function ContactDetails() {
  return (
    <FadeIn>
      <InlineWidget url="https://calendly.com/joey-pedicini/free-30min-career-roadmap-session" />
    </FadeIn>
  )
}

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Mentorship and Coaching</title>
        <meta
          name="Mentorship and Coaching"
          content="I offer software development mentorship and fractional CTO services."
        />
      </Head>
      <SimpleLayout title="Mentorship and Coaching"
        intro="I offer software development mentorship and fractional CTO services. I have over 12 years of experience in software development and have worked with companies ranging from startups to Fortune 500 companies.">
        <h2 className="text-xl font-bold">
          What I Offer
        </h2>
        <ul className="list-disc list-inside mb-10 ml-8">
          <li>Pair Programming: Collaborate on real-world coding challenges.</li>
          <li>Interview Preparation: Build confidence and refine your technical interview skills.</li>
          <li>Resume & Portfolio Advice: Showcase your experience effectively to stand out.</li>
          <li>Software Architecture Guidance: Design scalable, maintainable systems.</li>
          <li>Code Reviews: Receive constructive feedback to elevate your work.</li>
          <li>Mindset & Confidence Building: Overcome self-doubt and build resilience.</li>
          <li>Code Therapy: A unique approach to overcoming creative and technical roadblocks.</li>
        </ul>

        <a href="https://mentorcruise.com/mentor/joeypedicini/">
          <img src="https://cdn.mentorcruise.com/img/banner/navy-booking-badge.svg" width="240" alt="MentorCruise" />
        </a>

        <h2 className="mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-200">
          Testimonials
        </h2>
        <Testimonial
          className={"mb-24 mt-6"}
          client={{ name: 'Anu', logo: null }}
        >
          I had an amazing experience with Joey as my mentor! He guided me through every step of product development, from identifying key problems to market analysis, UI mocks, and user stories. His calm and patient approach made the process smooth and stress-free, even as I started coding. He never rushed me and was always ready to pause the mentorship when I needed to focus on other things. His expertise and supportive attitude were invaluable. If you're looking for a knowledgeable, patient, and adaptable mentor who can take you from idea to implementation, I highly recommend working with him. Thank you, Joey, for everything!
        </Testimonial>
        <Testimonial
          className={"mb-24 mt-6"}
          client={{ name: 'John-Paul', logo: null }}
        >
          Working with Joey over the last several months has been nothing short of fantastic. I’ve been so impressed at his commitment to helping me learn web development, and his willingness to go above and beyond to improve my learning journey. He is very knowledgeable about software engineering, and always patient when walking through a topic/bug I’m stuck on. You'd be lucky to have him as a mentor!        </Testimonial>
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
          client={{ name: 'Alaa', logo: null }}
        >
          Joey is an amazing mentor and a really good person. He always tries his best to help others and is very dedicated to helping his mentees succeed. During our mentorship, Joey helped me a lot. He taught me new technical skills and also helped me to feel less nervous around other people and be better at talking to them. Because of Joey's help, I learned so many new things that will be useful to me at work and in life. I am very thankful for the time he spent with me and for always being there to help. If you're looking for a mentor who really cares, I definitely recommend Joey!        </Testimonial>
        <Testimonial
          className="mb-24 mt-6"
          client={{ name: 'Davide', logo: null }}
        >
          Joey helped me switch my career to Web Development, he's an amazing mentor. He gave me great advice on how to enhance my portfolio website, improving my CV, how to bring out my best potential at jobs interviews and managing my personal projects. Plus, he's really friendly and easy to talk to. Thanks to him, I succeded in finding a great job. I highly recommend him to anyone looking for career guidance!
        </Testimonial>
        <Testimonial
          className="mb-24 mt-6"
          client={{ name: 'April', logo: null }}
        >
          Joey was a great mentor! He was very understanding and patient, and was always willing to answer all of my questions even if I asked about the same concepts repetitively. His explanations were very clear and often accompanied by examples that helped give me a concrete understanding of the topics we were discussing. I also really appreciated that from the first meeting and throughout the mentorship, Joey had a clear (but also flexible) game plan on how he could help me improve over time.        </Testimonial>
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

/*
      <Button href="/Joey Pedicini Resume.pdf" target="_blank" variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
*/