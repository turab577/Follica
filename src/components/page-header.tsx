import type { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";

export function PageHeader({
  crumb,
  eyebrow,
  title,
  children,
}: {
  crumb: { name: string; href: string };
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <Breadcrumbs items={[crumb]} />
      <p className="eyebrow mt-6">{eyebrow}</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{children}</p>
    </div>
  );
}
