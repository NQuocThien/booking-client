"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const AccountCpn = dynamic(() => import("@/components/Account/AccountCpn"), {
  ssr: false,
});

function AccountDetailPage() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  if (client)
    return (
      <div className="user">
        <AccountCpn />
      </div>
    );
}
export default AccountDetailPage;
