"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import TicketDetail from "@/components/Account/TicketDetail";
import { formCustomerVi } from "@/locales/vi/Account";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { formCustomerUs } from "@/locales/en/Account";

function TicketCpn({ params }: { params: { regisId: string } }) {
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(formCustomerUs);
    } else setLan(formCustomerVi);
  }, [currentLan]);
  return (
    <div>
      <TicketDetail regisId={params.regisId} lan={lan} />
    </div>
  );
}
export default TicketCpn;
