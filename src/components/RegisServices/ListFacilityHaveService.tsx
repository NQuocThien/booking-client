"use client";

import { ETypeOfService } from "@/assets/contains/emun";
import { IPagination } from "@/assets/contains/item-interface";
import SearchInputCpn from "@/components/Filter/FilterSearch";
import FacilityDetailModal from "@/components/MedicalFacility/FacilityModalDetail";
import MedicalFacilitiesService from "@/components/MedicalFacility/ListMedicalFacilities";
import {
  MedicalFacilities,
  useGetAllMedicalFacilityHaveServicePaginationQuery,
  useGetTotalFacilitiesHaveSrvCountForClientQuery,
} from "@/graphql/webbooking-service.generated";
import useNProgress from "@/hooks/useNProgress";
import { facilityUs } from "@/locales/en/Facility";
import { facilityVi } from "@/locales/vi/Facility";
import { RootState } from "@/redux/store/store";
import { useEffect, useLayoutEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

interface IFilter {
  pagination: IPagination;
  typeService: ETypeOfService | undefined;
  search: string;
}
function ListFacilityHaveService() {
  // const dispath = useDispatch();
  const [lan, setLan] = useState(facilityVi);
  const currentLan = useSelector((state: RootState) => state.client.language);

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
      setFilter((pre) => ({ ...pre, typeService: typeService }));
      // console.log("Change: ", filter);
    }
  }, [searchParams.get("type")]);

  useLayoutEffect(() => {
    if (currentLan.code === "us") {
      setLan(facilityUs);
    } else setLan(facilityVi);
  }, [currentLan]);

  const [facilities, setFacilities] = useState<MedicalFacilities[]>([]);
  const [facility, setFacility] = useState<MedicalFacilities>();
  const [modal, setModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<IFilter>({
    pagination: {
      current: 1,
      total: 1,
      limit: 10,
    },
    search: "",
    typeService: undefined,
  });
  // =================================================================
  const { data, loading, error } =
    useGetAllMedicalFacilityHaveServicePaginationQuery({
      variables: {
        limit: filter.pagination.limit || 10,
        page: filter.pagination.current,
        search: filter.search,
        type: filter.typeService,
      },
    });
  const { data: dataTotal, loading: loadingTotal } =
    useGetTotalFacilitiesHaveSrvCountForClientQuery({
      variables: {
        search: filter.search,
        type: filter.typeService,
      },
    });

  // =================================================================
  // useEffect(() => {
  useNProgress(loading || loadingTotal);
  // }, [loading, loadingTotal]);
  useEffect(() => {
    if (data) {
      setFacilities(data.getAllMedicalFacilityHaveSrvPaginationForClient);
    }
  }, [data]);
  useEffect(() => {
    if (dataTotal) {
      setFilter((pre) => ({
        ...pre,
        pagination: {
          ...pre.pagination,
          total: dataTotal.getTotalFacilitiesHaveSrvCountForClient,
        },
      }));
    }
  }, [dataTotal]);
  // =================================================================
  const getSubTitle = (): string => {
    switch (filter.typeService) {
      case ETypeOfService.Doctor:
        return lan.subSrvDoctor;

      case ETypeOfService.Package:
        return lan.subSrvPackage;

      case ETypeOfService.Specialty:
        return lan.subSrvSpecialty;

      case ETypeOfService.Vaccine:
        return lan.subSrvVaccination;

      default:
        return lan.subLabelFillter;
    }
  };

  return (
    <div className="regis-service">
      <div className="regis-service-top">
        <div className="container">
          <Row className="align-items-center pt-4">
            <Col lg={{ span: 8, offset: 2 }} md={12} sm={12} xs={12}>
              <SearchInputCpn
                onSearch={(s) => {
                  setFilter((pre) => ({ ...pre, search: s }));
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container regis-service-content ">
        <h3 className="text-primary text-center py-3">{lan.labelfillter}</h3>
        <h4 className="text-primary text-center ">{getSubTitle()}</h4>
        <MedicalFacilitiesService
          lan={lan}
          facilities={facilities}
          facility={facility}
          onChangeFacility={(facility) => setFacility(facility)}
          typeService={filter.typeService}
          onClickDetail={(facility) => {
            setFacility(facility);
            setModal(true);
          }}
        />
      </div>
      <FacilityDetailModal
        facility={facility}
        open={modal}
        lan={lan}
        onClose={() => setModal(false)}
      />
    </div>
  );
}
export default ListFacilityHaveService;
