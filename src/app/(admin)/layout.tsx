import { Fragment } from 'react/jsx-runtime';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function AdminLayout({ children }: Props) {
  return (
    <Fragment>
      <div className="bg-green-300 p-4">
        <h2 className="text-xl font-bold">管理者レイアウト</h2>
      </div>
      {children}
    </Fragment>
  );
}
