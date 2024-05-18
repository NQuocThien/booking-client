"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const RegisServiceHaveType = dynamic(
  () => import("@/components/RegisServices/RegisServiceHaveType"),
  {
    ssr: false,
  }
);
function RegisPage({ params }: { params: { id: string } }) {
  //================================================================
  const [client, setClient] = useState(typeof window !== "undefined");
  useEffect(() => {
    setClient(true);
  }, []);

  if (client) {
    return <RegisServiceHaveType params={params} />;
  }

  return null;
}
export default RegisPage;
