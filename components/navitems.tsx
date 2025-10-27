"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const items = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Joureny", href: "/my-joureny" },
];
const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2">
      {items.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(pathname === href ? " text-primary font-bold" : "")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
