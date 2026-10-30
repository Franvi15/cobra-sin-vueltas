import Header from "./Header";
import Footer from "./Footer";
export default function LegalShell({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      <main className="container-x">
        <div className="mx-auto max-w-[680px] pt-20 sm:pt-28">
          <p className="text-[13px] text-ink-3">Last updated {updated}</p>
          <h1 className="h-display mt-5 text-[44px] sm:text-[56px]">{title}</h1>
          <div className="prose-legal mt-12">{children}</div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
