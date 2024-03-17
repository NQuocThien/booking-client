import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/scss/style.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
