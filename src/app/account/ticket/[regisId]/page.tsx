"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const TicketDetailCpn = dynamic(
  () => import("@/components/Account/Ticket/TicketDetailCpn"),
  {
    ssr: false,
  }
);

function RegisDetailPage({ params }: { params: { regisId: string } }) {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <div>
      <TicketDetailCpn params={params} />
    </div>
  );
}
export default RegisDetailPage;
