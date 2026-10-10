import Reveal from '../Reveal';
import SectionHead from './SectionHead';

export default function Industries({ content }) {
  return (
    <section className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
      <SectionHead eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-4">
        {content.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 4) * 70} className="rounded-[18px] border border-line bg-white p-[22px]">
            <div className="mb-[14px] font-mono text-[11px] text-brand">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="mb-[8px] text-[17px] font-semibold tracking-[-.01em] text-blue">{item.title}</h3>
            <p className="text-[13.5px] leading-[1.6] text-muted">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
