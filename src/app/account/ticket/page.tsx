"use client";
// imp
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const TicketDetailPage = dynamic(
  () => import("@/components/Account/TicketPage"),
  {
    ssr: false,
  }
);
function CustomerDetailPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div>{isClient ? <TicketDetailPage /> : ""}</div>;
}
export default CustomerDetailPage;
