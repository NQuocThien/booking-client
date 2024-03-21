"use client";

import InforUserCpn from "@/components/Account/AccountInfor";
import { formCustomerUs } from "@/locales/en/Account";
import { formCustomerVi } from "@/locales/vi/Account";
import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { setUserInfo } from "@/redux/store/client";
import { UseDispatch } from "react-redux";
import FormCreateCustomer from "@/components/Account/FormCreateCustomer";
import InforCustomerCpn from "@/components/Account/FormUpdateCustomer";
import { Customer } from "@/graphql/webbooking-service.generated";

function CustomerDetailPage() {
  const dispath = useDispatch();
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const userInfo = useSelector((state: RootState) => state.client.inforUser);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(formCustomerUs);
    } else setLan(formCustomerVi);
  }, [currentLan]);
  const handleChangCustomerInfor = (customer: Customer | undefined) => {
    if (userInfo && customer) {
      dispath(
        setUserInfo({
          ...userInfo,
          customer: {
            ...customer,
          },
        })
      );
    }
  };
  if (!isloginIn) redirect("/account/login");
  if (userInfo && !userInfo.customer) {
    return (
      <FormCreateCustomer
        inforUser={userInfo}
        isloginIn={true}
        lan={lan}
        onCreate={handleChangCustomerInfor}
      />
    );
  } else if (userInfo && userInfo.customer) {
    return (
      <InforCustomerCpn
        onChangeCustomer={handleChangCustomerInfor}
        inforUser={userInfo}
        isloginIn={true}
        lan={lan}
      />
    );
  }
}
export default CustomerDetailPage;
