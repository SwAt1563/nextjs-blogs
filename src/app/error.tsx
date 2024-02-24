// Error.tsx
'use client';
import React from "react";

export const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => (
  <>
    {error && <div>{error.message} </div>}
    <button onClick={reset}>Reset</button>
  </>
);

export default Error;
