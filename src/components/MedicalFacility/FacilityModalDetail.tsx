import { MedicalFacilities } from "@/graphql/webbooking-service.generated";
import { facilityVi } from "@/locales/vi/Facility";
import ModalCpn from "../subs/Modal";
import { Col, Container, Image, Row } from "react-bootstrap";
import { MdEmail, MdOutlineLocationOn, MdPerson } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ReactDOMServer from "react-dom/server";
import { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
interface IProp {
  lan: typeof facilityVi;
  open: boolean;
  onClose: () => void;
  facility: MedicalFacilities | undefined;
}
function FacilityDetailModal(props: IProp) {
  const { lan, facility, onClose, open } = props;

  // =================================================================
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  useEffect(() => {
    if (open && !mapRef.current) {
      setTimeout(() => {
        mapRef.current = L.map("map-modal", {
          center: [facility?.lat || 1, facility?.lng || 1],
          zoom: 11,
        });

        // Thêm layer OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);
        const markerIcon = L.divIcon({
          className: "custom-marker-icon",
          html: ReactDOMServer.renderToString(
            <FaMapMarkerAlt className="text-danger fs-3 " />
          ),
        });
        markerRef.current = L.marker([facility?.lat || 1, facility?.lng || 1], {
          icon: markerIcon,
        }).addTo(mapRef.current);
      }, 100);
    }
    // Clean up khi modal bị ẩn
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        markerRef.current?.remove();
        markerRef.current = null;
        mapRef.current = null;
      }
    };
  }, [open]);

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

            <div id="map-modal" className="map"></div>
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
