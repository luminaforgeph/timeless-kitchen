const whatsappBase = "https://wa.me/2347031116044";

export default function ClosingCTA() {
  return (
    <section
      aria-labelledby="closing-cta-title"
      className="bg-oat py-20 text-cocoa sm:py-24 lg:py-32"
    >
      <div className="editorial-container">
        <div className="grid grid-cols-1 items-end gap-9 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="eyebrow mb-5 text-palm-leaf">The next good thing starts here</p>
            <h2
              id="closing-cta-title"
              className="max-w-[11ch] font-display text-[clamp(3.2rem,7vw,7rem)] leading-[0.92] tracking-[-0.06em]"
            >
              Tell us about your occasion.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3 md:col-span-4 md:items-end md:pb-2">
            <a
              href={`${whatsappBase}?text=Hello%20Timeless%20Kitchen%2C%20I%27d%20like%20to%20plan%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center border border-cocoa bg-cocoa px-7 text-sm font-semibold text-porcelain transition-colors duration-300 hover:border-guava hover:bg-guava focus-visible:outline-offset-4 sm:w-auto"
            >
              Plan an event <span className="ml-8 text-lg" aria-hidden="true">↗</span>
            </a>
            <a
              href={`${whatsappBase}?text=Hello%20Timeless%20Kitchen%2C%20I%27m%20interested%20in%20enrolling%20in%20the%20culinary%20school.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center border border-cocoa/65 px-7 text-sm font-semibold text-cocoa transition-colors duration-300 hover:border-cocoa hover:bg-cocoa hover:text-porcelain focus-visible:outline-offset-4 sm:w-auto"
            >
              Enrol in the school <span className="ml-8 text-lg" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
