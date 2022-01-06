import { memo } from 'react';

interface ErrorFallbackProps {
  error: {
    message: string;
  };
}

export const ErrorFallback = memo(({ error }: ErrorFallbackProps) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
  </div>
));
