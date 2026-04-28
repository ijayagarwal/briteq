import { Instagram, ArrowUpRight, Play } from "lucide-react";
import { site } from "@/lib/site";

const reels = [
  { id: "DWfcnu-E52Y", label: "Latest Reel" },
  { id: "DVOz2z4E9OP", label: "Featured" },
  { id: "DVEhzTck3Qy", label: "On Screen" },
  { id: "DUbTOjTk5BO", label: "Campaign" },
];

export default function InstagramSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center">
          <div>
            <span className="pill">
              <Instagram className="h-3.5 w-3.5" />
              On Instagram
            </span>
            <h2 className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl md:text-5xl">
              See real campaigns,{" "}
              <span className="text-gradient">live on the screen.</span>
            </h2>
            <p className="mt-4 text-base text-navy-900/70 sm:text-lg">
              We post reels, behind-the-scenes, and brand spotlights on Instagram.
              Follow us to see the LED screen in action — day, night, and prime time.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Instagram className="h-4 w-4" />
                Follow {site.instagramHandle}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Play className="h-4 w-4" />
                Watch More Reels
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <div className="rounded-xl border border-navy-800/10 bg-white p-3 text-center">
                <p className="heading-display text-xl text-navy-900">4+</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-navy-900/60">Reels / mo</p>
              </div>
              <div className="rounded-xl border border-navy-800/10 bg-white p-3 text-center">
                <p className="heading-display text-xl text-navy-900">10</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-navy-900/60">Posts / mo</p>
              </div>
              <div className="rounded-xl border border-navy-800/10 bg-white p-3 text-center">
                <p className="heading-display text-xl text-navy-900">24/7</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-navy-900/60">Active</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {reels.map((r) => (
              <div
                key={r.id}
                className="group relative overflow-hidden rounded-2xl border border-navy-800/10 bg-navy-950 shadow-sm transition-all hover:shadow-glow"
              >
                <div className="absolute left-2.5 top-2.5 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy-900 shadow">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta-500" />
                  {r.label}
                </div>
                <a
                  href={`https://www.instagram.com/p/${r.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-2.5 top-2.5 z-10 rounded-full bg-white/90 p-1.5 shadow transition-all hover:bg-white"
                  aria-label="Open on Instagram"
                >
                  <ArrowUpRight className="h-3 w-3 text-navy-900" />
                </a>
                <iframe
                  src={`https://www.instagram.com/p/${r.id}/embed/?cr=1&v=14&wp=540`}
                  loading="lazy"
                  allow="encrypted-media"
                  scrolling="no"
                  className="block h-[440px] w-full border-0 bg-white sm:h-[480px]"
                  title={`Instagram reel ${r.label}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
