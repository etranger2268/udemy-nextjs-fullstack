import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || '');
  } catch (e) {
    console.log(`DB接続失敗：${e}`);
    throw new Error();
  }
};
