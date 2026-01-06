import type { PageLayoutProps } from './types';

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
