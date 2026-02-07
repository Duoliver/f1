import * as React from 'react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-between w-full gap-8 lg:w-5xl xl:w-6xl mx-auto">
        <header className="px-3 lg:px-0 py-8 border-b border-white">
          <Link to="/">F1 API Client</Link>
        </header>
        <main className="flex-1 px-3 lg:px-0">
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
}
