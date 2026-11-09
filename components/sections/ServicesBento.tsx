"use client";

import { motion, useReducedMotion } from "framer-motion";

const editorialEase = [0.22, 1, 0.36, 1] as const;

const reveal = (reduceMotion: boolean, delay = 0) => ({
  initial: {
    opacity: reduceMotion ? 1 : 0,
    y: reduceMotion ? 0 : 24,
  },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: {
    duration: reduceMotion ? 0 : 0.72,
    delay: reduceMotion ? 0 : delay,
    ease: editorialEase,
  },
});

export default function ServicesBento() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-title"
      className="bg-porcelain py-20 sm:py-28 lg:py-36"
    >
      <div className="editorial-container">
        <motion.div
          {...reveal(reduceMotion)}
          className="mb-10 flex flex-col justify-between gap-5 border-b border-cocoa/20 pb-7 sm:mb-14 sm:flex-row sm:items-end"
        >
          <div>
            <p className="eyebrow mb-4 text-palm-leaf">Good things happen around a table</p>
            <h2
              id="experiences-title"
              className="max-w-[13ch] font-display text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.98] tracking-[-0.055em] text-cocoa"
            >
              Three ways to gather.
            </h2>
          </div>
          <p className="max-w-xs font-sans text-sm leading-[1.8] text-cocoa/75 sm:pb-1">
            From the first lesson to the last slice, there is something
            delicious waiting for you at Timeless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[minmax(260px,1fr)_minmax(260px,1fr)] md:gap-5">
          <motion.article
            {...reveal(reduceMotion, 0.04)}
            className="group relative isolate min-h-[520px] overflow-hidden bg-cocoa md:col-span-7 md:row-span-2 md:min-h-[620px]"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=88"
              alt="An elegant celebration reception arranged for guests"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.8, ease: editorialEase }}
            />
            <div
              className="absolute inset-0 bg-cocoa/70 transition-colors duration-500 group-hover:bg-cocoa/60"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-7 text-porcelain sm:p-10 lg:p-12">
              <p className="eyebrow mb-4 text-oat">01 / Gather beautifully</p>
              <h3 className="max-w-[10ch] font-display text-[clamp(3.2rem,6vw,6rem)] leading-[0.94] tracking-[-0.055em]">
                Event catering
              </h3>
              <div className="mt-6 flex items-end justify-between gap-6 border-t border-porcelain/35 pt-5">
                <p className="max-w-sm text-sm leading-[1.75] text-porcelain/85 sm:text-base">
                  Thoughtful menus and generous tables for weddings,
                  celebrations and the moments worth remembering.
                </p>
                <a
                  href="#contact"
                  aria-label="Enquire about event catering"
                  className="inline-flex size-12 shrink-0 items-center justify-center border border-porcelain/65 text-xl transition-colors duration-300 hover:border-guava hover:bg-guava focus-visible:outline-offset-4"
                >
                  <motion.span
                    aria-hidden="true"
                    animate={{ x: 0 }}
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                    transition={{ duration: 0.25, ease: editorialEase }}
                  >
                    ↗
                  </motion.span>
                </a>
              </div>
            </div>
          </motion.article>

          <motion.article
            {...reveal(reduceMotion, 0.12)}
            className="group relative grid min-h-[340px] grid-cols-12 overflow-hidden bg-oat md:col-span-5 md:min-h-0"
          >
            <div className="col-span-7 flex flex-col justify-between p-6 sm:p-8">
              <p className="eyebrow text-palm-leaf">02 / Learn the craft</p>
              <div>
                <h3 className="max-w-[8ch] font-display text-[clamp(2.4rem,4vw,4rem)] leading-[0.98] tracking-[-0.05em] text-cocoa">
                  Culinary school
                </h3>
                <p className="mt-4 max-w-[22rem] text-sm leading-[1.7] text-cocoa/75">
                  Build confidence, learn practical skills and find joy in
                  making something from scratch.
                </p>
                <a
                  href="#school"
                  className="mt-6 inline-flex items-center gap-3 border-b border-cocoa/50 pb-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-cocoa transition-colors hover:border-guava hover:text-guava"
                >
                  Discover classes
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative col-span-5 min-h-full overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85"
                alt="A bright, well-equipped kitchen ready for a cooking lesson"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                transition={{ duration: 0.8, ease: editorialEase }}
              />
            </div>
          </motion.article>

          <motion.article
            {...reveal(reduceMotion, 0.2)}
            className="group relative grid min-h-[340px] grid-cols-12 overflow-hidden bg-guava md:col-span-5 md:min-h-0"
          >
            <div className="relative col-span-5 min-h-full overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85"
                alt="Freshly baked cupcakes finished with delicate frosting"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                transition={{ duration: 0.8, ease: editorialEase }}
              />
            </div>
            <div className="col-span-7 flex flex-col justify-between p-6 text-right sm:p-8">
              <p className="eyebrow text-porcelain">03 / A little sweetness</p>
              <div>
                <h3 className="ml-auto max-w-[8ch] font-display text-[clamp(2.4rem,4vw,4rem)] leading-[0.98] tracking-[-0.05em] text-porcelain">
                  Bakery &amp; drinks
                </h3>
                <p className="ml-auto mt-4 max-w-[22rem] text-sm leading-[1.7] text-porcelain/90">
                  Cakes, bakes and refreshing pours made to bring a little
                  extra delight to every occasion.
                </p>
                <a
                  href="#contact"
                  className="ml-auto mt-6 inline-flex items-center gap-3 border-b border-porcelain/65 pb-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-porcelain transition-colors hover:border-cocoa hover:text-cocoa"
                >
                  Explore the bakehouse
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
