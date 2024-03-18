"use client";

import InforUserCpn from "@/components/Account/AccountInfor";
import { accountInforUs } from "@/locales/en/Account";
import { accountInforVi } from "@/locales/vi/Account";
import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

function CustomerDetailPage() {
  const [lan, setLan] = useState(accountInforVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const userInfo = useSelector((state: RootState) => state.client.inforUser);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(accountInforUs);
    } else setLan(accountInforVi);
  }, [currentLan]);
  if (!isloginIn) redirect("/account/login");
  return <InforUserCpn inforUser={userInfo} isloginIn={isloginIn} lan={lan} />;
}
export default CustomerDetailPage;
