"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Home = dynamic(() => import("@/components/home/Home"), {
  ssr: false,
});
export default function HomePage() {
  const [client, setClient] = useState(false);
  useEffect(() => setClient(true), []);
  if (client) {
    return <Home />;
  }
  return null;
}
