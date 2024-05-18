"use client";
// import LoginCpn from "@/components/Account/Login/Login";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const LoginCpn = dynamic(() => import("@/components/Account/Login/Login"), {
  ssr: false,
});
function LoginPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return <LoginCpn />;
  }
}
export default LoginPage;
