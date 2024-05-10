"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import TicketDetailPage from "@/components/Account/TicketPage";
import TicketDetail from "@/components/Account/TicketDetail";
import { formCustomerVi } from "@/locales/vi/Account";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { formCustomerUs } from "@/locales/en/Account";

function RegisDetailPage({ params }: { params: { regisId: string } }) {
  const [isClient, setIsClient] = useState(false);
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(formCustomerUs);
    } else setLan(formCustomerVi);
  }, [currentLan]);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? <TicketDetail regisId={params.regisId} lan={lan} /> : ""}
    </div>
  );
}
export default RegisDetailPage;
