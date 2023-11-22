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
        intro="Welcome to my blog! I created this blog called Bonjournl to cultivate a daily journaling habit. My vision for Bonjournl is to be a unique social media app that prioritizes personal writing. You'll have the choice to share selected journal entries or thoughts with the community. While the future is uncertain, for now, Bonjournl serves as my personal blog and journal.">
        <a href="https://bonjournl.com" target="_blank" rel="noreferrer">View Bonjournl</a>
        <iframe style={{ width: '100%', height: 'calc(100vh)' }} src="https://app.bonjournl.com/public/824514e2-5960-4e2c-8b60-2f54bf3a4d86"></iframe>
      </SimpleLayout>
    </>
  )
}
