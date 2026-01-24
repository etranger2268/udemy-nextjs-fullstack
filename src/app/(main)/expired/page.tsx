import { Suspense } from 'react';
import { Fragment } from 'react/jsx-runtime';
import TaskCard from '@/app/(main)/_components/TaskCard/TaskCard';
import type { TaskDocument } from '@/models/task';

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const res = await fetch(`${process.env.API_URL}/tasks/expired`);
  if (!res.ok) {
    throw new Error();
  }
  const data = await res.json();
  return data.tasks;
};

export default function ExpiredTask() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex j">
        <h1 className="text-3xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <Suspense fallback={<p>Loading...</p>}>
          <ExpiredTaskContent />
        </Suspense>
      </div>
    </div>
  );
}

async function ExpiredTaskContent() {
  const expiredTasks = await getExpiredTasks();

  if (expiredTasks.length === 0) {
    return <p>期限切れタスクは存在しません</p>;
  }
  return (
    <Fragment>
      {expiredTasks.map((task) => (
        <TaskCard key={String(task._id)} task={task} />
      ))}
    </Fragment>
  );
}
