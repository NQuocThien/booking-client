"use client";

import { GetETypeOfFacility } from "@/assets/contains/emun";
import PosterCpn from "@/components/home/Poster";
import TopFacilitiesCpn from "@/components/home/TopFacility";
import { homeUs } from "@/locales/en/Home";
import { homeVi } from "@/locales/vi/Home";
import { RootState } from "@/redux/store/store";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const [lan, setLan] = useState(homeVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(homeUs);
    } else setLan(homeVi);
  }, [currentLan]);
  return (
    <div className="home-page">
      <div className="poster">
        <div className="container">
          <PosterCpn lan={lan} />
        </div>
      </div>
      <div className="top-facility mt-5 py-3">
        <div className="facility ">
          <TopFacilitiesCpn
            lan={{
              btnShowList: lan.btnShowList,
              titleTop: lan.publicHospitalTopTitle,
              titleSub: lan.publicHospitalTopTitleBottom,
              btnDetail: lan.btnDetail,
              btnRegis: lan.btnRegis,
            }}
            type={GetETypeOfFacility.publicHospital}
          />
        </div>
        <div className="facility odd">
          <TopFacilitiesCpn
            lan={{
              btnShowList: lan.btnShowList,
              titleTop: lan.privateHospitalTopTitle,
              titleSub: lan.privateHospitalTopTitleBottom,
              btnDetail: lan.btnDetail,
              btnRegis: lan.btnRegis,
            }}
            type={GetETypeOfFacility.privateHospital}
          />
        </div>
        <div className="facility">
          <TopFacilitiesCpn
            lan={{
              btnShowList: lan.btnShowList,
              titleTop: lan.clinicTopTitle,
              titleSub: lan.clinicTopTitleBottom,
              btnDetail: lan.btnDetail,
              btnRegis: lan.btnRegis,
            }}
            type={GetETypeOfFacility.clinic}
          />
        </div>
        <div className="facility">
          <TopFacilitiesCpn
            lan={{
              btnShowList: lan.btnShowList,
              titleTop: lan.vaccinationTopTitle,
              titleSub: lan.vaccinationTopTitleBottom,
              btnDetail: lan.btnDetail,
              btnRegis: lan.btnRegis,
            }}
            type={GetETypeOfFacility.vaccinationCenter}
          />
        </div>
      </div>
    </div>
  );
}
