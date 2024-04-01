import { Doctor } from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
import ModalCpn from "../subs/Modal";
import { Col, Container, Image, Row } from "react-bootstrap";
import { MdEmail, MdOutlineLocationOn, MdTransgender } from "react-icons/md";
import { FaBookMedical, FaBookOpen, FaPhone } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { getAcademiTitle, getDegree } from "@/utils/getData";
import { store } from "@/redux/store/store";
import { AiOutlineExperiment } from "react-icons/ai";
import { IoPricetags } from "react-icons/io5";
import { formatter } from "@/utils/tools";
interface IProp {
  lan: typeof regisVi;
  open: boolean;
  onClose: () => void;
  doctor: Doctor | undefined;
}
function DoctorDetailModal(props: IProp) {
  const { lan, doctor, onClose, open } = props;

  // =================================================================
  return (
    <ModalCpn
      buttonSize="sm"
      headerText={`${lan.modalDoctorHead} "${doctor?.doctorName}"`}
      handleClose={onClose}
      handleSave={() => {}}
      openRequest={open}
      centered
      onlyClose>
      <Container fluid className="facility-detail mt-2 ">
        <Row className="detail ">
          <Row>
            <div className="general-info p-2">
              <Col
                lg={{ span: 8, offset: 2 }}
                md={{ span: 8, offset: 2 }}
                sm={{ span: 10, offset: 1 }}
                className="d-flex justify-content-center mt-2">
                <Image
                  className={"logo"}
                  src={doctor?.avatar.url || "/default.jpg"}
                  alt="Logo"
                  roundedCircle
                />
              </Col>
              <div className="deliver my-3"></div>
              <h4 className="text-primary mt-2">{doctor?.doctorName}</h4>
              <div className="">
                <FaBookOpen className="text-success me-1" />
                <span className="">
                  {getDegree(
                    doctor?.doctorName,
                    store.getState().client.language.code as "vn" | "us"
                  )}
                </span>
              </div>
              {doctor?.academicTitle && (
                <div className="">
                  <AiOutlineExperiment className="text-success me-1" />
                  <span className="">
                    {getAcademiTitle(
                      doctor?.academicTitle,
                      store.getState().client.language.code as "vn" | "us"
                    )}
                  </span>
                </div>
              )}
              <div className="">
                <IoPricetags className="text-success me-1" />
                <span>{doctor?.price && formatter.format(doctor?.price)}</span>
              </div>
              <div className="">
                <MdTransgender className="text-success me-1" />
                <span className="">{doctor?.gender}</span>
              </div>

              <div className="">
                <FaPhone className="text-success me-1" />
                <span>{doctor?.numberPhone}</span>
              </div>
              <div className="">
                <MdEmail className="text-success me-1" />
                <span>{doctor?.email}</span>
              </div>
              <div className="">
                <FaBookMedical className="text-success me-1" />
                <span>{doctor?.specialty?.specialtyName}</span>
              </div>
            </div>
          </Row>
          <Row className="main-info d-flex justify-content-center">
            <div className="deliver mx-4 my-3"></div>
            <div className="introduce p-2">
              <div>{doctor?.discription}</div>
            </div>
          </Row>
        </Row>
        <Row></Row>
      </Container>
    </ModalCpn>
  );
}
export default DoctorDetailModal;
