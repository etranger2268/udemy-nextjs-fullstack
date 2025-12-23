'use server';

export type FormState = {
  error: string;
};

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export const createTask = async (taskId: number, state: FormState, formData: FormData) => {
  await sleep(3000);
  console.log(formData);
  console.log({ name: formData.get('name'), id: taskId });
  return {
    ...state,
    error: 'エラーが発生しました',
  };
};
