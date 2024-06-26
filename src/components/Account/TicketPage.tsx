"use client";

import { formCustomerUs } from "@/locales/en/Account";
import { formCustomerVi } from "@/locales/vi/Account";
import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ManagerTicked from "@/components/Account/ManagerTicked";

function TicketDetailPage() {
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const userInfo = useSelector((state: RootState) => state.client.inforUser);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);

  const [auth, setAuth] = useState(isloginIn);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(formCustomerUs);
    } else setLan(formCustomerVi);
  }, [currentLan]);

  useEffect(() => setAuth(isloginIn), [isloginIn]);
  if (!auth)
    return (
      <div className="contaner">
        <Link href={"/account/login"}>
          <span className="text-primary">{lan.mesLogin}</span>
        </Link>
      </div>
    );
  if (userInfo && !userInfo.customer) {
    return (
      <div className="container">
        <Link href="/account/customer">
          <strong>{lan.messCheckCutomer}</strong>
        </Link>
      </div>
    );
  } else if (userInfo && userInfo.customer) {
    return (
      <div className="container">
        <ManagerTicked
          lan={lan}
          customerId={userInfo.customer.id}
          customerKey={userInfo.customer.customerKey}
        />
      </div>
    );
  }
}
export default TicketDetailPage;
