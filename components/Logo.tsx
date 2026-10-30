import Image from "next/image";
export default function Logo({ name, sub, dark }: { name: string; sub?: string; dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/logo-mark.png" alt="" width={24} height={22} priority className="h-[22px] w-auto" />
      <span className="flex items-baseline gap-2">
        <span className={`text-[15px] font-semibold tracking-heading ${dark ? "text-white" : "text-ink"}`}>{name}</span>
        {sub && <span className={`hidden text-[13px] sm:inline ${dark ? "text-white/50" : "text-ink-3"}`}>{sub}</span>}
      </span>
    </span>
  );
}
