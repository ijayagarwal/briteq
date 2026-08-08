import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/blog";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketing Insights for Jharkhand Businesses",
  description:
    "Practical BRITEQ guides on local marketing, digital billboards, social media, websites, SEO and business growth in Jharkhand.",
  alternates: { canonical: "/blog" },
  openGraph: pageOpenGraph(
    "Marketing Insights for Jharkhand Businesses | BRITEQ",
    "Practical BRITEQ guides on local marketing, digital billboards, social media, websites, SEO and business growth in Jharkhand.",
    "/blog"
  ),
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="BRITEQ insights"
        title={<>Practical marketing thinking. <span className="text-acid">No growth theatre.</span></>}
        description="Guides for Jharkhand businesses choosing channels, planning campaigns and building stronger local visibility."
      />

      <section className="section-pad bg-white">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div><span className="eyebrow"><BookOpen className="h-3.5 w-3.5" /> Latest guides</span><h2 className="section-title mt-6">Useful before your next brief.</h2></div>
            <p className="max-w-xl text-base leading-7 text-ink/62">Clear frameworks for local marketing decisions—what to prioritise, what to ask and what honest measurement looks like.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/20 bg-paper transition hover:-translate-y-1 hover:shadow-crisp-sm">
                <div className={`relative grid min-h-60 place-items-center border-b border-ink/20 ${index === 0 ? "bg-acid" : index === 1 ? "bg-[#9F0B6C] text-white" : "bg-electric text-white"}`}>
                  <span className="absolute left-5 top-5 rounded-full border border-current/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em]">{post.category}</span>
                  <span className="font-display text-[clamp(4rem,9vw,7rem)] font-bold tracking-[-0.08em] opacity-90">0{index + 1}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-ink/65"><Clock3 className="h-3.5 w-3.5" />{post.readTime}</div>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-tight tracking-[-0.04em]">{post.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="text-link mt-auto pt-7">Read the guide <ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-paper py-12">
        <div className="container-shell">
          <p className="text-center font-display text-sm font-bold uppercase tracking-[.14em] text-ink/65">Topics we cover</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Marketing tips", "SEO", "Billboard advertising", "Social media", "Influencer marketing", "Business growth", "Google updates", "Local marketing"].map((topic) => <span key={topic} className="rounded-full border border-ink/20 bg-white px-4 py-2 text-xs font-semibold">{topic}</span>)}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Turn insight into action" title="Need a plan for your business, not another article?" />
    </>
  );
}
