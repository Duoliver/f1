import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-between w-full lg:w-5xl xl:w-6xl min-h-dvh mx-auto">
        <header>F1 API Client</header>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
}
