import Reveal from '../Reveal';
import SectionHead from './SectionHead';

export default function Differentiators({ content }) {
  return (
    <section className="bg-blue">
      <div className="mx-auto max-w-[1320px] px-[20px] py-[clamp(64px,9vw,116px)]">
        <SectionHead eyebrow={content.eyebrow} title={content.title} intro={content.intro} dark />
        <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-4">
          {content.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="rounded-[18px] border border-white/15 bg-white/[.06] p-[24px]">
              <img src="/images/pinwheel-red.png" alt="" className="mb-[18px] h-[18px] w-[18px]" />
              <h3 className="mb-[8px] text-[18px] font-semibold tracking-[-.01em] text-white">{item.title}</h3>
              <p className="text-[14px] leading-[1.6] text-fog-2">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
