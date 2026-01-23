'use server';

import { redirect } from 'next/navigation';
import { type Task, TaskModel } from '@/models/task';
import { connectDb } from '@/utils/database';

export type FormState = {
  error: string;
};

export const createTask = async (state: FormState, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const newTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    isCompleted: false,
  };

  try {
    await connectDb();
    await TaskModel.create(newTask);
  } catch (e) {
    console.log(e);
    return {
      ...state,
      error: 'タスクの作成に失敗しました',
    };
  }

  redirect('/');
};
