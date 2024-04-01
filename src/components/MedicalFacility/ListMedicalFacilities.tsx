import { MedicalFacilities } from "@/graphql/webbooking-service.generated";
import { facilityVi } from "@/locales/vi/Facility";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import {
  ETypeOfService,
  ETypeOfServiceParameters,
  EtypeService,
} from "@/assets/contains/emun";
interface IProps {
  facilities: MedicalFacilities[];
  facility: MedicalFacilities | undefined;
  onClickDetail: (facility: MedicalFacilities) => void;
  onChangeFacility: (facility: MedicalFacilities) => void;
  lan: typeof facilityVi;
  typeService: ETypeOfService | undefined;
}

function MedicalFacilitiesService(props: IProps) {
  const {
    lan,
    facilities,
    facility,
    onChangeFacility,
    onClickDetail,
    typeService,
  } = props;
  const router = useRouter();
  // =================================================================
  // =================================================================

  const handleClickRegis = (facility: MedicalFacilities): void => {
    const currentPath = window.location.pathname;
    if (typeService) {
      if (typeService === ETypeOfService.Doctor) {
        router.push(
          `${currentPath}/regis/${facility.id}?type=${ETypeOfServiceParameters.Doctor}`
        );
      } else if (typeService === ETypeOfService.Package)
        router.push(
          `${currentPath}/regis/${facility.id}?type=${ETypeOfServiceParameters.Package}`
        );
      else if (typeService === ETypeOfService.Specialty)
        router.push(
          `${currentPath}/regis/${facility.id}?type=${ETypeOfServiceParameters.Specialty}`
        );
      else if (typeService === ETypeOfService.Vaccine)
        router.push(
          `${currentPath}/regis/${facility.id}?type=${ETypeOfServiceParameters.Vaccine}`
        );
    } else {
      router.push(`${currentPath}/regis/${facility.id}`);
    }
  };

  return (
    <Container className="facility">
      <Row className="facility-list p-3">
        {facilities.map((f, i) => (
          // <h1>a</h1>
          <Col
            key={i}
            lg={6}
            className={` mt-3 px-3 position-relative d-flex ${
              facility?.id === f.id ? "active" : ""
            }`}
            onClick={() => onChangeFacility(f)}>
            <Row className="facility-item p-3">
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
                <div className="btns">
                  <Button
                    onClick={() => handleClickRegis(f)}
                    size="sm"
                    className="btn btn-regis">
                    {lan.btnRegis}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-success"
                    className="btn btn-detail"
                    onClick={() => onClickDetail(f)}>
                    {lan.btnDetail}
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default MedicalFacilitiesService;
