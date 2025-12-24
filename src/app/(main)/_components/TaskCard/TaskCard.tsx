import TaskDeleteButton from '@/app/(main)/_components/TaskCard/TaskDeleteButton/TaskDeleteButton';
import TaskEditButton from '@/app/(main)/_components/TaskCard/TaskEditButton/TaskEditButton';

export default function TaskCard() {
  const bool = true;
  return (
    <div className="shadow-md rounded-md w-64 h-52 p-4 flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">タイトル</h1>
        <p className="mt-1 text-sm line-clamp-3">タスクの説明</p>
      </header>
      <div>
        <p className="text-sm">
          <time>2024-12-31</time>
        </p>
        <div className="mt-1">
          <div className="flex justify-between items-center">
            <span
              className={`${bool ? 'bg-green-500' : 'bg-red-500'} text-white text-center py-0.5 px-2 text-sm rounded-full shadow-sm`}
            >
              {bool ? 'Completed' : 'Incomplete'}
            </span>
            <div className="flex gap-4">
              <TaskEditButton id="1" />
              <TaskDeleteButton id="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
