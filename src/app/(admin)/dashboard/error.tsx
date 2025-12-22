'use client';

export default function ErrorPage() {
  return (
    <div className="m-4">
      <h2 className="font-bold">Something went wrong!</h2>
      <a
        href="/dashboard"
        className="text-blue-500 transition-all duration-300 hover:text-blue-700"
      >
        Return Dashboard
      </a>
    </div>
  );
}
