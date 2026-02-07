import { useLocation } from '@tanstack/react-router';
import type { PageLayoutProps } from './types';

export default function PageLayout({ title, children }: PageLayoutProps) {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-center">{title}</h1>
        {children}
      </div>
      <noscript data-testid="pathname">{location.pathname}</noscript>
    </>
  );
}
