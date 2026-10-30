import Header from "./Header";
import Footer from "./Footer";
export default function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      <main className="mx-auto max-w-3xl px-5 pt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Last updated {updated}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold">{title}</h1>
        <div className="mt-8 space-y-5 text-[17px] leading-relaxed [&_a]:underline [&_a]:decoration-accent [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
