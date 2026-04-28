import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  bullets?: string[];
};

export default function ServiceCard({ icon: Icon, title, description, href, bullets }: Props) {
  return (
    <div className="card group flex h-full flex-col">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-magenta-500 text-white shadow-glow">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="heading-display mt-5 text-xl text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-navy-900/70">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-magenta-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {href && (
        <Link
          href={href}
          className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-magenta-500 transition-all group-hover:gap-2"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
