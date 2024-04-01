import { GetETypeOfFacility } from "@/assets/contains/emun";
import {
  ETypeOfFacility,
  MedicalFacilities,
  useGetAllMedicalFacilityPaginationQuery,
  useGetTotalFacilitiesCountQuery,
} from "@/graphql/webbooking-service.generated";
import { facilityVi } from "@/locales/vi/Facility";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FillterCpn from "../Filter/FilterFacility";
import { IFillter } from "@/assets/contains/item-interface";
import useNProgress from "@/hooks/useNProgress";
import PaginationCpn from "../subs/Pagination";
import { useRouter } from "next/navigation";
import FacilityDetailModal from "./FacilityModalDetail";
interface IProps {
  type: GetETypeOfFacility;
  lan: typeof facilityVi;
}
function MedicalFacilities(props: IProps) {
  const { type, lan } = props;
  const router = useRouter();
  const [facilities, setFacilies] = useState<MedicalFacilities[]>([]);
  const [facility, setFacily] = useState<MedicalFacilities>();
  const [fillter, setFillter] = useState<IFillter>({
    pagination: {
      current: 1,
      total: 0,
      // sort: "asc",
      limit: 10,
    },
    search: "",
    type: type,
  });
  const [modal, setModal] = useState<boolean>(false);
  // =================================================================

  const { data, loading, error } = useGetAllMedicalFacilityPaginationQuery({
    variables: {
      limit: fillter.pagination.limit || 10,
      page: fillter.pagination.current,
      search: fillter.search,
      typeOfFacility: fillter.type,
    },
  });
  const { data: dataTotal, loading: loadingTotal } =
    useGetTotalFacilitiesCountQuery({
      variables: {
        search: fillter.search,
        type: fillter.type,
      },
    });
  // =====================================================================

  //   =================================================================
  useEffect(() => {
    setFillter((pre) => ({
      ...pre,
      type: type,
    }));
  }, [type]);
  useEffect(() => {
    if (dataTotal?.getTotalFacilitiesCount) {
      setFillter((pre) => ({
        ...pre,
        pagination: {
          ...pre.pagination,
          total: dataTotal.getTotalFacilitiesCount,
        },
      }));
    }
  }, [dataTotal]);
  useEffect(() => {
    if (data?.getAllMedicalFacilityPagination) {
      setFacilies(data?.getAllMedicalFacilityPagination);
      setFacily(data?.getAllMedicalFacilityPagination[0]);
    }
  }, [data]);
  useEffect(() => {
    useNProgress(loading || loadingTotal);
  }, [loading, loadingTotal]);

  // =================================================================

  const handleClickRegis = (facility: MedicalFacilities): void => {
    const currentPath = window.location.pathname;
    router.push(`${currentPath}/regis/${facility.id}`);
  };
  const handleClickDetail = (facility: MedicalFacilities) => {
    setFacily(facility);
    setModal(true);
  };

  return (
    <Container className="facility">
      <Row>
        <div className="text-center my-3">
          <h3 className="text-primary mb-2">
            {" "}
            {renderTitle(fillter.type, lan)} ({facilities.length})
          </h3>
          <h5> {renderSubTitle(fillter.type, lan)}</h5>
        </div>
        <FillterCpn
          lan={lan}
          typeOfFacility={fillter.type}
          onSearch={(s) => {
            setFillter((pre) => ({
              ...pre,
              search: s,
            }));
          }}
          onChangeType={(type) => {
            // console.log("test type: ", type);
            setFillter((pre) => ({
              ...pre,
              type: type,
            }));
          }}
        />
      </Row>
      <Row>
        <Col lg={6} className="">
          <div className="facility-list col">
            {facilities.map((f, i) => (
              <Row
                key={i}
                className={`facility-item mt-3 py-2 position-relative ${
                  facility?.id === f.id ? "active" : ""
                }`}
                onClick={() => setFacily(f)}>
                <Col lg={4} md={4} sm={4} xs={4} className="text-center logo">
                  <img src={f.logo.url} alt="" className="img" />
                </Col>
                <Col lg={8} md={8} sm={8} xs={8}>
                  <div className="position-absolute top-0 end-0">
                    {facility?.id === f.id && (
                      <strong className="text-end">
                        <i className="bi bi-bookmark-check-fill text-success"></i>
                      </strong>
                    )}
                  </div>
                  <h5 className="text-info title">
                    <strong>{f.medicalFacilityName}</strong>
                  </h5>
                  <p className="address">
                    <i className="bi bi-geo-alt me-1 text-warning"></i>
                    {f.address}
                  </p>
                  <div>
                    <Button
                      onClick={() => handleClickRegis(f)}
                      size="sm"
                      className="btn btn-regis">
                      {lan.btnRegis}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-success"
                      className="ms-3 btn btn-detail"
                      onClick={() => {
                        handleClickDetail(f);
                      }}>
                      {lan.btnDetail}
                    </Button>
                  </div>
                </Col>
              </Row>
            ))}
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <PaginationCpn
              isRowPerPage
              optionsRow={[1, 2, 4, 5, 10]}
              setRowsPerPage={(numberRow) => {
                setFillter((pre) => ({
                  ...pre,
                  pagination: { ...pre.pagination, limit: numberRow },
                }));
              }}
              totalPage={Math.ceil(
                (fillter.pagination.limit &&
                  fillter.pagination.total / fillter.pagination.limit) ||
                  fillter.pagination.total / 10
              )}
              setPageActive={(page) => {
                setFillter((pre) => ({
                  ...pre,
                  pagination: { ...pre.pagination, current: page },
                }));
              }}
            />
          </div>
        </Col>
        <Col className="">
          {facility && (
            <div className="facility-detail p-4">
              <img src={facility.logo.url} alt="" className="logo mb-2" />
              <img src={facility.image.url} alt="" className="img mb-3" />
              <h4 className="text-primary">{facility.medicalFacilityName}</h4>
              <p>
                <strong>
                  <i className="bi bi-clock-history text-warning me-2"></i>
                </strong>
                {facility.schedule}
              </p>
              <p>{facility.discription}</p>
            </div>
          )}
        </Col>
      </Row>
      <FacilityDetailModal
        facility={facility}
        lan={lan}
        onClose={() => setModal(false)}
        open={modal}
      />
    </Container>
  );
}
export default MedicalFacilities;

function renderTitle(
  type: GetETypeOfFacility | undefined,
  lan: typeof facilityVi
): string {
  if (!type) return lan.labelfillter;
  switch (type) {
    case GetETypeOfFacility.publicHospital:
      return `${lan.titlePublishHospital}`;
    case GetETypeOfFacility.privateHospital:
      return `${lan.titlePrivateHospital}`;
    case GetETypeOfFacility.clinic:
      return `${lan.titleClinic}`;
    case GetETypeOfFacility.vaccinationCenter:
      return `${lan.titleVaccination}`;
    default:
      return "";
  }
}
function renderSubTitle(
  type: GetETypeOfFacility | undefined,
  lan: typeof facilityVi
): string {
  if (!type) return lan.subLabelFillter;
  switch (type) {
    case GetETypeOfFacility.publicHospital:
      return `${lan.subPublishHospital}`;
    case GetETypeOfFacility.privateHospital:
      return `${lan.subPrivateHospital}`;
    case GetETypeOfFacility.clinic:
      return `${lan.subClinic}`;
    case GetETypeOfFacility.vaccinationCenter:
      return `${lan.subVaccination}`;
    default:
      return "";
  }
}
