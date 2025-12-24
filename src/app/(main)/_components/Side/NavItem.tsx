'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  label: string;
  link: string;
  icon: React.ReactNode;
};

export default function NavItem({ label, link, icon }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`flex p-4 items-center w-full font-medium hover:bg-gray-700 ${pathname === link ? 'bg-gray-600 border-r-4 border-green-500' : ''}`}
    >
      {icon}
      <p className="ml-1">{label}</p>
    </Link>
  );
}
