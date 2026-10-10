import Reveal from '../Reveal';
import Button, { Eyebrow, Rich } from '../ui/Button';
import { LEADERSHIP } from '@/content/home';
import { TEAM } from '@/content/people';

/** Team cards. Also used on the About page (`id="team"`, no action button). */
export default function Leadership({ content = LEADERSHIP, people = TEAM, id }) {
  return (
    <section id={id} className="relative scroll-mt-[92px] bg-soft py-[160px] max-[1100px]:py-[100px] max-md:py-[56px]">
      <div className="mx-auto max-w-[1320px] px-[24px]">
        <Reveal className="mb-[72px] text-center max-md:mb-[36px]">
          <Eyebrow className="mb-[24px]">{content.eyebrow}</Eyebrow>
          <h2 className="mx-auto mb-[20px] max-w-[680px] text-[clamp(32px,4.2vw,56px)] leading-[1.08] font-semibold tracking-[-.024em] text-blue">
            <Rich value={content.title} />
          </h2>
          <p className="mx-auto max-w-[640px] text-[17px] leading-[1.7] text-slate max-md:text-[15px]">{content.intro}</p>
        </Reveal>

        <div className="mb-[48px] grid grid-cols-3 gap-[32px] max-[1100px]:grid-cols-2 max-[1100px]:gap-[24px] max-md:mb-[28px] max-md:gap-[12px]">
          {people.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 80}
              className="group/lead relative aspect-[3/4] overflow-hidden rounded-t-[30px] bg-[linear-gradient(#f8fafd_0%,#e8eef6_50%,#d8e2ee_100%)] shadow-[0_4px_16px_rgba(10,37,64,.06),0_1px_3px_rgba(10,37,64,.04)] transition-[transform,box-shadow] duration-500 hover:-translate-y-[8px] hover:shadow-[0_24px_48px_rgba(10,37,64,.18),0_4px_12px_rgba(10,37,64,.08)]"
            >
              <div className="absolute inset-0 overflow-hidden after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[55%] after:bg-[linear-gradient(transparent_0%,rgba(11,6,82,.25)_25%,rgba(11,6,82,.75)_55%,rgba(8,4,50,.96)_100%)] after:content-['']">
                <img src={p.img} alt={`${p.name}, ${p.title} at TMFS`} className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 group-hover/lead:scale-105" />
              </div>
              <div className="absolute inset-x-[18px] bottom-[18px] z-[2] rounded-t-[18px] border border-white/[.18] bg-[rgba(16,9,110,.42)] px-[20px] pt-[18px] pb-[20px] text-white backdrop-blur-[6px] max-md:inset-x-[10px] max-md:bottom-[10px] max-md:px-[12px] max-md:py-[14px]">
                <h3 className="mb-[8px] text-center text-[22px] leading-[1.18] font-bold tracking-[-.02em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,.3)] max-md:text-[15px]">{p.name}</h3>
                <p className="text-center text-[12.5px] leading-[1.4] tracking-[.01em] text-white max-md:text-[10.5px]">{p.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {content.action && (
          <Reveal className="text-center">
            <Button href={content.action.href} variant="line">
              {content.action.label}
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  );
}
