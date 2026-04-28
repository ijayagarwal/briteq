import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden led-bg">
      <div className="absolute inset-0 led-dots-bg opacity-30" />
      <div className="container-x relative text-center">
        <p className="font-display text-7xl font-extrabold text-gradient sm:text-9xl">
          404
        </p>
        <h1 className="heading-display mt-4 text-3xl text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          The page you're looking for doesn't exist. Let's get you back to the
          screen.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
