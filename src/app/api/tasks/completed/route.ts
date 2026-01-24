import { NextResponse } from 'next/server';
import { type TaskDocument, TaskModel } from '@/models/task';
import { connectDb } from '@/utils/database';

export const GET = async () => {
  try {
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: true,
    });
    return NextResponse.json({ message: 'タスク取得成功', tasks: completedTasks });
  } catch (e) {
    console.error('API ERROR:', e);
    return NextResponse.json({ message: 'タスク取得失敗' }, { status: 500 });
  }
};
