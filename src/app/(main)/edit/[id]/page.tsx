import { Suspense } from 'react';
import EditTaskForm from '@/app/(main)/edit/_components/EditTaskForm';
import type { TaskDocument } from '@/models/task';

type Props = {
  params: Promise<{ id: string }>;
};

const getTask = async (id: string): Promise<TaskDocument> => {
  const res = await fetch(`${process.env.API_URL}/tasks/${id}`);
  if (!res.ok) {
    throw new Error();
  }
  const data = await res.json();
  return data.task;
};

export default function EditTaskPage({ params }: Props) {
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Create New Task</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <EditTaskPageContent params={params} />
      </Suspense>
    </div>
  );
}

async function EditTaskPageContent({ params }: Props) {
  const { id } = await params;
  const task = await getTask(id);
  return <EditTaskForm task={task} />;
}
