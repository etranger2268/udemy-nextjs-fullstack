import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="m-4">
      <h2 className="font-bold">Not Found</h2>
      <p className="text-sm">Could not find requested resource</p>
      <Link href="/" className="text-blue-500 transition-all duration-300 hover:text-blue-700">
        Return Home
      </Link>
    </div>
  );
}
