import TaskCard from '@/app/(main)/_components/TaskCard/TaskCard';

export default function ExpiredTask() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex j">
        <h1 className="text-3xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
}
