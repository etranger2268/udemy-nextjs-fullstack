import TaskDeleteButton from '@/app/(main)/_components/TaskCard/TaskDeleteButton/TaskDeleteButton';
import TaskEditButton from '@/app/(main)/_components/TaskCard/TaskEditButton/TaskEditButton';
import type { TaskDocument } from '@/models/task';

type TaskCardProps = {
  task: TaskDocument;
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="shadow-md rounded-md w-64 h-52 p-4 flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <p className="mt-1 text-sm line-clamp-3">{task.description}</p>
      </header>
      <div>
        <p className="text-sm">
          <time>{task.dueDate}</time>
        </p>
        <div className="mt-1">
          <div className="flex justify-between items-center">
            <span
              className={`${task.isCompleted ? 'bg-green-500' : 'bg-red-500'} text-white text-center py-0.5 px-2 text-sm rounded-full shadow-sm`}
            >
              {task.isCompleted ? 'Completed' : 'Incomplete'}
            </span>
            <div className="flex gap-4">
              <TaskEditButton id={String(task._id)} />
              <TaskDeleteButton id={String(task._id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
