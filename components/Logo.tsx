import Image from "next/image";
export default function Logo({ name, sub }: { name: string; sub?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/logo-mark.png" alt="" width={28} height={26} priority className="h-[26px] w-auto" />
      <span className="flex items-baseline gap-2">
        <span className="text-[16px] font-semibold tracking-heading text-ink">{name}</span>
        {sub && <span className="hidden text-[13px] text-ink-3 sm:inline">{sub}</span>}
      </span>
    </span>
  );
}
