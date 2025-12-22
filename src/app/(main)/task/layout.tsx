import { Fragment } from 'react/jsx-runtime';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function TaskLayout({ children }: Props) {
  return (
    <Fragment>
      <div className="bg-blue-300 p-4">
        <h2 className="text-xl font-bold">タスクレイアウト</h2>
      </div>
      {children}
    </Fragment>
  );
}
