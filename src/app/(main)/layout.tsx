import SideMenu from '@/app/(main)/_components/Side/SideMenu';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
    </div>
  );
}
