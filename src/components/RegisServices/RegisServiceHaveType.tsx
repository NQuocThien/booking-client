"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Register from "@/components/Register/Register";
import { regisVi } from "@/locales/vi/Facility";
import { regisUs } from "@/locales/en/Facility";
import Link from "next/link";
import { ETypeOfService } from "@/assets/contains/emun";
import { useSearchParams } from "next/navigation";
function RegisServiceHaveType({ params }: { params: { id: string } }) {
  const [lan, setLan] = useState(regisVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  const [login, setLogin] = useState(false);
  const [typeOfService, setTypeService] = useState<ETypeOfService>();
  const searchParams = useSearchParams();
  //================================================================
  useEffect(() => {
    function getTypeService(type: string): ETypeOfService | undefined {
      switch (type) {
        case "service-doctor":
          return ETypeOfService.Doctor;
        case "service-specialty":
          return ETypeOfService.Specialty;
        case "service-package":
          return ETypeOfService.Package;
        case "service-vaccine":
          return ETypeOfService.Vaccine;
        default:
          return undefined;
      }
    }
    const type = searchParams.get("type");
    if (type && type !== "") {
      const typeService = getTypeService(type);
      setTypeService(typeService);
    }
  }, [searchParams.get("type")]);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(regisUs);
    } else setLan(regisVi);
  }, [currentLan]);

  useEffect(() => {
    setLogin(isloginIn);
  }, [isloginIn]);

  if (!login)
    return (
      <div className="container">
        <Link className="container fw-bold" href={"/account/login"}>
          {lan.messLogin} !!!
        </Link>
      </div>
    );
  if (login)
    return (
      <Register
        lan={lan}
        facilityId={params.id}
        typeOfService={typeOfService}
      />
    );
}
export default RegisServiceHaveType;
