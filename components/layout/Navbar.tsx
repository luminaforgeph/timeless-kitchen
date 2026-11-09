"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experiences", href: "#experiences" },
  { label: "Our story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const navigateToSection = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    const targetId = href.slice(1);
    const menuWasOpen = isMenuOpen;
    setIsMenuOpen(false);

    // Wait for the mobile menu's scroll lock to be released before scrolling.
    window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (!target) return;

      window.history.replaceState(null, "", href);
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }, menuWasOpen ? 100 : 0);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(247, 243, 234, 0.96)"
          : "rgba(247, 243, 234, 0)",
        boxShadow: isScrolled
          ? "0 1px 0 rgba(72, 56, 47, 0.10)"
          : "0 1px 0 rgba(72, 56, 47, 0)",
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="editorial-container">
        <div className="grid min-h-[76px] grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[5fr_7fr]">
          <a
            href="#home"
            aria-label="Timeless Kitchen & BakeHouse Creations — home"
            onClick={closeMenu}
            className="relative z-[60] inline-flex w-fit flex-col leading-none text-cocoa focus-visible:outline-offset-8"
          >
            <span className="font-display text-[1.8rem] tracking-[-0.055em]">
              Timeless<span className="text-guava">.</span>
            </span>
            <span className="mt-1.5 font-sans text-[0.48rem] font-semibold uppercase tracking-[0.16em]">
              Kitchen & BakeHouse Creations
            </span>
          </a>

          <div className="hidden items-center justify-start gap-10 lg:flex">
            <nav aria-label="Main navigation" className="flex items-center justify-start gap-10">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={navigateToSection(item.href)}
                  className={`text-[0.72rem] font-medium tracking-[0.015em] transition-colors duration-300 hover:text-guava focus-visible:outline-offset-4 ${
                    isScrolled ? "text-cocoa" : "text-porcelain"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={navigateToSection("#contact")}
              className={`ml-1 inline-flex min-h-10 items-center justify-center border px-4 text-[0.68rem] font-semibold tracking-[0.04em] transition-colors duration-300 hover:border-guava hover:bg-guava hover:text-porcelain focus-visible:outline-offset-4 ${
                isScrolled
                  ? "border-cocoa/50 text-cocoa"
                  : "border-porcelain/75 text-porcelain"
              }`}
            >
              Plan an event
            </a>
          </div>

          <button
            type="button"
            className="relative z-[60] flex size-11 items-center justify-center justify-self-end text-cocoa focus-visible:outline-offset-2 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="flex w-6 flex-col gap-[6px]" aria-hidden="true">
              <motion.span
                className="h-px w-full bg-current"
                animate={
                  isMenuOpen
                    ? { y: 3.5, rotate: 45 }
                    : { y: 0, rotate: 0 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              />
              <motion.span
                className="h-px w-full bg-current"
                animate={
                  isMenuOpen
                    ? { y: -3.5, rotate: -45 }
                    : { y: 0, rotate: 0 }
                }
                transition={{ duration: reduceMotion ? 0 : 0.2 }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
            className="absolute inset-x-0 top-full min-h-[calc(100svh-76px)] border-t border-cocoa/10 bg-porcelain px-5 pb-12 pt-8 text-cocoa lg:hidden"
          >
            <div className="mx-auto flex max-w-[1360px] flex-col">
              <p className="eyebrow mb-8 text-palm-leaf">
                A table is always better together
              </p>

              <div className="flex flex-col">
                {navigation.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={navigateToSection(item.href)}
                    className="flex items-center justify-between border-b border-cocoa/15 py-5 font-display text-3xl tracking-editorial transition-colors hover:text-guava focus-visible:outline-offset-2"
                  >
                    <span>{item.label}</span>
                    <span className="font-sans text-sm text-guava" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={navigateToSection("#contact")}
                className="mt-9 inline-flex min-h-14 items-center justify-center border border-cocoa bg-cocoa px-6 text-sm font-semibold text-porcelain transition-colors hover:border-guava hover:bg-guava focus-visible:outline-offset-4"
              >
                Plan an event
              </a>

              <p className="mt-8 text-xs tracking-wide text-cocoa/65">
                Port Harcourt, Nigeria
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
