"use client";

import entries from "@/config/home";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="flex w-full flex-row justify-start items-center gap-4">
      {entries.map((f) => (
        <Link
          key={f.url}
          href={f.url}
          className={cn(
            "flex items-center transition-colors hover:text-foreground/80 sm:text-md capitalize",
          )}
        >
          {f.title}
        </Link>
      ))}
    </div>
  );
};
