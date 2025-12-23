import { createTask } from '@/actions/createTask';

export default function ServerAction() {
  const taskId = 1;
  const createTaskWithId = createTask.bind(null, taskId);

  return (
    <div className="ml-4 mt-4">
      <h1 className="text-red-500 text-2xl">Server Action</h1>
      <div className="mt-3 flex items-center justify-start">
        <form action={createTaskWithId}>
          <input
            type="text"
            id="name"
            name="name"
            className="border rounded py-0.5 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
            placeholder="入力してください"
          />
          <button
            type="submit"
            className="bg-blue-300 py-0.5 px-2 rounded text-white transition-all duration-300 hover:bg-blue-500"
          >
            送信
          </button>
        </form>
      </div>
    </div>
  );
}
