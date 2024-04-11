import { Vaccination } from "@/graphql/webbooking-service.generated";
import { facilityVi, regisVi } from "@/locales/vi/Facility";
import ModalCpn from "../subs/Modal";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineSick, MdPerson } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { formatter } from "@/utils/tools";
import { AiOutlineSchedule } from "react-icons/ai";
interface IProp {
  lan: typeof regisVi;
  open: boolean;
  onClose: () => void;
  vaccine: Vaccination | undefined;
}
function VaccinationDetailModal(props: IProp) {
  const { lan, vaccine, onClose, open } = props;

  // =================================================================

  return (
    <ModalCpn
      buttonSize="sm"
      headerText={`${lan.modalVaccineHead} "${vaccine?.vaccineName}"`}
      handleClose={onClose}
      handleSave={() => {}}
      openRequest={open}
      onlyClose>
      <Container fluid className="facility-detail mt-2 ">
        <Row className="detail ">
          <Row className={`p-2`}>
            <div className="general-info p-2">
              <h4 className="text-primary mt-2">{vaccine?.vaccineName}</h4>
              <div className="">
                <i className="bi bi-globe text-success me-1"></i>
                <span>{vaccine?.countryOfOrigin}</span>
              </div>
              <div className="">
                <IoPricetags className="text-success me-1" />
                <span>
                  {vaccine?.price && formatter.format(vaccine?.price)}
                </span>
              </div>
              <div className="">
                <MdOutlineSick className="text-success me-1" />
                <span>{lan.modalVaccineProphylactic}:</span>
                <span>{vaccine?.prophylactic}</span>
              </div>
              <div className="">
                <AiOutlineSchedule className="text-success me-1" />
                <span>{lan.modalSchedule}:</span>
                <span>
                  {vaccine?.workSchedule?.schedule.map((s, i) => (
                    <span key={i}>
                      {(vaccine.workSchedule?.schedule &&
                        vaccine.workSchedule?.schedule.length - 1 === i &&
                        s.dayOfWeek) ||
                        `${s.dayOfWeek}, `}
                    </span>
                  ))}
                </span>
              </div>
              <div className="deliver my-3"></div>
            </div>
          </Row>

          <Row className="main-info p-2">
            <div className="introduce p-2">
              <div
                className={``}
                dangerouslySetInnerHTML={{
                  __html: vaccine?.indication || "",
                }}></div>
            </div>
          </Row>
        </Row>
        <Row>
          <div className="discription mt-3 p-2">
            <p>{lan.modalVaccineNote}</p>
            <span> {vaccine?.note}</span>
          </div>
        </Row>
      </Container>
    </ModalCpn>
  );
}
export default VaccinationDetailModal;
