import { Suspense } from 'react';
import { Fragment } from 'react/jsx-runtime';
import TaskCard from '@/app/(main)/_components/TaskCard/TaskCard';
import type { TaskDocument } from '@/models/task';

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const res = await fetch(`${process.env.API_URL}/tasks/completed`);
  if (!res.ok) {
    throw new Error();
  }
  const data = await res.json();
  return data.tasks;
};

export default function CompletedTask() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex j">
        <h1 className="text-3xl font-bold flex items-center">Completed Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <Suspense fallback={<p>Loading...</p>}>
          <CompletedTaskContent />
        </Suspense>
      </div>
    </div>
  );
}

async function CompletedTaskContent() {
  const completedTasks = await getCompletedTasks();
  return (
    <Fragment>
      {completedTasks.map((task) => (
        <TaskCard key={String(task._id)} task={task} />
      ))}
    </Fragment>
  );
}
