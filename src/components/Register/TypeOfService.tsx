import { Button, Col, Row } from "react-bootstrap";
import CustomBreadcrumbs from "../subs/Breadcrumbs";
import { regisVi } from "@/locales/vi/Facility";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export interface EServiceState {
  doctor: boolean | undefined;
  specialty: boolean | undefined;
  package: boolean | undefined;
  vaccination: boolean | undefined;
}

interface IProps {
  lan: typeof regisVi;
  srvState: EServiceState;
  onClick: (state: EServiceState) => void;
}

function TypeOfServive(props: IProps) {
  const { lan, srvState, onClick } = props;
  // =================================================================
  const router = useRouter();
  // =================================================================
  const handleClickDoctor = () => {
    onClick({
      package: srvState.package !== undefined ? false : undefined,
      specialty: srvState.specialty !== undefined ? false : undefined,
      vaccination: srvState.vaccination !== undefined ? false : undefined,
      doctor: true,
    });
  };
  const handleClickSpecialty = () => {
    onClick({
      package: srvState.package !== undefined ? false : undefined,
      specialty: true,
      vaccination: srvState.vaccination !== undefined ? false : undefined,
      doctor: srvState.doctor !== undefined ? false : undefined,
    });
  };
  const handleClickVaccination = () => {
    onClick({
      package: srvState.package !== undefined ? false : undefined,
      specialty: srvState.specialty !== undefined ? false : undefined,
      vaccination: true,
      doctor: srvState.doctor !== undefined ? false : undefined,
    });
  };
  const handleClickPackage = () => {
    onClick({
      package: true,
      specialty: srvState.specialty !== undefined ? false : undefined,
      vaccination: srvState.vaccination !== undefined ? false : undefined,
      doctor: srvState.doctor !== undefined ? false : undefined,
    });
  };

  return (
    <div className="type-service">
      <Row>
        <CustomBreadcrumbs
          paths={[
            {
              label: lan.bcHomePage,
              url: "/",
            },
            {
              label: lan.bcHomePage,
              url: "/",
            },
            {
              label: lan.titleTypeService,
              url: "/",
            },
          ]}
        />
      </Row>
      <Row className="text-center title">
        <h3 className="text-primary mb-2">{lan.titleTypeService}</h3>
        <h5 className="sub-title">{lan.subTypeService}</h5>
      </Row>
      <Row className="mt-3 service">
        {srvState.doctor !== undefined && (
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            onClick={() => handleClickDoctor()}>
            <div className="service-item py-3">
              <img
                className="img-icon mb-3"
                src="/imgs/icons/doctor-icon.png"
                alt="package"
              />
              <p className="text-dark text-center caption">
                {lan.titleChooseDoctor}
              </p>
            </div>
          </Col>
        )}
        {srvState.specialty !== undefined && (
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            onClick={() => handleClickSpecialty()}>
            <div className="service-item py-3">
              <img
                className="img-icon mb-3"
                src="/imgs/icons/specialty-icon.png"
                alt="package"
              />
              <p className="text-dark text-center caption">
                {lan.titleChooseSpecialty}
              </p>
            </div>
          </Col>
        )}
        {srvState.package !== undefined && (
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            onClick={() => handleClickPackage()}>
            <div className="service-item py-3">
              <img
                className="img-icon mb-3"
                src="/imgs/icons/package-icon.png"
                alt="package"
              />
              <p className="text-dark text-center caption">
                {lan.titleChoosePackage}
              </p>
            </div>
          </Col>
        )}
        {srvState.vaccination !== undefined && (
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            onClick={() => handleClickVaccination()}>
            <div className="service-item py-3">
              <img
                className="img-icon mb-3"
                src="/imgs/icons/vaccination-icon.png"
                alt="package"
              />
              <p className="text-dark text-center caption">
                {lan.titleChoosePackage}
              </p>
            </div>
          </Col>
        )}
        <div>
          <Button
            variant="light"
            onClick={() => {
              router.back();
            }}>
            <strong>
              <i className="bi bi-arrow-return-left me-2"></i>
            </strong>
            {lan.btnBack}
          </Button>
        </div>
      </Row>
    </div>
  );
}
export default TypeOfServive;
