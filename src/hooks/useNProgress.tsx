"use client";
import NProgress from "nprogress";
const useNProgress = (load: boolean) => {
  if (load) {
    NProgress.configure({
      showSpinner: false,
      minimum: 0.05,
    });
    NProgress.start();
  } else NProgress.done();

  return null;
};

export default useNProgress;
