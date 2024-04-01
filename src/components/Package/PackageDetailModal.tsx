import { Package } from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
import ModalCpn from "../subs/Modal";
import { Col, Container, Image, Row } from "react-bootstrap";
import { MdTransgender } from "react-icons/md";
import "leaflet/dist/leaflet.css";
import { getSchedule } from "@/utils/getData";
import { store } from "@/redux/store/store";
import { IoIosPricetags } from "react-icons/io";
import { formatter } from "@/utils/tools";
import { GrSchedules } from "react-icons/gr";
interface IProp {
  lan: typeof regisVi;
  open: boolean;
  onClose: () => void;
  packageCare: Package | undefined;
}
function PackageDetailModal(props: IProp) {
  const { lan, packageCare, onClose, open } = props;

  // =================================================================
  return (
    <ModalCpn
      buttonSize="sm"
      headerText={`${lan.modalPackageHead} "${packageCare?.packageName}"`}
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
                  src={packageCare?.image.url || "/default.jpg"}
                  alt="Logo"
                  roundedCircle
                />
              </Col>
              <div className="deliver my-3"></div>
              <h4 className="text-primary mt-2">{packageCare?.packageName}</h4>

              <div className="">
                <MdTransgender className="text-success me-1" />
                <span className="">{packageCare?.gender}</span>
              </div>

              <div className="">
                <IoIosPricetags className="text-success me-1" />
                <span>
                  {packageCare?.price && formatter.format(packageCare.price)}
                </span>
              </div>
              <div className="">
                <GrSchedules className="text-success me-1" />
                <span>
                  {packageCare?.workSchedule.schedule &&
                    getSchedule(
                      packageCare.workSchedule.schedule,
                      store.getState().client.language.code as "vn" | "us"
                    )}
                </span>
              </div>
            </div>
          </Row>
          <Row className="main-info d-flex justify-content-center">
            <div className="deliver mx-4 my-3"></div>
            <div className="introduce p-2">
              <div>{packageCare?.examinationDetails}</div>
            </div>
          </Row>
        </Row>
        <Row></Row>
      </Container>
    </ModalCpn>
  );
}
export default PackageDetailModal;
