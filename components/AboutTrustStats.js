import Reveal from './Reveal';

const STATS = [
  { value: '4.9', label: 'Average client rating', delay: 0 },
  { value: '94%', label: 'Clients who renew with us', delay: 80 },
  { value: '1,200+', label: 'Licences & renewals processed', delay: 160 },
  { value: '20 yrs', label: 'Group experience in UAE business setup', delay: 240 },
];

export default function AboutTrustStats() {
  return (
    <div className="mt-[56px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[16px] border-t border-line pt-[40px]">
      {STATS.map((stat) => (
        <Reveal key={stat.label} delay={stat.delay}>
          <div className="text-[clamp(28px,3.6vw,40px)] font-extrabold leading-none tracking-[-.03em] text-brand">{stat.value}</div>
          <div className="mt-[6px] text-[13px] font-medium text-muted">{stat.label}</div>
        </Reveal>
      ))}
    </div>
  );
}
