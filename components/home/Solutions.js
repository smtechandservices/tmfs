import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import { Eyebrow } from '../ui/Button';
import { PRACTICES_HEAD, PRACTICE_ICONS } from '@/content/home';
import { PRACTICES, PRO_VISAS, LICENCE_COMPLIANCE } from '@/content/catalog';

// Six cards: the five practices, with Corporate Services split into its two
// groups so the grid fills like the reference layout.
const CARDS = [
  ...PRACTICES.filter((p) => p.key !== 'corporate-services').map((p) => ({ key: p.key, title: p.title, desc: p.summary, href: p.href })),
  { key: PRO_VISAS.key, title: 'PRO & Visas', desc: 'Government liaison, attestation, and residence, family and Golden Visas for owners and staff.', href: '/corporate-services' },
  { key: LICENCE_COMPLIANCE.key, title: 'Licence & Compliance', desc: 'Renewals, amendments, share transfers, liquidation, trademarks, AML programmes and UBO filings.', href: '/corporate-services' },
];

export default function Solutions({ head = PRACTICES_HEAD }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(150deg,#08043f_0%,#0f0a6b_45%,#1d14a8_100%)] py-[120px] text-white before:pointer-events-none before:absolute before:-top-[200px] before:-right-[120px] before:h-[720px] before:w-[720px] before:rounded-full before:bg-[radial-gradient(circle,rgba(219,20,28,.55)_0%,rgba(219,20,28,.18)_30%,transparent_60%)] before:blur-[40px] before:content-[''] after:pointer-events-none after:absolute after:right-[18%] after:-bottom-[240px] after:h-[560px] after:w-[560px] after:rounded-full after:bg-[radial-gradient(circle,rgba(240,58,65,.4)_0%,rgba(219,20,28,.1)_35%,transparent_65%)] after:blur-[40px] after:content-[''] max-[1100px]:py-[80px] max-md:py-[56px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="relative z-[2] mb-[64px] max-w-[760px] max-md:mb-[36px]">
          <Eyebrow light className="mb-[20px]">
            {head.eyebrow}
          </Eyebrow>
          <h2 className="mb-[24px] text-[clamp(30px,3.2vw,48px)] leading-[1.12] font-bold tracking-[-.026em] text-white max-md:text-[26px]">{head.title}</h2>
          <p className="max-w-[620px] text-[16px] leading-[1.72] text-white/80 max-md:text-[14.5px]">{head.intro}</p>
        </Reveal>

        <div className="relative z-[2] grid grid-cols-3 gap-[24px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[20px] max-md:gap-[12px]">
          {CARDS.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 80}>
              <a
                href={c.href}
                className="group/sol relative flex h-full flex-col overflow-hidden rounded-t-[30px] border border-white/[.14] bg-[rgba(16,9,110,.42)] px-[32px] py-[36px] text-white shadow-[inset_0_1px_rgba(255,255,255,.16),0_8px_32px_rgba(0,0,0,.25)] transition-[transform,box-shadow,border-color,background] duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-t-[30px] before:bg-[linear-gradient(135deg,rgba(255,255,255,.08)_0%,transparent_40%)] before:content-[''] after:pointer-events-none after:absolute after:top-0 after:right-0 after:h-[120px] after:w-[120px] after:bg-[radial-gradient(circle_at_100%_0,rgba(219,20,28,.5)_0%,transparent_70%)] after:opacity-0 after:transition-opacity after:duration-[350ms] after:content-[''] hover:-translate-y-[6px] hover:border-[rgba(219,20,28,.45)] hover:bg-[rgba(16,9,110,.6)] hover:text-white hover:shadow-[inset_0_1px_rgba(255,255,255,.2),0_24px_56px_rgba(0,0,0,.4),0_4px_16px_rgba(219,20,28,.25)] hover:after:opacity-100 max-[1100px]:px-[28px] max-[1100px]:py-[32px] max-md:px-[16px] max-md:pt-[20px] max-md:pb-[18px]"
              >
                <span className="relative z-[1] mb-[24px] flex h-[56px] w-[56px] items-center justify-center rounded-t-[14px] bg-brand text-white shadow-[0_8px_20px_rgba(219,20,28,.35)] transition-[background,transform] duration-300 group-hover/sol:scale-[1.08] group-hover/sol:-rotate-6 group-hover/sol:bg-brand-bright max-md:mb-[14px] max-md:h-[40px] max-md:w-[40px]">
                  <Icon name={PRACTICE_ICONS[c.key]} size={26} />
                </span>
                <h3 className="relative z-[1] mb-[14px] text-[22px] leading-[1.22] font-bold uppercase tracking-[-.02em] text-white max-md:mb-[10px] max-md:text-[15px]">{c.title}</h3>
                <p className="relative z-[1] mb-[28px] flex-1 text-[14.5px] leading-[1.7] text-white/[.72] max-md:mb-[16px] max-md:text-[12.5px] max-md:leading-[1.55]">{c.desc}</p>
                <span className="relative z-[1] inline-flex items-center gap-[6px] text-[12px] font-bold uppercase tracking-[.12em] text-white/85 transition-[gap,color] duration-200 group-hover/sol:gap-[10px] group-hover/sol:text-brand-bright max-md:text-[10px]">
                  Explore <Icon name="arrow-right" size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
