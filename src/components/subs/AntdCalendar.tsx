import dayjs, { Dayjs } from "dayjs";
import { Calendar, Badge } from "antd";
import React, { useState } from "react";
import {
  GetProfileTicketByCustomerIdQuery,
  GetProfileTicketByCustomerKeyQuery,
  Register,
} from "@/graphql/webbooking-service.generated";
import { formatDate, formatter } from "@/utils/tools";
import { GetEStateRegister } from "@/assets/contains/emun";
import ModalCpn from "./Modal";
import { formCustomerVi } from "@/locales/vi/Account";
import { FaBriefcaseMedical, FaBuilding, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiTriangleTarget } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FiLoader } from "react-icons/fi";
interface IProps {
  list: GetProfileTicketByCustomerIdQuery["getProfileByCustomerId"] | undefined;
  shareList:
    | GetProfileTicketByCustomerKeyQuery["getProfileByCustomerKey"]
    | undefined;

  lan: typeof formCustomerVi;
}

interface Event {
  type: "error" | "success" | "warning" | "default" | "processing";
  content: string;
}

interface EventsData {
  [date: string]: Event[];
}

const renderType = (
  r: Register
): "error" | "success" | "warning" | "default" | "processing" => {
  if (r.cancel) return "error";
  if (r.state === GetEStateRegister.Success) return "success";
  if (r.state === GetEStateRegister.Approved) return "warning";
  if (r.state === GetEStateRegister.Pending) return "processing";

  return "default";
};

const MyCalendar: React.FC<IProps> = ({ list, shareList, lan }) => {
  const eventsData: EventsData = {};
  const [regisSelect, setRegisSelect] = useState<
    GetProfileTicketByCustomerIdQuery["getProfileByCustomerId"]
  >([]);
  const [regisSelectShare, setRegisSelectShare] = useState<
    GetProfileTicketByCustomerKeyQuery["getProfileByCustomerKey"]
  >([]);

  var allRegis: Register[] = [];
  const [show, setShow] = useState(false);
  list?.map((p) => {
    p.register?.map((r) => {
      const regis: Register = {
        cancel: r.cancel,
        createdAt: r.createdAt,
        date: r.date,
        id: r.id,
        profileId: r.profileId,
        session: r.session,
        state: r.state,
        typeOfService: r.typeOfService,
      };
      allRegis.push(regis);
    });
  });
  shareList?.map((p) => {
    p.register?.map((r) => {
      const regis: Register = {
        cancel: r.cancel,
        createdAt: r.createdAt,
        date: r.date,
        id: r.id,
        profileId: r.profileId,
        session: r.session,
        state: r.state,
        typeOfService: r.typeOfService,
      };
      allRegis.push(regis);
    });
  });

  allRegis.map((regis) => {
    var profileName: string | undefined;
    profileName = list?.find((p) => p.id === regis.profileId)?.fullname;
    if (profileName === undefined)
      profileName = shareList?.find((p) => p.id === regis.profileId)?.fullname;
    if (profileName) {
      const event: Event = {
        content: `${profileName} (${regis.session.startTime}-${regis.session.startTime})`,
        type: renderType(regis),
      };
      const dateEvent: string = formatDate(regis.date.toString());
      if (!eventsData.hasOwnProperty(dateEvent)) {
        eventsData[dateEvent] = [];
      }
      eventsData[dateEvent].push(event);
    }
  });

  const dateCellRender = (value: Dayjs) => {
    const dateString = value.format("YYYY-MM-DD");
    const events = eventsData[dateString];
    return (
      <div>
        {events &&
          events.map((event, index) => (
            <Badge key={index} status={event.type} text={event.content} />
          ))}
      </div>
    );
  };

  const onPanelChange = (date: Dayjs | null, mode: string) => {
    // Sử dụng string thay vì Mode
    if (date) {
      const momentDate = dayjs(date).toDate(); // Convert Dayjs to Date
      // console.log(dayjs(date).format("YYYY-MM-DD"), mode);
    }
  };

  const handleClick = (date: Dayjs) => {
    const dateSeleched = formatDate(date.toISOString());
    const listRegisSelect = allRegis.filter(
      (r) => formatDate(r.date) === dateSeleched
    );
    if (list) {
      const newList = list.filter((p) => {
        const allRegisOfProfile = p.register;
        if (
          allRegisOfProfile?.some((r) =>
            listRegisSelect.some((rl) => rl.id === r.id)
          )
        )
          return true;
        return false;
      });
      const newList2 = newList.map((p) => {
        var newR = p.register?.filter((r) =>
          listRegisSelect.some((rl) => rl.id === r.id)
        );
        var newP = p;
        newP.register = newR;
        return newP;
      });
      setRegisSelect(newList2);
    } else if (shareList) {
      const newList = shareList.filter((p) => {
        const allRegisOfProfile = p.register;
        if (
          allRegisOfProfile?.some((r) =>
            listRegisSelect.some((rl) => rl.id === r.id)
          )
        )
          return true;
        return false;
      });
      const newList2 = newList.map((p) => {
        var newR = p.register?.filter((r) =>
          listRegisSelect.some((rl) => rl.id === r.id)
        );
        var newP = p;
        newP.register = newR;
        return newP;
      });
      setRegisSelectShare(newList2);
    }
    setShow(true);
  };

  return (
    <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
      <Calendar
        dateCellRender={dateCellRender}
        onPanelChange={onPanelChange}
        onSelect={handleClick}
      />
      <ModalCpn
        handleClose={() => setShow(false)}
        headerText="Các phiếu khám trong ngày"
        handleSave={() => {}}
        openRequest={show}
        buttonSize="sm"
        onlyClose>
        <div>
          {list &&
            regisSelect.map((p, i) => (
              <div>
                <div className="shadow-lg bg-light border p-2">
                  <h5>
                    {lan.titleTicketInfor} {p.fullname}
                  </h5>
                  {p.register?.map((regis, i) => (
                    <div
                      key={"regis" + i}
                      className="border border-info my-2 p-3">
                      <h5>
                        <span className="text-primary me-1">
                          <FaBuilding />
                        </span>
                        <span className="text-info ms-2">
                          {regis?.doctor?.facility?.medicalFacilityName}
                          {regis?.specialty?.facility?.medicalFacilityName}
                          {regis?.package?.facility?.medicalFacilityName}
                          {regis?.vaccination?.facility?.medicalFacilityName}
                        </span>
                      </h5>
                      <h6>
                        <span className="text-primary me-1">
                          <FaLocationDot />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis?.doctor?.facility?.address}
                          {regis?.specialty?.facility?.address}
                          {regis?.package?.facility?.address}
                          {regis?.vaccination?.facility?.address}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <GiTriangleTarget />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis?.typeOfService}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <FaBriefcaseMedical />
                        </span>
                        <span className="text-dark ms-2">
                          {regis?.doctor?.doctorName}
                          {regis?.package?.packageName}
                          {regis?.vaccination?.vaccineName}
                          {regis?.specialty?.specialtyName}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <IoIosPricetag />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis?.doctor?.price &&
                            formatter.format(regis?.doctor?.price)}
                          {regis?.package?.price &&
                            formatter.format(regis?.package?.price)}
                          {regis?.vaccination?.price &&
                            formatter.format(regis?.vaccination?.price)}
                          {regis?.specialty?.price &&
                            formatter.format(regis?.specialty?.price)}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <SlCalender />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {formatDate(regis?.date)}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <FaRegClock />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis.session.startTime}-{regis.session.endTime}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <FiLoader />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-primary ms-2 fw-bold">
                          {regis.state}
                        </span>
                      </h6>
                      {/* <div className="d-flex justify-content-center ">
                      {!regis.cancel &&
                        isCancel(
                          regis.state,
                          regis.date,
                          regis.session.startTime
                        ) && (
                          <Button
                            size="sm"
                            className=""
                            onClick={() => handleCancel(regis.id, item.id)}
                            variant="outline-secondary">
                            <TiCancelOutline />
                            {lan.cancelRegis}
                            {loadingCancel && (
                              <Spinner
                                size="sm"
                                animation="border"
                                variant="warning"
                              />
                            )}
                          </Button>
                        )}
                      {regis.cancel && (
                        <div className="text-danger text-center">
                          <h5>
                            <TiCancelOutline />
                          </h5>
                          {lan.cancelledRegis}
                        </div>
                      )}

                      {regis.state === GetEStateRegister.Success &&
                        !regis.cancel && (
                          <Link
                            className="btn btn-primary btn-sm"
                            href={`/account/ticket/${regis.id}`}>
                            {lan.detailLink}
                            {loadingCancel && (
                              <Spinner
                                size="sm"
                                animation="border"
                                variant="warning"
                              />
                            )}
                          </Link>
                        )}
                    </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          {shareList &&
            regisSelectShare.map((p, i) => (
              <div>
                <div className="shadow-lg bg-light border p-2">
                  <h5>
                    {lan.titleTicketInfor} {p.fullname}
                  </h5>
                  {p.register?.map((regis, i) => (
                    <div
                      key={"regis" + i}
                      className="border border-info my-2 p-3">
                      <h5>
                        <span className="text-primary me-1">
                          <FaBuilding />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-info ms-2">
                          {regis?.doctor?.facility?.medicalFacilityName}
                          {regis?.specialty?.facility?.medicalFacilityName}
                          {regis?.package?.facility?.medicalFacilityName}
                          {regis?.vaccination?.facility?.medicalFacilityName}
                        </span>
                      </h5>
                      <h6>
                        <span className="text-primary me-1">
                          <FaLocationDot />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis?.doctor?.facility?.address}
                          {regis?.specialty?.facility?.address}
                          {regis?.package?.facility?.address}
                          {regis?.vaccination?.facility?.address}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <GiTriangleTarget />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis?.typeOfService}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <FaBriefcaseMedical />
                        </span>
                        <span className="text-dark ms-2">
                          {regis?.doctor?.doctorName}
                          {regis?.package?.packageName}
                          {regis?.vaccination?.vaccineName}
                          {regis?.specialty?.specialtyName}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <IoIosPricetag />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis?.doctor?.price &&
                            formatter.format(regis?.doctor?.price)}
                          {regis?.package?.price &&
                            formatter.format(regis?.package?.price)}
                          {regis?.vaccination?.price &&
                            formatter.format(regis?.vaccination?.price)}
                          {regis?.specialty?.price &&
                            formatter.format(regis?.specialty?.price)}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <SlCalender />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {formatDate(regis?.date)}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <FaRegClock />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-dark ms-2">
                          {regis.session.startTime}-{regis.session.endTime}
                        </span>
                      </h6>
                      <h6>
                        <span className="text-primary me-1">
                          <FiLoader />
                        </span>
                        {/* {lan.titleFacilityName}: */}
                        <span className="text-primary ms-2 fw-bold">
                          {regis.state}
                        </span>
                      </h6>
                      {/* <div className="d-flex justify-content-center ">
                      {!regis.cancel &&
                        isCancel(
                          regis.state,
                          regis.date,
                          regis.session.startTime
                        ) && (
                          <Button
                            size="sm"
                            className=""
                            onClick={() => handleCancel(regis.id, item.id)}
                            variant="outline-secondary">
                            <TiCancelOutline />
                            {lan.cancelRegis}
                            {loadingCancel && (
                              <Spinner
                                size="sm"
                                animation="border"
                                variant="warning"
                              />
                            )}
                          </Button>
                        )}
                      {regis.cancel && (
                        <div className="text-danger text-center">
                          <h5>
                            <TiCancelOutline />
                          </h5>
                          {lan.cancelledRegis}
                        </div>
                      )}

                      {regis.state === GetEStateRegister.Success &&
                        !regis.cancel && (
                          <Link
                            className="btn btn-primary btn-sm"
                            href={`/account/ticket/${regis.id}`}>
                            {lan.detailLink}
                            {loadingCancel && (
                              <Spinner
                                size="sm"
                                animation="border"
                                variant="warning"
                              />
                            )}
                          </Link>
                        )}
                    </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </ModalCpn>
    </div>
  );
};

export default MyCalendar;
