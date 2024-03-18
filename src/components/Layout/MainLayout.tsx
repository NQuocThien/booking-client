"use client";
// import { ProgressBar } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { login, setUserInfo } from "@/redux/store/client";
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
      <Header data={generalData} />
      <div id="main" className="container main">
        {children}
      </div>
      <Footer data={generalData} />
      <ToastsPcn />
    </div>
  );
}

export default MainLayout;
