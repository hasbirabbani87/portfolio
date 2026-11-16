"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";

const navItems = [
  { label: "Index", href: "/" },
  { label: "Case Studies", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 h-18 w-full border-b border-hairline bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-editorial items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            className="font-serif text-xl tracking-tight text-ink transition-colors hover:text-accent"
          >
            Nama Lo<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm transition-colors duration-200",
                    isActive
                      ? "font-medium text-ink"
                      : "text-ink-secondary hover:text-ink"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsContactOpen(true)}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </header>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}