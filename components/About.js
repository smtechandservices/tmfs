import Reveal from './Reveal';
import AboutTrustStats from './AboutTrustStats';

const TEAM = [
  {
    initials: 'AK',
    name: 'Aman Kapoor',
    title: 'Manager',
    bio: 'With over 4 years of experience in business setup and banking consultancy.',
    img: '/images/aman.jpg',
  },
  {
    initials: 'VK',
    name: 'Varinder Kumar',
    title: 'Finance Manager',
    bio: 'Finance Manager at Time Machine Financial Services. Streamlining Financial Processes and Enhancing Efficiency.',
    img: '/images/varinder.jpg',
  },
];

const LEGAL_TEAM = [
  {
    initials: 'SA',
    name: 'Mrs. Shaza Musa Galis Adam',
    title: 'Legal Counsel',
    bio: 'Ms. Shaza holds the position of Legal Counsel. With a wealth of experience in legal matters.',
    img: '/images/shaza.jpg',
  },
];

const ALL_TEAM = [...TEAM, ...LEGAL_TEAM];

const VALUES = [
  { title: 'Precision', desc: 'Every element of our work is deliberate. Nothing is accidental, precision in approach signals precision in advice.' },
  { title: 'Momentum', desc: 'Wealth compounds, time moves. We build forward motion into every engagement, from first call to renewal.' },
  { title: 'Authority', desc: 'Structured process and plain answers build trust, positioning TMFS as a dependable advisory partner.' },
  { title: 'Clarity', desc: 'Complex financial and regulatory landscapes demand clear communication, not noise or clutter.' },
  { title: 'Boldness', desc: 'We take positions, make calls, and back them up with the documentation to support them.' },
  { title: 'Longevity', desc: 'Built for clients who plan to stay for years, not for a single filing cycle.' },
];

function TeamCard({ person, delay }) {
  return (
    <Reveal delay={delay} className="rounded-[20px] border border-line bg-white p-[24px]">
      <div className="mb-[14px] flex items-center gap-[14px]">
        <img src={person.img} alt={person.name} className="h-[56px] w-[56px] shrink-0 rounded-full object-cover" />
        <div>
          <h4 className="text-[16px] font-bold tracking-[-.01em] text-blue">{person.name}</h4>
          <div className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-2">{person.title}</div>
        </div>
      </div>
      <p className="text-[13.5px] leading-[1.6] text-muted">{person.bio}</p>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1320px] px-[20px] py-12">
      <Reveal className="mb-[48px]">
        <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">About us</div>
        <h2 className="max-w-[20ch] text-pretty text-[clamp(30px,4.6vw,54px)] font-extrabold leading-[1.05] tracking-[-.03em]">Time Machine Financial Services</h2>
      </Reveal>

      <div className="mb-[56px] grid grid-cols-1 gap-[24px] navp:grid-cols-2">
        <Reveal className="rounded-[20px] border border-line bg-white p-[28px]">
          <span className="mb-[14px] inline-block rounded-full bg-brand-tint px-[13px] py-[5px] font-mono text-[10px] font-bold uppercase tracking-[.1em] text-brand">
            Company vision
          </span>
          <p className="text-[14.5px] leading-[1.65] text-muted">
            Time Machine Financial Services (TMFS) prime focus is to make it the preferred, leading, and easily approachable for all clients to avail of our personalized financial broker services. We strive to develop a strong collaboration with our partners to increase credibility and trust. Moreover, our high vision is to make TMFS a shining star and a perfect model for other regional financial solution companies.
          </p>
        </Reveal>
        <Reveal delay={100} className="rounded-[20px] border border-line bg-white p-[28px]">
          <span className="mb-[14px] inline-block rounded-full bg-brand-tint px-[13px] py-[5px] font-mono text-[10px] font-bold uppercase tracking-[.1em] text-brand">
            Company mission
          </span>
          <p className="text-[14.5px] leading-[1.65] text-muted">
            We are determined and dedicated to delivering 5-star customer-oriented services that responsibly qualify all your financial needs and problems. We offer you result-driven, superior customer services based on ethics, loyalty, and commitment. To make your business fast-growing, TMFS is the first choice that promises you quality, satisfying, and one-stop financial solutions.
          </p>
        </Reveal>
      </div>

      <Reveal className="mb-[56px] rounded-[20px] border border-blue bg-blue px-[28px] py-[clamp(36px,6vw,56px)] text-center">
        <p className="text-pretty text-[clamp(22px,3.6vw,34px)] font-extrabold leading-[1.15] tracking-[-.02em] text-white">
          Your vision, <span className="text-brand">our</span> expertise.
        </p>
      </Reveal>

      <div className="mb-[56px]">
        <Reveal className="mb-[20px]">
          <div className="mb-[10px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">What we stand for</div>
          <h3 className="text-[22px] font-extrabold tracking-[-.01em] text-blue">Brand values</h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 60} className="rounded-[18px] border border-line bg-white p-[22px]">
              <h4 className="mb-[7px] text-[17px] font-bold tracking-[-.01em] text-blue">{v.title}</h4>
              <p className="text-[13.5px] leading-[1.6] text-muted">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <Reveal as="h3" className="mb-[20px] text-[22px] font-extrabold tracking-[-.01em] text-blue">
          Meet our team
        </Reveal>
        <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-3">
          {ALL_TEAM.map((person, i) => (
            <TeamCard key={person.name} person={person} delay={i * 80} />
          ))}
        </div>
      </div>

      <AboutTrustStats />
    </section>
  );
}
