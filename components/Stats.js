import Reveal from './Reveal';
import Counter from './Counter';

const STATS = [
  { to: 1200, suffix: '+', label: 'Licences & renewals processed', delay: 0 },
  { to: 18, suffix: '', label: 'UAE banking partners', delay: 90 },
  { to: 8, suffix: '', label: 'Free zones we file in directly', delay: 180 },
  { to: 20, suffix: 'yrs', label: 'Group experience in UAE property', delay: 270 },
];

export default function Stats() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[26px] px-[20px] py-[34px]">
        {STATS.map((stat) => (
          <Reveal key={stat.label} delay={stat.delay}>
            <div className="text-[clamp(32px,4.4vw,50px)] font-extrabold leading-none tracking-[-.03em]">
              <Counter to={stat.to} />
              &nbsp;<span className="text-brand">{stat.suffix}</span>
            </div>
            <div className="mt-[6px] text-[13px] font-medium text-muted">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
