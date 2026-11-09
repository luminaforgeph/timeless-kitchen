"use client";

import { motion, useReducedMotion } from "framer-motion";

const editorialEase = [0.22, 1, 0.36, 1] as const;

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <section
      id="story"
      aria-labelledby="reviews-title"
      className="overflow-hidden bg-palm-leaf py-20 text-porcelain sm:py-28 lg:py-36"
    >
      <div className="editorial-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: editorialEase }}
            className="md:col-span-5"
          >
            <p className="eyebrow mb-5 text-oat">A little love, shared</p>
            <h2
              id="reviews-title"
              className="max-w-[10ch] font-display text-[clamp(3.2rem,6vw,6.2rem)] leading-[0.94] tracking-[-0.055em]"
            >
              Kind words from our table.
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-porcelain/25 pt-6">
              <p className="font-display text-2xl tracking-tight">
                4.9 <span className="text-oat">★</span>
                <span className="ml-1 font-sans text-sm text-porcelain/75">out of 5</span>
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Timeless+Kitchen+and+BakeHouse+Creations+Port+Harcourt"
                target="_blank"
                rel="noreferrer"
                className="border-b border-oat/60 pb-1 text-xs font-semibold uppercase tracking-[0.09em] text-oat transition-colors hover:border-porcelain hover:text-porcelain focus-visible:outline-offset-4"
              >
                Read all reviews <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <blockquote className="font-display text-[clamp(2rem,3.7vw,3.65rem)] leading-[1.16] tracking-[-0.035em]">
              “Timeless kitchen is one in a million. I can still perceive the
              taste of the food I ordered... The Amazing aroma and flavor is
              still vibrating in my nose till now.”
            </blockquote>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-oat">
              — Zainlinkstravel
            </p>

            <div className="mt-14 grid grid-cols-1 gap-9 border-t border-porcelain/25 pt-8 sm:grid-cols-2 sm:gap-8">
              <blockquote className="sm:border-r sm:border-porcelain/30 sm:pr-8">
                <p className="font-display text-[1.45rem] leading-[1.35] tracking-[-0.02em]">
                  “I had just 2 weeks to plan my Mum&apos;s 60th birthday... she
                  delivered a beautiful cake and treated us like long lost
                  friends.”
                </p>
                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-oat">
                  — Marve WORLD
                </footer>
              </blockquote>

              <blockquote>
                <p className="font-display text-[1.45rem] leading-[1.35] tracking-[-0.02em]">
                  “I recently ordered the tigernut drink and Greek yogurt...
                  fresh, rich, and perfectly blended.”
                </p>
                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-oat">
                  — Johnson Chibuzor Prince
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
