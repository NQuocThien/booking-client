"use client";
import { useEffect, useState } from "react";
import ProfilePage from "@/components/Account/ProfilePage";

function CustomerDetailPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  return <div>{isClient ? <ProfilePage /> : ""}</div>;
}
export default CustomerDetailPage;
