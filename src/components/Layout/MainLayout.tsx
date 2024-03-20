"use client";
// import { ProgressBar } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { login, setUserInfo, logout } from "@/redux/store/client";
import {
  GeneralInfor,
  useCheckloginCustomerLazyQuery,
  useGetGeneralInforQuery,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useLayoutEffect, useState } from "react";
import { checkExpirationToken, getToken } from "@/utils/tools";
import ToastsPcn from "../subs/toast";
import useNProgress from "../../hooks/useNProgress";

function MainLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useGetGeneralInforQuery();
  const [getDataCustomer, { data: dataCustomer }] =
    useCheckloginCustomerLazyQuery();
  const [generalData, setGeneralData] = useState<GeneralInfor>();
  useEffect(() => {
    if (data) {
      setGeneralData(data.getGeneralInfor);
    }
    useNProgress(loading);
  }, [data, loading]);
  useEffect(() => {
    const token = getToken();
    if (checkExpirationToken(token)) {
      dispatch(login());
      getDataCustomer();
    }
  }, []);
  useEffect(() => {
    if (dataCustomer) {
      dispatch(setUserInfo(dataCustomer.checkloginCustomer));
    }
  }, [dataCustomer]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="">
      <Header onLogout={handleLogout} data={generalData} />
      <div id="main" className="main">
        {children}
      </div>
      <Footer data={generalData} />
      <ToastsPcn />
    </div>
  );
}

export default MainLayout;
