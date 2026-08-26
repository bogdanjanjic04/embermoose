"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import MooseMark from "./MooseMark";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/modding", label: "Modding" },
  { href: "/lab", label: "Lab" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-paper transition-colors ${
        scrolled || open ? "border-rule" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5 text-ink no-underline hover:text-accent">
          <MooseMark size={26} glitch withBg />
          <span className="font-display text-lg font-bold tracking-tight">
            Ember&nbsp;Moose
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`mono-label no-underline transition-colors hover:text-accent focus-visible:text-accent ${
                  isActive(l.href) ? "text-accent" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mono-label flex cursor-pointer items-center gap-2 border border-rule-strong bg-transparent px-3 py-1.5 text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={14} weight="bold" aria-hidden /> : <List size={14} weight="bold" aria-hidden />}
          Menu
        </button>
      </nav>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="border-t border-rule bg-paper md:hidden"
        >
          <ul className="flex flex-col divide-y divide-rule px-5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  onClick={close}
                  className={`block py-3.5 font-display text-lg font-semibold no-underline ${
                    isActive(l.href) ? "text-accent" : "text-ink hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
