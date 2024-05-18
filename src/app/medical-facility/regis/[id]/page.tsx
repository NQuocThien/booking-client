"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const RegisDetailPage = dynamic(
  () => import("@/components/Account/Regis/RegisDetail"),
  {
    ssr: false,
  }
);
function RegisPage({ params }: { params: { id: string } }) {
  const [client, setClient] = useState(false);
  useEffect(() => setClient(true), []);
  if (client) {
    return <RegisDetailPage params={params} />;
  }
}
export default RegisPage;
