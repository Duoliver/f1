import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/seasons/')({
  component: () => 'hello world',
});
