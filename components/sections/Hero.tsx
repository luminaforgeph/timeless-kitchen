"use client";

import { motion, useReducedMotion } from "framer-motion";

const editorialEase = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  const textReveal = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.72,
        ease: editorialEase,
      },
    },
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative grid min-h-screen grid-cols-12 overflow-hidden bg-oat"
    >
      <div className="col-span-12 flex min-h-[760px] flex-col px-6 pb-9 pt-36 sm:px-10 md:col-span-5 md:min-h-screen md:px-10 md:pb-12 md:pt-40 lg:px-[clamp(3rem,6.2vw,6.75rem)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.14,
                delayChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="my-auto max-w-[35rem] pb-14 md:pb-20"
        >
          <motion.p
            variants={textReveal}
            className="eyebrow mb-7 max-w-[19rem] text-palm-leaf"
          >
            Catering, cakes and classes in Port Harcourt.
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={textReveal}
            className="max-w-[9.5ch] font-display text-[clamp(4rem,7.1vw,7.25rem)] leading-[0.91] tracking-[-0.065em] text-cocoa"
          >
            Food worth gathering for.
          </motion.h1>

          <motion.p
            variants={textReveal}
            className="mt-8 max-w-md font-sans text-base leading-[1.8] text-cocoa/80 sm:text-[1.05rem]"
          >
            From wedding tables to weekend cakes, we bring the warmth of a home
            kitchen to every occasion.
          </motion.p>

          <motion.div
            variants={textReveal}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center bg-cocoa px-7 text-[0.72rem] font-semibold tracking-[0.07em] text-porcelain transition-colors duration-300 hover:bg-palm-leaf focus-visible:outline-offset-4"
            >
              Plan your event
              <span className="ml-5 text-base" aria-hidden="true">↗</span>
            </a>

            <a
              href="#school"
              className="group inline-flex min-h-12 items-center border-b border-cocoa/55 pb-1 text-[0.72rem] font-semibold tracking-[0.04em] text-cocoa transition-colors duration-300 hover:border-guava hover:text-guava focus-visible:outline-offset-4"
            >
              Explore the school
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-5 gap-y-3 border-t border-cocoa/20 pt-5 text-[0.64rem] font-medium tracking-[0.035em] text-cocoa/80 sm:text-[0.69rem]">
          <p>
            <span className="mr-1 text-guava" aria-label="star rating">★</span>
            <span className="font-semibold text-cocoa">4.9</span> from 41 reviews
          </p>
          <p>Port Harcourt, Nigeria</p>
        </div>
      </div>

      <div className="relative col-span-12 min-h-[70svh] overflow-hidden bg-cocoa md:col-span-7 md:min-h-screen">
        <motion.div
          initial={{ clipPath: reduceMotion ? "inset(0 0 0 0)" : "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{
            duration: reduceMotion ? 0 : 1.35,
            delay: reduceMotion ? 0 : 0.18,
            ease: editorialEase,
          }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=88"
            alt="An intimate celebration table set with beautiful food and warm natural light"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-cocoa/10" aria-hidden="true" />
        </motion.div>

        <motion.figure
          initial={{
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 18,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            delay: reduceMotion ? 0 : 1.05,
            ease: editorialEase,
          }}
          className="absolute bottom-7 left-6 z-10 w-[42%] max-w-[260px] border-[7px] border-oat sm:bottom-12 sm:left-10 sm:w-[36%] md:bottom-14 md:left-10 lg:left-14"
        >
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=720&q=85"
            alt="A carefully finished celebration cake"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="bg-oat px-3 py-2 font-sans text-[0.55rem] font-semibold uppercase tracking-[0.13em] text-cocoa sm:px-4 sm:py-3 sm:text-[0.62rem]">
            Made with care, shared with joy
          </figcaption>
        </motion.figure>

        <div className="absolute right-6 top-7 z-10 hidden text-right font-sans text-[0.58rem] font-medium uppercase leading-[1.7] tracking-[0.15em] text-porcelain/90 md:block">
          <span className="block">The art of</span>
          <span className="block">bringing people</span>
          <span className="block">together</span>
        </div>
      </div>
    </section>
  );
}
