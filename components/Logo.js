// Official TMFS badge (public/logo.png). Every logo on the site renders through
// this component, so swapping the artwork means replacing that one file.
// The badge is square: size it with equal height and width classes.

/** TMFS logo. Pass equal height/width classes, e.g. className="h-[80px] w-[80px]". */
export default function Logo({ className = '', title = 'Time Machine Financial Services' }) {
  return <img src="/logo.png" alt={title} width={512} height={512} className={className} />;
}
