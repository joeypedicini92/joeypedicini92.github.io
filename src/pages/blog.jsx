/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Joey Pedicini's Blog</title>
        <meta
          name="blog"
          content="Welcome to my blog."
        />
      </Head>
      <SimpleLayout title="Blog"
        intro="Welcome to my blog. I built this blog called Bonjournl to help me to make a daily habit of journaling. This is a random collection of thoughts, some related to software development, some not related to anything.">
        <iframe style={{ width: '100%', height: 'calc(100vh)' }} src="https://app.bonjournl.com/public/824514e2-5960-4e2c-8b60-2f54bf3a4d86"></iframe>
      </SimpleLayout>
    </>
  )
}
