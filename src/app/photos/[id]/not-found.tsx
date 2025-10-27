'use client';

import Link from 'next/link';

export default function PhotoNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold mb-4">Photo Not Found</h1>
      <p className="text-xl mb-6">This photo doesn’t exist or has been removed.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
