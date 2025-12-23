import { Suspense } from 'react';
import TaskList from '@/app/(main)/task/_components/TaskList';

export default function TaskPage() {
  return (
    <div className="ml-4 mt-4">
      <h1 className="text-red-500 text-2xl">TaskPage</h1>
      <Suspense fallback={<p className="ml-6 text-gray-500">Loading tasks...</p>}>
        <TaskList />
      </Suspense>
    </div>
  );
}
