"use client";

import { formCustomerUs } from "@/locales/en/Account";
import { formCustomerVi } from "@/locales/vi/Account";
import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

import ManaProfile from "@/components/Account/ManaProfile";
import Link from "next/link";

function ProfilePage() {
  // const dispath = useDispatch();
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const userInfo = useSelector((state: RootState) => state.client.inforUser);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  const [login, setLogin] = useState<boolean>(isloginIn);

  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(formCustomerUs);
    } else setLan(formCustomerVi);
  }, [currentLan]);
  useEffect(() => {
    setLogin(isloginIn);
  }, [isloginIn]);
  isloginIn;
  if (!login)
    return (
      <div className="contaner">
        <Link href={"/account/login"}>
          <span className="text-primary">{lan.mesLogin}</span>
        </Link>
      </div>
    );
  if (userInfo && !userInfo.customer) {
    return (
      // <FormCreateCustomer inforUser={userInfo} isloginIn={true} lan={lan} />
      <div className="container">
        <Link href="/account/customer">
          <strong>{lan.messCheckCutomer}</strong>
        </Link>
      </div>
    );
  } else if (userInfo && userInfo.customer) {
    return (
      <div className="container profile">
        <ManaProfile
          customerKey={userInfo.customer.customerKey}
          lan={lan}
          customerId={userInfo.customer.id}
        />
      </div>
    );
  }
}
export default ProfilePage;
