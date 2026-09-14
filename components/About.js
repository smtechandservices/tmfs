import Reveal from './Reveal';

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

function TeamCard({ person, delay }) {
  return (
    <Reveal delay={delay} className="rounded-[20px] border border-line bg-white p-[24px]">
      <div className="mb-[14px] flex items-center gap-[14px]">
        <img src={person.img} alt={person.name} className="h-[56px] w-[56px] shrink-0 rounded-full object-cover" />
        <div>
          <h4 className="text-[16px] font-bold tracking-[-.01em] text-ink">{person.name}</h4>
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
        <div className="mb-[14px] font-mono text-[11px] uppercase tracking-[.2em] text-brand">03 — About us</div>
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

      <div>
        <Reveal as="h3" className="mb-[20px] text-[22px] font-extrabold tracking-[-.01em] text-ink">
          Meet our team
        </Reveal>
        <div className="grid grid-cols-1 gap-[16px] navp:grid-cols-2 navd:grid-cols-3">
          {ALL_TEAM.map((person, i) => (
            <TeamCard key={person.name} person={person} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
