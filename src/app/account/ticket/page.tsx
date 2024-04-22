"use client";

// import { formCustomerUs } from "@/locales/en/Account";
// import { formCustomerVi } from "@/locales/vi/Account";
// import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { redirect } from "next/navigation";
// import Link from "next/link";
// import ManagerTicked from "@/components/Account/ManagerTicked";
import TicketDetailPage from "@/components/Account/TicketPage";

function CustomerDetailPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div>{isClient ? <TicketDetailPage /> : ""}</div>;

  // const dispath = useDispatch();
  // const [lan, setLan] = useState(formCustomerVi);
  // const currentLan = useSelector((state: RootState) => state.client.language);
  // const userInfo = useSelector((state: RootState) => state.client.inforUser);
  // const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  // useLayoutEffect(() => {
  //   if (currentLan.code === "us") {
  //     setLan(formCustomerUs);
  //   } else setLan(formCustomerVi);
  // }, [currentLan]);

  // if (!isloginIn)
  //   return (
  //     <div className="contaner">
  //       <Link href={"/account/login"}>
  //         <span className="text-primary">{lan.mesLogin}</span>
  //       </Link>
  //     </div>
  //   );
  // if (userInfo && !userInfo.customer) {
  //   return (
  //     // <FormCreateCustomer inforUser={userInfo} isloginIn={true} lan={lan} />
  //     <div className="container">
  //       <Link href="/account/customer">
  //         <strong>{lan.messCheckCutomer}</strong>
  //       </Link>
  //     </div>
  //   );
  // } else if (userInfo && userInfo.customer) {
  //   return (
  //     <div className="container">
  //       <ManagerTicked lan={lan} customerId={userInfo.customer.id} />;
  //     </div>
  //   );
  // }
}
export default CustomerDetailPage;
