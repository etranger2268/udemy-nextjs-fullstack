import type { Task } from '@/app/api/tasks/route';

const getTasks = async () => {
  // キャッシュを利用する場合、fetch関数のキャッシュオプションに'force-cache'を追加する
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/tasks`, {
    method: 'GET',
    // cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch tasks');

  const data = await res.json();
  return data;
};

export default async function TaskList() {
  const res = await getTasks();
  const tasks: Task[] = res.tasks;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
}
