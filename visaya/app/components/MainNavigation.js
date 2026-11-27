"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/students", label: "Students" },
  { href: "/about", label: "About" },
];

export default function MainNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="border-b border-[#e5e0da] bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold text-[#1d1d1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2f2d] sm:text-base"
        >
          BSIT Directory
        </Link>

        <div className="flex items-center gap-5 text-sm text-[#5f5d59]">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href ||
              (href === "/students" && pathname.startsWith("/students/"));

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "font-semibold text-[#1d1d1b] underline decoration-1 underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2f2d]"
                    : "transition hover:text-[#1d1d1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f2f2d]"
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
