"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import Register from "@/components/Register/Register";
import { regisVi } from "@/locales/vi/Facility";
import { regisUs } from "@/locales/en/Facility";
import Link from "next/link";
function RegisPage({ params }: { params: { id: string } }) {
  const [lan, setLan] = useState(regisVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const isloginIn = useSelector((state: RootState) => state.client.isLogin);
  const [login, setLogin] = useState(false);
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
  if (login) return <Register lan={lan} facilityId={params.id} />;
}
export default RegisPage;
