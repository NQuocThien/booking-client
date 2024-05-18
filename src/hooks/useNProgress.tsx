"use client";

import NProgress from "nprogress";
import { useEffect, useState } from "react";
const useNProgress = (load: boolean) => {
  const [client, setClient] = useState(typeof window !== "undefined");
  useEffect(() => setClient(true), []);
  if (client) {
    if (load) {
      NProgress.configure({
        showSpinner: false,
        minimum: 0.05,
      });
      NProgress.start();
    } else NProgress.done();
  }
  return null;
};

export default useNProgress;
