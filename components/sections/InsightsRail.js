import Reveal from '../Reveal';
import SectionHead from './SectionHead';
import { ARTICLES } from '@/content/insights';

export default function InsightsRail({ content, count = 3 }) {
  return (
    <section className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <SectionHead eyebrow={content.eyebrow} title={content.title} action={content.action} />
      <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-3">
        {ARTICLES.slice(0, count).map((a, i) => (
          <Reveal key={a.title} delay={i * 90} className="flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-cream">
            <div className="aspect-[16/10] shrink-0 overflow-hidden bg-fog">
              <img src={a.img} alt={a.alt} className="block h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-[24px]">
              <div className="mb-[10px] flex items-center gap-[8px] font-mono text-[10px] uppercase tracking-[.16em] text-muted-2">
                <span>{a.category}</span>
                <span>·</span>
                <span>{a.readTime}</span>
              </div>
              <h3 className="mb-[8px] text-[19px] font-semibold leading-[1.25] tracking-[-.01em] text-blue">{a.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-muted">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
