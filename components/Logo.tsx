import Image from "next/image";
export default function Logo({ name, sub }: { name: string; sub?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/logo-mark.png" alt="" width={24} height={22} priority className="h-[22px] w-auto" />
      <span className="flex items-baseline gap-2">
        <span className="text-[15px] font-medium tracking-heading text-ink">{name}</span>
        {sub && <span className="hidden text-[13px] text-ink-3 sm:inline">{sub}</span>}
      </span>
    </span>
  );
}
