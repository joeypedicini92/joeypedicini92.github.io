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
      <SimpleLayout marginTop={false}>
        <iframe style={{width: '100%', height: 'calc(70vh)'}} src="https://app.bonjournl.com/public/824514e2-5960-4e2c-8b60-2f54bf3a4d86"></iframe>
      </SimpleLayout>
    </>
  )
}
