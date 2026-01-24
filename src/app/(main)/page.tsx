import Link from 'next/link';
import { MdAddTask } from 'react-icons/md';
import TaskCard from '@/app/(main)/_components/TaskCard/TaskCard';
import type { TaskDocument } from '@/models/task';

const getALllTasks = async (): Promise<TaskDocument[]> => {
  const res = await fetch(`${process.env.API_URL}/tasks`);
  if (!res.ok) {
    throw new Error();
  }
  const data = await res.json();
  return data.tasks;
};

export default async function Home() {
  await getALllTasks()
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center">All Tasks</h1>
        <Link
          href="/new"
          className="flex items-center gap-1 font-semibold border px-3 py-1 rounded-full shadow-sm transition-all duration-300 bg-gray-800 text-white hover:bg-gray-700"
        >
          <MdAddTask className="size-5" />
          <div>Add Task</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
}
