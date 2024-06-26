import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ticket",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
