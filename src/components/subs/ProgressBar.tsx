import React, { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress"; // Import thư viện NProgress
import "nprogress/nprogress.css"; // Import CSS của NProgress

const ProgressBar: React.FC = () => {
  useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return <></>; // Không cần phải render bất kỳ nội dung nào cho component này
};

export default ProgressBar;
