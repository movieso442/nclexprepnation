"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { primaryNavigation } from "@/data/navigation";
import { getWhatsAppHref } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappHref = getWhatsAppHref(
    "Hello NCLEX Prep Nation, I would like to know more about your NCLEX prep services.",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          className="text-lg font-bold tracking-tight text-navy"
          href="/"
          onClick={() => setOpen(false)}
        >
          NCLEX <span className="text-clinical">Prep Nation</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden xl:block">
          <ul className="flex items-center gap-4">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm font-medium text-ink transition-colors hover:text-clinical"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button href="/free-diagnostic">
            Start Free Diagnostic
          </Button>
          <Button href="/student/dashboard" variant="ghost">
            Login
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="rounded-md border border-line p-2 text-navy xl:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-line bg-white px-5 py-5 xl:hidden"
        >
          <ul className="mx-auto grid max-w-7xl gap-1">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md px-3 py-3 text-sm font-medium text-ink hover:bg-soft hover:text-clinical"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-4 grid max-w-7xl gap-3 sm:grid-cols-2">
            <Button href="/free-diagnostic">
              Start Free Diagnostic
            </Button>
            <Button href="/student/dashboard" variant="outline">
              Login
            </Button>
            <Button className="sm:col-span-2" href={whatsappHref} variant="whatsapp">
              Contact Us on WhatsApp
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
