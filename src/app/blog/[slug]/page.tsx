import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.published,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "BRITEQ marketing insights" }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.published,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: `${site.url}/og.jpg`,
    author: { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name },
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
  };

  return (
    <>
      <JsonLd data={schema} />
      <article>
        <header className="relative overflow-hidden border-b border-white/15 bg-ink text-white">
          <div className="absolute inset-0 grid-fade opacity-50" />
          <div className="container-shell relative py-16 sm:py-20 lg:py-28">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-white/65 transition hover:text-acid"><ArrowLeft className="h-4 w-4" /> Back to insights</Link>
            <div className="mt-12 max-w-5xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[.12em] text-white/65"><span className="rounded-full border border-white/20 px-3 py-1.5 text-acid">{post.category}</span><span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" /> {post.readTime}</span></div>
              <h1 className="mt-7 font-display text-[clamp(2.8rem,6.4vw,6.4rem)] font-bold leading-[.94] tracking-[-0.065em] text-balance">{post.title}</h1>
              <p className="mt-7 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">{post.intro}</p>
            </div>
          </div>
        </header>

        <div className="bg-white">
          <div className="container-shell grid gap-12 py-16 xl:grid-cols-[.38fr_1fr_.28fr] lg:py-24">
            <aside className="hidden xl:block"><div className="sticky top-28"><p className="font-display text-xs font-bold uppercase tracking-[.14em] text-ink/65">In this guide</p><ol className="mt-5 space-y-3 border-l border-ink/15 pl-4 text-xs leading-5 text-ink/65">{post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`} className="transition hover:text-electric">{section.heading}</a></li>)}</ol></div></aside>
            <div className="min-w-0">
              {post.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.heading} className="scroll-mt-28 border-t border-ink/15 py-10 first:border-t-0 first:pt-0">
                  <div className="flex gap-4"><span className="pt-1 font-display text-xs font-bold text-electric">{String(index + 1).padStart(2, "0")}</span><div><h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.045em] sm:text-4xl">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 text-base leading-8 text-ink/70">{paragraph}</p>)}{section.bullets && <ul className="mt-6 space-y-3 rounded-2xl bg-paper p-6">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-ink/68"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-magenta" />{bullet}</li>)}</ul>}</div></div>
                </section>
              ))}
            </div>
            <aside><div className="sticky top-28 rounded-2xl border border-ink/15 bg-acid p-5"><p className="font-display text-lg font-bold tracking-tight">Need this turned into a plan?</p><p className="mt-3 text-xs leading-5 text-ink/60">Tell BRITEQ about your business, city and next growth goal.</p><Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold underline">Start a conversation <ArrowUpRight className="h-3.5 w-3.5" /></Link></div></aside>
          </div>
        </div>
      </article>
      <CTASection eyebrow="Apply the thinking" title="A useful guide is good. A useful plan is better." />
    </>
  );
}
