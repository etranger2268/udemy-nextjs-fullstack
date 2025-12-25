import { Suspense } from 'react';
import EditTaskForm from '@/app/(main)/edit/_components/EditTaskForm';

type Props = {
  params: Promise<{ id: string }>;
};

export default function EditTaskPage({ params }: Props) {
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Create New Task</h2>
      <Suspense fallback={<p>読み込み中...</p>}>
        <EditTaskPageContent params={params} />
      </Suspense>
    </div>
  );
}

async function EditTaskPageContent({ params }: Props) {
  const { id } = await params;
  return <EditTaskForm />;
}
