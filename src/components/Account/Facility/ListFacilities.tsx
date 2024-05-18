"use client";

import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { GetETypeOfFacility } from "@/assets/contains/emun";
import { facilityVi } from "@/locales/vi/Facility";
import { facilityUs } from "@/locales/en/Facility";
import MedicalFacilities from "@/components/MedicalFacility/MedicalFacility";
function ListFailitiesPage() {
  const [lan, setLan] = useState(facilityVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const searchParams = useSearchParams();

  const [typeOfFacility, setTypeOfFacility] = useState<GetETypeOfFacility>();

  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(facilityUs);
    } else setLan(facilityVi);
  }, [currentLan]);

  useEffect(() => {
    function getNextRoute(type: string): GetETypeOfFacility {
      switch (type) {
        case "public-hospital":
          return GetETypeOfFacility.publicHospital;
        case "private-hospital":
          return GetETypeOfFacility.privateHospital;
        case "clinic":
          return GetETypeOfFacility.clinic;
        case "vaccination":
          return GetETypeOfFacility.vaccinationCenter;

        default:
          return GetETypeOfFacility.clinic;
      }
    }
    const type = searchParams.get("type");
    if (type && type !== "") {
      const filter = getNextRoute(type);
      setTypeOfFacility(filter);
    }
  }, [searchParams.get("type")]);

  return <MedicalFacilities lan={lan} type={typeOfFacility} />;
}
export default ListFailitiesPage;
