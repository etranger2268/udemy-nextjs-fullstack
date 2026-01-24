'use client';

import { useActionState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteTask } from '@/actions/task';

type Props = {
  id: string;
};

export default function TaskDeleteButton({ id }: Props) {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const initialState = { error: '' };
  const [state, formAction, isPending] = useActionState(deleteTaskWithId, initialState);

  useEffect(() => {
    if (state && state.error !== '') {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={isPending}
        className="text-lg cursor-pointer hover:text-gray-600 disabled:text-gray-400"
      >
        <FaTrashAlt />
      </button>
    </form>
  );
}
