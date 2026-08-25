import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" data-testid="not-found-page" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">404</p>
      <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-white md:text-7xl">
        Lost in the void<span className="text-zinc-500">.</span>
      </h1>
      <Link
        href="/"
        className="mt-10 rounded-full bg-white px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.15em] text-black transition-colors duration-300 hover:bg-zinc-300"
      >
        Back home
      </Link>
    </main>
  );
}
