import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container-x flex min-h-screen flex-col items-start justify-center">
      <p className="label">404</p>
      <h1 className="h-display mt-5 text-[56px]">Page not found.</h1>
      <p className="mt-3 text-[16px] text-ink-2">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">Back to Chase Invoice</Link>
    </main>
  );
}
