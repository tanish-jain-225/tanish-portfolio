"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log error to console for debugging
    console.error('Global error caught:', error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="mb-6 text-lg text-gray-300">{error.message || "An unexpected error occurred."}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-purple-600 rounded text-white font-semibold hover:bg-purple-700 transition"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}