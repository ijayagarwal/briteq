type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden led-bg pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="absolute inset-0 led-dots-bg opacity-30" />
      <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-magenta-500/30 blur-3xl" />
      <div className="absolute -bottom-20 left-1/4 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && <span className="pill-light">{eyebrow}</span>}
          <h1 className="heading-display mt-5 text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
