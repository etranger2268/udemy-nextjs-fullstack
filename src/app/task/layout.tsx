import { Fragment } from 'react/jsx-runtime';

export default function TaskLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <div className="bg-blue-300 p-4">
        <h2 className="text-xl font-bold">タスクレイアウト</h2>
      </div>
      {children}
    </Fragment>
  );
}
