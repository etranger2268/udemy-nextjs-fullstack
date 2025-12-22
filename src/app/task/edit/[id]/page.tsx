import { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default function TaskEditIdPage({ params }: Props) {
  return (
    <Suspense fallback={<p>読み込み中...</p>}>
      <TaskEditIdPageContent params={params} />
    </Suspense>
  );
}

async function TaskEditIdPageContent({ params }: Props) {
  const { id } = await params;
  return <h1 className="text-red-500 text-2xl">TaskEditIdPage#{id}</h1>;
}
