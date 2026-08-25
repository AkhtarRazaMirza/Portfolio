"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <main id="main-content" data-testid="error-page" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">System State</p>
      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
        Something went wrong<span className="text-zinc-500">.</span>
      </h1>
      <p className="mt-4 max-w-md text-sm font-light text-zinc-400">
        An unexpected runtime error occurred. You can retry the operation or return home.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-full bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-zinc-300"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white/10"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
