"use client";
// import { ProgressBar } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { login, setUserInfo, logout, setLanguage } from "@/redux/store/client";
import {
  GeneralInfor,
  useCheckloginCustomerLazyQuery,
  useGetGeneralInforQuery,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useLayoutEffect, useState } from "react";
import { checkExpirationToken, getLocalStorage, getToken } from "@/utils/tools";
import ToastsPcn from "../subs/toast";
import useNProgress from "../../hooks/useNProgress";
import "react-toastify/dist/ReactToastify.css";
import { languages } from "@/assets/contains/emun";
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

  const languageJson = getLocalStorage(
    process.env.NEXT_PUBLIC_LANGUAGE || "language"
  );

  useEffect(() => {
    if (languageJson) {
      // console.log("test Lan: ", languageJson);
      if (languageJson === "us") {
        dispatch(setLanguage(languages[1]));
      }
    }
  }, [languageJson]);

  return (
    <div className="">
      <Header onLogout={handleLogout} data={generalData} />
      <div id="main" className="main">
        {children}
        <ToastsPcn />
      </div>
      <Footer data={generalData} />
    </div>
  );
}

export default MainLayout;
