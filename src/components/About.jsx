import { CONTENT } from '../content'
import { scrollToId } from '../lib/scroll'
import { Kicker, Heading, Reveal } from './ui'

export default function About() {
  const { heading, paragraphs } = CONTENT.about
  return (
    <section id="about" className="border-b-2 border-ink bg-paper-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:gap-12 sm:px-8 sm:py-28 lg:grid-cols-2">
        {/* REPLACE: Jayden portrait / training photo */}
        <Reveal className="order-1 lg:order-none">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-army" />
            <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-ink bg-paper">
              <img
                src="/austin.jpg"
                alt="Jayden Austin"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Kicker>About</Kicker>
          </Reveal>
          <Reveal>
            <Heading className="mt-4">{heading}</Heading>
          </Reveal>
          <div className="mt-6 space-y-4 text-base text-ink/70 sm:text-lg">
            {paragraphs.map((p, i) => (
              <Reveal key={i} as="p">
                <span>{p}</span>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <button onClick={() => scrollToId('apply')} className="btn-primary mt-8 w-full sm:w-auto">
              Work With Me
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
