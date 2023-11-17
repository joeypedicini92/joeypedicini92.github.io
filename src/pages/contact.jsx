'use client'
import { useId } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { useForm } from '@formspree/react';
import { InlineWidget } from "react-calendly";
import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

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

export default function Contact() {
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
        intro="I am available for consulting on various projects through my company, CodeCompass, LLC. My areas of expertise include modernizing legacy applications, custom MVP development, and web application design and architecture. Schedule a call with me to discuss how I can assist you with your project."
      >
        <Container className="mt-14 sm:mt-22 lg:mt-30 mb-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
            <ContactDetails />
          </div>
        </Container>
      </SimpleLayout>
    </>
  )
}
