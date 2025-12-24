import { FaTrashAlt } from 'react-icons/fa';

type Props = {
  id: string;
};

export default function TaskDeleteButton({ id }: Props) {
  return (
    <form action="">
      <button type="submit" className="text-lg cursor-pointer hover:text-gray-600">
        <FaTrashAlt />
      </button>
    </form>
  );
}
