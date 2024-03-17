"use client";
import { ProgressBar } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, setUserInfo } from "@/redux/store/client";
import {
  GeneralInfor,
  useCheckloginCustomerLazyQuery,
  useGetGeneralInforQuery,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useLayoutEffect, useState } from "react";
import { checkExpirationToken, getCookie, getToken } from "@/utils/tools";
import { ToastContainer } from "react-toastify";
import ToastsPcn from "../subs/toast";

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
  }, [data]);
  useLayoutEffect(() => {
    const token = getToken();
    if (checkExpirationToken(token)) {
      getDataCustomer();
      dispatch(login());
    }
  }, []);
  useEffect(() => {
    if (dataCustomer) {
      dispatch(setUserInfo(dataCustomer.checkloginCustomer));
    }
  }, [dataCustomer]);
  return (
    <div className="container-fluid">
      <ProgressBar />
      <Header data={generalData} />
      <div className="container">{children}</div>
      <Footer data={generalData} />
      <ToastsPcn />
    </div>
  );
}

export default MainLayout;
