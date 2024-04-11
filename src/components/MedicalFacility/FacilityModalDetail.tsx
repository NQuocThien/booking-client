import { MedicalFacilities } from "@/graphql/webbooking-service.generated";
import { facilityVi } from "@/locales/vi/Facility";
import ModalCpn from "../subs/Modal";
import { Col, Container, Image, Row } from "react-bootstrap";
import { MdEmail, MdOutlineLocationOn, MdPerson } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import MapAddressCpn from "../subs/MapAddressCpn";
import { FaPhone } from "react-icons/fa";
import MapComponent from "../subs/Map";
import MapLeaflet from "../subs/MapV2";
import MapboxMap from "../subs/MapV2";
import BingMap from "../subs/MapV2";
interface IProp {
  lan: typeof facilityVi;
  open: boolean;
  onClose: () => void;
  facility: MedicalFacilities | undefined;
}
function FacilityDetailModal(props: IProp) {
  const { lan, facility, onClose, open } = props;

  // =================================================================

  return (
    <ModalCpn
      buttonSize="sm"
      headerText={`${lan.modalHead} "${facility?.medicalFacilityName}"`}
      handleClose={onClose}
      handleSave={() => {}}
      openRequest={open}
      fullscreen
      onlyClose>
      <Container fluid className="facility-detail mt-2 ">
        <Row className="detail ">
          <Col lg={4} md={4} sm={12} xs={12} className={`p-2`}>
            <div className="general-info p-2">
              <div className="d-flex justify-content-center mt-2">
                <Image
                  className={"logo"}
                  src={facility?.logo.url || "/default.jpg"}
                  alt="Logo"
                  roundedCircle
                />
              </div>
              <div className="deliver my-3"></div>
              <h4 className="text-primary mt-2">
                {facility?.medicalFacilityName}
              </h4>
              <div className="">
                <MdOutlineLocationOn className="text-success me-1" />
                <span className="">{facility?.address}</span>
              </div>
              <div className="">
                <AiOutlineSchedule className="text-success me-1" />
                <span>{facility?.schedule}</span>
              </div>
              <div className="">
                <FaPhone className="text-success me-1" />
                <span>{facility?.numberPhone}</span>
              </div>
              <div className="">
                <MdEmail className="text-success me-1" />
                <span>{facility?.email}</span>
              </div>
              <div className="">
                <MdPerson className="text-success me-1" />
                <span>{facility?.legalRepresentation}</span>
              </div>
            </div>
            <div className="discription mt-3 p-2">
              <h5>{lan.titlDiscription}</h5>
              <p> {facility?.discription}</p>
            </div>
            {/* <div id="" className="map">
              <MapAddressCpn lat={10.275796634253519} lng={105.298391156358} />
            </div> */}
            {facility && facility.lat && facility.lng && (
              <div id="leaflet" className="map">
                <BingMap
                  lat={facility.lat}
                  lng={facility.lng}
                  title={facility?.medicalFacilityName}
                />
              </div>
            )}
          </Col>
          <Col lg={8} md={8} sm={12} xs={12} className="main-info p-2">
            <div className="px-2 poster d-flex justify-content-center py-1">
              <img
                className="image"
                src={facility?.image.url || "/default.jpg"}
                alt="Logo"
                // rounded
              />
            </div>
            <div className="deliver mx-3 my-4"></div>
            <div className="introduce p-2">
              <div
                className={``}
                dangerouslySetInnerHTML={{
                  __html: facility?.introduce || "",
                }}></div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </ModalCpn>
  );
}
export default FacilityDetailModal;
