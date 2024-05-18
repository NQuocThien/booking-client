"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const SignUpCpn = dynamic(
  () => import("@/components/Account/Login/SignUpCpn"),
  {
    ssr: false,
  }
);
function LoginPage() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  if (client) return <SignUpCpn />;
}
export default LoginPage;
