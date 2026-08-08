import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[72svh] place-items-center overflow-hidden bg-ink py-20 text-white">
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="container-shell relative text-center">
        <p className="font-display text-[clamp(7rem,24vw,18rem)] font-bold leading-[.7] tracking-[-.1em] text-acid">404</p>
        <h1 className="mt-12 font-display text-4xl font-bold tracking-[-.05em] sm:text-6xl">This route missed the audience.</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-white/60">The page may have moved, but the next useful step is still easy to find.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary"><ArrowLeft className="h-4 w-4" /> Back home</Link>
          <Link href="/services" className="button-light">Explore services <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
