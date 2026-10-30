import Header from "./Header";
import Footer from "./Footer";
export default function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      <main className="container-x">
        <div className="mx-auto max-w-[680px] pt-14">
          <p className="text-[13px] text-ink-3">Last updated {updated}</p>
          <h1 className="mt-3 text-[40px] font-semibold leading-tight tracking-display">{title}</h1>
          <div className="prose-legal mt-8">{children}</div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
