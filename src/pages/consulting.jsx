'use client'
import { useId } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { useForm } from '@formspree/react';
import { InlineWidget } from "react-calendly";
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Testimonial } from '@/components/Testimonial'

function TextInput({
  label,
  ...props
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  const [state, handleSubmit] = useForm('mlekqpby');
  if (state.succeeded) {
    return <p>Thanks! We look forward to chatting with you on your project soon!</p>;
  }
  const errors = state.errors
  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit} method="POST">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Submit a Work inquiry
        </h2>
        {errors && (
          <div role="alert">
            There was an error submitting the form
          </div>
        )}
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <TextInput label="Budget" name="budget" type="number" />
        </div>
        <Button disabled={state.submitting} type="submit" className="mt-10">
          {state.submitting ? 'Submitting' : 'Let’s work together'}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>

      <h2 className="font-display text-base font-semibold text-neutral-950">
        Schedule a 30 minute call
      </h2>
      <InlineWidget url="https://calendly.com/joey-pedicini/30min" />

    </FadeIn>
  )
}

export default function Consulting() {
  return (
    <>
      <Head>
        <title>Consulting - Joey Pedicini</title>
        <meta
          name="description"
          content="Custom MVP Development. Modernizing Legacy Applications. Web Application Design and Architecture."
        />
      </Head>
      <SimpleLayout
        title="Consulting"
        intro="I am available for consulting. My areas of expertise include modernizing legacy applications, custom MVP development, and web application design and architecture. Schedule a call with me to discuss how I can assist you with your project."
      >
        <div className="mb-24 grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
        <Testimonial
          className="mb-24"
          client={{ name: 'Nic, The Breakfast Menu', logo: null }}
        >
          Joey exceeded my expectations on my mobile web project. In just one month, We had a sleek, user-friendly app complete with innovative daily notifications. Their service was personalized and attentive — truly outstanding work.
        </Testimonial>
        <Testimonial
          className="mb-24"
          client={{ name: 'Tejas, GoEB1', logo: null }}
        >
          I reached out to Joey for a basic prototype for my immigrant thought leadership platform. Joey was extremely responsive, and provided me a mock prototype pro-bono, without any payments, just so that I could be unblocked.
          His wireframe diagrams were clean, extremely slick, and helped me move extremely fast. I am a great believer in working with good human beings, and Joey is one of the few I would definitely advocate for.
          He is ethical, honest, helpful, and empathetic, and it is a pleasure to work with him and his team.
          I strongly recommend leveraging Joey & his team for any software architecture and implementation.
        </Testimonial>

      </SimpleLayout>
    </>
  )
}