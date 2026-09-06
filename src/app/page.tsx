import Link from 'next/link';
import Footer from './components/Footer';
import { PAGE_PADDING } from '@/lib/constants';

const team = [
  { name: 'Jerry', role: 'Research', href: 'https://github.com/buabaj' },
  { name: 'Ephraim', role: 'Engineering', href: 'https://github.com/greatnessmensah' },
  { name: 'Ben', role: 'Engineering', href: 'https://github.com/benacq' },
  { name: 'Selorm', role: 'Product', href: 'https://github.com/champ3oy' },
  { name: 'Phillipa', role: 'Product', href: 'https://github.com/abena07' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className={`${PAGE_PADDING} pt-10 sm:pt-12 pb-10 flex-grow`}>
        <h1 className="mb-10">
          <Link href="/" className="inline-block">
            <img src="/logo3.svg" alt="HXI Labs" width={60} height={46} />
          </Link>
        </h1>

        <div className="space-y-[1.15em] text-[18px] leading-[1.6]">
          <p>Intelligence is becoming cheap. Attention between people is not.</p>

          <p>
            For most of history the scarce thing was capability: the years it took to learn a craft, the hours it took
            to compute, the hands it took to make. That constraint is dissolving. Within a decade, most of what we now
            call work will be done by systems that do not need a person in the room.
          </p>

          <p>
            What those systems cannot do is be with us. They cannot sit across a table, remember a face, or notice that
            a friend has gone quiet. A moment in which one person is fully present with another is the one part of the
            human experience that does not scale. It is therefore the part that matters most.
          </p>

          <p>We believe the purpose of intelligence is to give people more of each other.</p>

          <p>
            HXI Labs is a research lab studying the space between people and machines. We build models and interfaces
            that hand time back, that recede into the background, and that treat a person&rsquo;s attention as something
            to be protected rather than captured.
          </p>

          <p>
            We hold our work to a simple test. If a system makes people more present with the people they love, we
            ship it. If it makes them less present, we do not, whatever it would earn.
          </p>

          <p>
            This is careful work. We publish what we learn, we move slowly where slowness is the safe choice, and we
            would rather be right than first.
          </p>

          <p>
            Our current research lives in memory, connection, and creative expression: tools that help people remember
            what mattered, reach the people who matter, and make things that could not have existed without them. Most
            recently it lives in speech itself.{' '}
            <a href="https://github.com/HXI-Labs/attune" target="_blank" rel="noopener noreferrer" className="link">Attune</a>{' '}
            is a small model that keeps how a person sounded alongside what they said, and we have written about{' '}
            <Link href="/blog/attune-what-a-transcript-throws-away" className="link">why that matters</Link>.
          </p>

          <p>
            We are a small team of researchers and engineers.
          </p>

          <ul className="space-y-1.5">
            {team.map((person) => (
              <li key={person.href}>
                <a href={person.href} target="_blank" rel="noopener noreferrer" className="link">
                  {person.name}
                </a>
                <span className="text-muted">, {person.role}</span>
              </li>
            ))}
          </ul>

          <p>
            If you think about these questions, or would like to work on them with us, write to us.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
