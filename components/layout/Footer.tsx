const whatsappUrl =
  "https://wa.me/2347031116044?text=Hello%20Timeless%20Kitchen%20%26%20BakeHouse%20Creations";

const services = [
  { label: "Event catering", href: "#catering" },
  { label: "Culinary school", href: "#school" },
  { label: "Bakery & drinks", href: "#bakery" },
];

export default function Footer() {
  return (
    <footer className="bg-porcelain py-12 text-cocoa sm:py-16">
      <div className="editorial-container">
        <div className="grid grid-cols-1 gap-12 border-b border-cocoa/20 pb-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a
              href="#home"
              aria-label="Timeless Kitchen & BakeHouse Creations — back to top"
              className="inline-flex flex-col font-display text-[clamp(2.4rem,4vw,3.8rem)] leading-[0.88] tracking-[-0.055em] focus-visible:outline-offset-4"
            >
              <span>Timeless Kitchen</span>
              <span className="text-guava">&amp; BakeHouse Creations</span>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-[1.75] text-cocoa/75">
              Rumuibekwe Housing Estate,
              <br />
              Port Harcourt, Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:pl-8">
            <div>
              <h2 className="eyebrow mb-5 text-palm-leaf">Our services</h2>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className="text-sm transition-colors hover:text-guava focus-visible:outline-offset-4"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow mb-5 text-palm-leaf">Find us</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm transition-colors hover:text-guava focus-visible:outline-offset-4"
                  >
                    WhatsApp · 0703 111 6044
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rumuibekwe+Housing+Estate+Port+Harcourt"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm transition-colors hover:text-guava focus-visible:outline-offset-4"
                  >
                    Get directions ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="eyebrow mb-5 text-palm-leaf">Follow along</h2>
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                <li>
                  <a
                    href="https://www.instagram.com/explore/search/keyword/?q=Timeless%20Kitchen%20Port%20Harcourt"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Search Instagram for Timeless Kitchen Port Harcourt"
                    className="text-sm transition-colors hover:text-guava focus-visible:outline-offset-4"
                  >
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/search/top?q=Timeless%20Kitchen%20Port%20Harcourt"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Search Facebook for Timeless Kitchen Port Harcourt"
                    className="text-sm transition-colors hover:text-guava focus-visible:outline-offset-4"
                  >
                    Facebook ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[0.68rem] tracking-wide text-cocoa/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Timeless Kitchen &amp; BakeHouse Creations.</p>
          <a href="#home" className="w-fit transition-colors hover:text-guava focus-visible:outline-offset-4">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
