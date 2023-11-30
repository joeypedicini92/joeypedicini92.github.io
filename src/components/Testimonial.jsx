import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function Testimonial({
  children,
  client,
  className,
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 dark:bg-inherit py-8 sm:py-20 md:py-20',
        className,
      )}
    >
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl dark:text-zinc-400">
            <blockquote className="relative font-display text-lg tracking-tight text-neutral-950 ">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              -- {client.name}
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
