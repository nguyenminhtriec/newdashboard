'use client';
import { useEffect } from 'react';
 
export default function Error({ error, resetAction}: { 
    error: Error & { digest?: string }, resetAction: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (   
      <button onClick={() => resetAction()}>
        Try again
      </button>
  );
}