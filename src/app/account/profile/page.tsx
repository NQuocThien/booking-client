"use client";

import { formCustomerUs } from "@/locales/en/Account";
import { formCustomerVi } from "@/locales/vi/Account";
import { RootState } from "@/redux/store/store";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import ManaProfile from "@/components/Account/ManaProfile";

function CustomerDetailPage() {
  // const dispath = useDispatch();
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const userInfo = useSelector((state: RootState) => state.client.inforUser);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(formCustomerUs);
    } else setLan(formCustomerVi);
  }, [currentLan]);

  if (!isloginIn) redirect("/account/login");
  if (userInfo && !userInfo.customer) {
    return (
      // <FormCreateCustomer inforUser={userInfo} isloginIn={true} lan={lan} />
      <p>Cần nhập thông tin các nhân trước</p>
    );
  } else if (userInfo && userInfo.customer) {
    return <ManaProfile lan={lan} customerId={userInfo.customer.id} />;
  }
}
export default CustomerDetailPage;
