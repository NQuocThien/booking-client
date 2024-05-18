"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ProfilePage = dynamic(() => import("@/components/Account/ProfilePage"), {
  ssr: false,
});
function CustomerDetailPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  return <div>{isClient ? <ProfilePage /> : ""}</div>;
}
export default CustomerDetailPage;
