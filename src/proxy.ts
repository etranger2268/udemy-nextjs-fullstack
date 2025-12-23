import { type NextRequest, NextResponse } from 'next/server';

export const proxy = (request: NextRequest) => {
  console.log(request);
  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/task'],
};
