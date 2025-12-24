import SideMenu from "./_components/SideMenu";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <main className="bg-red-300 flex-1 overflow-auto">{children}</main>
    </div>
  );
}
