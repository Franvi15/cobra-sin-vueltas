import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5">
      <p className="font-display text-8xl tabular-nums font-semibold text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">Page not found.</h1>
      <Link href="/" className="mt-8 font-mono text-sm uppercase tracking-widest underline decoration-accent decoration-2 underline-offset-4">Back to the generator</Link>
    </main>
  );
}
