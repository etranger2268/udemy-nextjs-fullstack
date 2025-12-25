'use client';

import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">Error</h1>
      <p className="text-4xl font-medium">Unexpected error occurred.</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">Go Home Back</Link>
    </div>
  );
}
