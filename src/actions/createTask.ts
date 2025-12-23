'use server';

export const createTask = async (taskId: number, formData: FormData) => {
  console.log(formData);
  console.log({ name: formData.get('name'), id: taskId });
};
