import { NextResponse } from 'next/server';
import { type TaskDocument, TaskModel } from '@/models/task';
import { connectDb } from '@/utils/database';

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-');

  try {
    await connectDb();
    const expiredTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate },
    });
    return NextResponse.json({ message: 'タスク取得成功', tasks: expiredTasks });
  } catch (e) {
    console.error('API ERROR:', e);
    return NextResponse.json({ message: 'タスク取得失敗' }, { status: 500 });
  }
};
