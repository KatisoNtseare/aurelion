interface EyebrowProps { children: React.ReactNode; className?: string; }
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return <span className={`inline-block font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-[#a88b62] sm:text-[10px] ${className}`}>{children}</span>;
}