"use client";
import useNProgress from "@/hooks/useNProgress";
import { useEffect } from "react";

function Loadgin() {
  useEffect(() => {
    useNProgress(true);
    return () => {
      useNProgress(false);
    };
  }, []);
  return <div>Loading........</div>;
}
export default Loadgin;
