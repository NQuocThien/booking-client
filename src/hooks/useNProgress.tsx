"use client";
import NProgress from "nprogress";
import { useRouter } from "next/router";

const useNProgress = (load: boolean) => {
  if (load) {
    NProgress.configure({
      showSpinner: false,
      minimum: 0.05,
    });
    NProgress.start();
  } else NProgress.done();

  return null; // Hook này không cần trả về gì
};

export default useNProgress;
