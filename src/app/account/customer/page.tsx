"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const CustomerDetailCpn = dynamic(
  () => import("@/components/Account/Customer/Cutomer"),
  {
    ssr: false,
  }
);
function CustomerDetailPage() {
  const [client, setClient] = useState(false);
  useEffect(() => setClient(true), []);

  if (client) {
    return <CustomerDetailCpn />;
  }

  return null;
}
export default CustomerDetailPage;
