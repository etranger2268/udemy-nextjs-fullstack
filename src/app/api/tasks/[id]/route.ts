import { type NextRequest, NextResponse } from 'next/server';
import { TaskModel } from '@/models/task';
import { connectDb } from '@/utils/database';

type ParamsProps = {
  params: Promise<{ id: string }>;
};

export const GET = async (_: NextRequest, { params }: ParamsProps) => {
  const { id } = await params;
  try {
    await connectDb();
    const task = await TaskModel.findById(id);

    if (!task) {
      return NextResponse.json({ message: 'タスクが存在しません' }, { status: 404 });
    }

    return NextResponse.json({ message: 'タスク取得成功', task });
  } catch (error) {
    console.error("API ERROR: ", error);
    return NextResponse.json({ message: 'サーバー内部エラーが発生しました' }, { status: 500 });
  }
};
