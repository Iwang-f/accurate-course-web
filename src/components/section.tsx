export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionGrid({
  children,
  className = "",
}: SectionProps) {
  return <div className={`section-max ${className}`}>{children}</div>;
}

export function SectionPad({
  children,
  className = "",
}: SectionProps) {
  return <section className={`section-pad ${className}`}>{children}</section>;
}
