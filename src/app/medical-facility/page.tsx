"use client";

"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ListFacilityHaveService = dynamic(
  () => import("@/components/RegisServices/ListFacilityHaveService"),
  {
    ssr: false,
  }
);
function ListFailitiesPage() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  if (client) {
    return <ListFacilityHaveService />;
  }
  return null;
}
export default ListFailitiesPage;
