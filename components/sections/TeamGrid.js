import Reveal from '../Reveal';
import SectionHead from './SectionHead';
import { TEAM } from '@/content/people';

export function TeamCard({ person, delay = 0 }) {
  return (
    <Reveal delay={delay} className="rounded-[20px] border border-line bg-white p-[24px]">
      <div className="mb-[14px] flex items-center gap-[14px]">
        <img src={person.img} alt={person.name} className="h-[64px] w-[64px] shrink-0 rounded-full object-cover" />
        <div>
          <h3 className="text-[16px] font-bold tracking-[-.01em] text-blue">{person.name}</h3>
          <div className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-2">{person.title}</div>
        </div>
      </div>
      <p className="text-[13.5px] leading-[1.6] text-muted">{person.bio}</p>
    </Reveal>
  );
}

export default function TeamGrid({ content, people = TEAM }) {
  return (
    <section className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <SectionHead eyebrow={content.eyebrow} title={content.title} intro={content.intro} action={content.action} />
      <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-3">
        {people.map((person, i) => (
          <TeamCard key={person.name} person={person} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
