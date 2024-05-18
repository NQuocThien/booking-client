"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ListFacilityHaveService = dynamic(
  () => import("@/components/RegisServices/ListFacilityHaveService"),
  {
    ssr: false,
  }
);
function RegisDoctorPage() {
  const [client, setClient] = useState(typeof window !== "undefined");
  useEffect(() => {
    setClient(true);
  }, []);

  if (client) {
    return <ListFacilityHaveService />;
  }
  return null;
}
export default RegisDoctorPage;
