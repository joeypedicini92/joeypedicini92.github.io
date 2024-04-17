/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Joey Pedicini's Blog</title>
        <meta
          name="Bonjournl - A Collection of Thoughts"
          content="Welcome to my blog."
        />
      </Head>
      <SimpleLayout title="Bonjournl - A Collection of Thoughts"
        intro="I created this blog called Bonjournl to cultivate a daily journaling habit. I write about topics ranging from software development, mental health, philosophy, spirituality, fatherhood, marriage, and everything in between.">
        <iframe style={{ width: '100%', height: 'calc(100vh)' }} src="https://app.bonjournl.com/public/824514e2-5960-4e2c-8b60-2f54bf3a4d86"></iframe>
      </SimpleLayout>
    </>
  )
}
