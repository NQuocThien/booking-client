import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Regis Doctor",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
