"use client";
import {
  GetProfileTicketByCustomerIdQuery,
  useCancelRegisterMutation,
  useGetProfileTicketByCustomerIdQuery,
} from "@/graphql/webbooking-service.generated";
import useNProgress from "@/hooks/useNProgress";
import { formatDate, formatter } from "@/utils/tools";
import { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosPricetag } from "react-icons/io";
import { TiCancelOutline } from "react-icons/ti";
import {
  FaBriefcaseMedical,
  FaBuilding,
  FaPhone,
  FaRegClock,
} from "react-icons/fa";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { MdAddLocation, MdOutlineTransgender } from "react-icons/md";
import { formCustomerVi } from "@/locales/vi/Account";
import { GiTriangleTarget } from "react-icons/gi";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { showToast } from "../subs/toast";

interface IProps {
  customerId: string;
  lan: typeof formCustomerVi;
}
function ManagerTicked({ customerId, lan }: IProps) {
  const [list, setList] =
    useState<GetProfileTicketByCustomerIdQuery["getProfileByCustomerId"]>();
  // =================================================================
  const { refetch, data, loading, error } =
    useGetProfileTicketByCustomerIdQuery({
      variables: {
        input: customerId,
      },
    });

  const [cancelRegis, { loading: loadingCancel }] = useCancelRegisterMutation();
  // =====================================================================
  useEffect(() => {
    if (data?.getProfileByCustomerId) {
      setList(data.getProfileByCustomerId);
    }
  }, [data]);
  useEffect(() => {
    if (loading) useNProgress(true);
    else useNProgress(false);
  }, [loading]);

  // =================================================================
  const handleCancel = async (idRegis: string, idProfile: string) => {
    await cancelRegis({
      variables: {
        id: idRegis,
      },
    })
      .then(() => {
        showToast(lan.cancelledMess);
        setList((pre) =>
          pre?.map((profile) => {
            if (profile.id !== idProfile) {
              return profile;
            }
            var newProfile = profile;
            var newRegister = profile.register;
            newRegister = newRegister?.map((regis) => {
              if (regis.id === idRegis) {
                return {
                  ...regis,
                  cancel: true,
                };
              }
              return regis;
            });
            newProfile = {
              ...newProfile,
              register: newRegister,
            };
            return newProfile;
          })
        );
      })
      .catch((e) => {
        console.log(e);
        showToast(lan.messError, "error");
      });
  };
  // =================================================================
  return (
    <div className="py-3">
      <Row className="d-flex ">
        {list?.length === 0 && (
          <Col md={{ span: 4, offset: 4 }}>
            <h4 className="fw-bold">{lan.titleProfileNone} 🙌🙌🙌</h4>
            <h5 className="fw-bold">{lan.titleProfileSay} ➕➕➕</h5>
          </Col>
        )}
        <Col
          lg={{ span: 6, offset: 3 }}
          md={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 12, offset: 0 }}>
          {list && (
            <div className="">
              <h4 className="fw-bold">{lan.titleProfile}</h4>
              <Accordion>
                {list.map((item, i) => (
                  <Accordion.Item
                    eventKey={i.toString()}
                    key={i}
                    className="p-3 mt-3">
                    <Accordion.Header className="px-3 bg-light ">
                      <h5>
                        <strong className="text-success ms-2">
                          {item.fullname} ({item.register?.length})
                        </strong>
                      </h5>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="shadow-lg bg-light border p-2">
                        <h5>{lan.titleTicketInfor}</h5>
                        {item.register?.map((regis, i) => (
                          <div key={i} className="border border-info my-2 p-3">
                            <h5>
                              <span className="text-primary me-1">
                                <FaBuilding />
                              </span>
                              {/* {lan.titleFacilityName}: */}
                              <span className="text-info ms-2">
                                {regis?.doctor?.facility?.medicalFacilityName}
                                {
                                  regis?.specialty?.facility
                                    ?.medicalFacilityName
                                }
                                {regis?.package?.facility?.medicalFacilityName}
                                {
                                  regis?.vaccination?.facility
                                    ?.medicalFacilityName
                                }
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
                            {/* SERVICE */}
                            <h6>
                              <span className="text-primary me-1">
                                <FaBriefcaseMedical />
                              </span>
                              {/* {lan.titleFacilityName}: */}
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
                                {regis.session.startTime}-
                                {regis.session.endTime}
                              </span>
                            </h6>
                            <div className="d-flex justify-content-center ">
                              {!regis.cancel && (
                                <Button
                                  size="sm"
                                  className=""
                                  onClick={() =>
                                    handleCancel(regis.id, item.id)
                                  }
                                  variant="outline-secondary">
                                  <TiCancelOutline />
                                  {lan.cancelRegis}
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
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="shadow-lg bg-light border p-2">
                        <h6>{lan.titleProfileOfRegis}</h6>
                        <div className="px-3">
                          <h6>
                            <span className="text-primary me-1">
                              <CiCalendarDate />
                            </span>
                            {lan.titleDateOfBirth}:
                            <span className="text-info ms-2">
                              {formatDate(item.dataOfBirth)}
                            </span>
                          </h6>
                        </div>
                        <div className="px-3">
                          <h6>
                            <span className="text-primary me-1">
                              <FaPhone />
                            </span>
                            {lan.titleFullname}:
                            <span className="text-info ms-2">
                              {item.numberPhone}
                            </span>
                          </h6>
                        </div>
                        <div className="px-3">
                          <h6>
                            <span className="text-primary me-1">
                              <MdOutlineTransgender />
                            </span>
                            {lan.titleGender}:
                            <span className="text-info ms-2">
                              {item.gender}
                            </span>
                          </h6>
                        </div>
                        <div className="px-3">
                          <h6>
                            <span className="text-primary me-1">
                              <MdAddLocation />
                            </span>
                            {lan.titleAddress}:
                            <span className="text-info ms-2">
                              {item.address}
                            </span>
                          </h6>
                        </div>
                        <div className="px-3">
                          <h6>
                            <span className="text-primary me-1">
                              <FaPeopleGroup />
                            </span>
                            {lan.titleEthnic}:
                            <span className="text-info ms-2">
                              {item.ethnic}
                            </span>
                          </h6>
                        </div>
                      </div>
                    </Accordion.Body>
                    {/* <div className="text-end"></div> */}
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
export default ManagerTicked;
