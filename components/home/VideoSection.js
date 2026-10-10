import Reveal from '../Reveal';
import Icon from '../ui/Icon';
import { Eyebrow, Rich } from '../ui/Button';
import { FILM } from '@/content/home';

/** Brand film. Shows a "coming soon" player until FILM.youtubeId is set. */
export default function VideoSection({ content = FILM }) {
  const { eyebrow, title, body, youtubeId, speaker } = content;
  return (
    <section className="bg-soft py-[120px] max-[1100px]:py-[80px] max-md:py-[56px]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_1.15fr] items-center gap-[80px] px-[24px] max-[1100px]:gap-[56px] max-[900px]:grid-cols-1 max-[900px]:gap-[40px] max-md:gap-[28px]">
        <Reveal className="max-[900px]:max-w-[600px]">
          <Eyebrow className="mb-[20px]">{eyebrow}</Eyebrow>
          <h2 className="mb-[24px] text-[clamp(26px,2.8vw,42px)] leading-[1.12] font-semibold tracking-[-.026em] text-blue max-md:text-[26px]">
            <Rich value={title} />
          </h2>
          <p className="mb-[36px] text-[15px] leading-[1.75] text-slate max-md:text-[14.5px]">{body}</p>
          {speaker && (
            <div className="pt-[24px]">
              <div className="mb-[4px] font-display text-[16px] font-semibold tracking-[-.012em] text-blue">{speaker.name}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[.1em] text-brand">{speaker.title}</div>
            </div>
          )}
          {youtubeId && (
            <a
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[22px] inline-flex items-center gap-[8px] rounded-full border border-rule bg-white px-[18px] py-[10px] text-[12px] font-semibold tracking-[.04em] text-blue transition-[transform,border-color,box-shadow,color] duration-[250ms] hover:-translate-y-[1px] hover:border-[#f03] hover:text-brand-deep hover:shadow-[0_8px_22px_rgba(255,0,51,.14)]"
            >
              <Icon name="youtube" size={16} className="text-[#f03]" />
              Watch on YouTube
            </a>
          )}
        </Reveal>

        <Reveal delay={80} className="relative aspect-video overflow-hidden rounded-[4px] bg-[linear-gradient(135deg,#08043f_0%,var(--color-blue)_100%)] shadow-[0_18px_50px_rgba(10,16,36,.18)]">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`}
              title={typeof title === 'string' ? title : 'TMFS brand film'}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 bg-black"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[14px] text-[13px] uppercase tracking-[.14em] text-white/55">
              <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/25">
                <Icon name="player-play" size={26} />
              </span>
              Film coming soon
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
