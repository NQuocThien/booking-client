"use client";
import { useEffect, useLayoutEffect, useState } from "react";
// imp
import TicketDetailPage from "@/components/Account/TicketPage";

function CustomerDetailPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div>{isClient ? <TicketDetailPage /> : ""}</div>;
}
export default CustomerDetailPage;
