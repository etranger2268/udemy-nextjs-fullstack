import Link from 'next/link';
import { FaPen } from 'react-icons/fa';

type Props = { id: string };

export default function TaskEditButton({ id }: Props) {
  return (
    <Link href={`/edit/${id}`}>
      <FaPen className="text-lg cursor-pointer hover:text-gray-600" />
    </Link>
  );
}
