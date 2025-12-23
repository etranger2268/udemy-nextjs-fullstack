import { NextResponse } from 'next/server';

export type Task = {
  id: number;
  name: string;
};

const tasks: Task[] = [
  { id: 1, name: 'プログラミング' },
  { id: 2, name: 'ランニング' },
];

export const GET = async () => NextResponse.json({ tasks }, { status: 200 });
