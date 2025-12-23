import { NextResponse } from 'next/server';

export type Task = {
  id: number;
  name: string;
};

const tasks: Task[] = [
  { id: 1, name: 'プログラミング' },
  { id: 2, name: 'ランニング' },
];

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await sleep(5000);
  return NextResponse.json({ tasks }, { status: 200 });
};
