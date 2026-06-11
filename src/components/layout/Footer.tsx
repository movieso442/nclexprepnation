import Link from "next/link";

import { footerNavigation } from "@/data/navigation";
import { footerDisclaimer, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:px-8">
        <div>
          <Link className="text-xl font-bold" href="/">
            NCLEX <span className="text-teal">Prep Nation</span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            {siteConfig.description}
          </p>
          <p className="mt-5 text-xs leading-5 text-slate-400">
            {footerDisclaimer}
          </p>
        </div>

        {Object.entries(footerNavigation).map(([group, links]) => (
          <div key={group}>
            <h2 className="text-sm font-semibold capitalize text-white">
              {group}
            </h2>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={`${group}-${link.label}`}>
                  <Link
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{"\u00a9"} {new Date().getFullYear()} NCLEX Prep Nation.</p>
          <p>Educational preparation only. Exam outcomes are not guaranteed.</p>
        </div>
      </div>
    </footer>
  );
}
