"use client";
import {
  EStateRegister,
  GetProfileTicketByCustomerIdQuery,
  GetProfileTicketByCustomerKeyQuery,
  useCancelRegisterMutation,
  useGetProfileTicketByCustomerIdQuery,
  useGetProfileTicketByCustomerKeyQuery,
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
import {
  FaLocationDot,
  FaPeopleGroup,
  FaRegShareFromSquare,
} from "react-icons/fa6";
import { MdAddLocation, MdOutlineTransgender } from "react-icons/md";
import { formCustomerVi } from "@/locales/vi/Account";
import { GiTriangleTarget } from "react-icons/gi";
import { Accordion, Button, Col, Row, Spinner } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { showToast } from "../subs/toast";
import { GetEStateRegister } from "@/assets/contains/emun";
import Link from "next/link";
import { FiLoader } from "react-icons/fi";

interface IProps {
  customerId: string;
  customerKey: string;
  lan: typeof formCustomerVi;
}
interface IStateRegister {
  stateRegis: GetEStateRegister | undefined;
  cancel: boolean | undefined;
}
function ManagerTicked({ customerId, lan, customerKey }: IProps) {
  const [list, setList] =
    useState<GetProfileTicketByCustomerIdQuery["getProfileByCustomerId"]>();
  const [profileShare, setProfileShare] =
    useState<GetProfileTicketByCustomerKeyQuery["getProfileByCustomerKey"]>();
  const [shareList, setShareList] = useState(false);
  const [stateRegis, setStateRegis] = useState<IStateRegister>({
    cancel: undefined,
    stateRegis: undefined,
  });
  // =================================================================
  const { refetch, data, loading, error } =
    useGetProfileTicketByCustomerIdQuery({
      fetchPolicy: "no-cache",
      variables: {
        input: customerId,
        cancel: stateRegis.cancel,
        stateRegis: stateRegis.stateRegis,
      },
    });
  const { data: dateShare, loading: loadingShare } =
    useGetProfileTicketByCustomerKeyQuery({
      fetchPolicy: "no-cache",
      variables: {
        customerKey: customerKey,
        cancel: stateRegis.cancel,
        stateRegis: stateRegis.stateRegis,
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
    if (dateShare?.getProfileByCustomerKey)
      setProfileShare(dateShare.getProfileByCustomerKey);
  }, [dateShare]);
  // useEffect(() => {
  useNProgress(false || loadingShare);
  // }, [loading, loadingShare]);

  // =================================================================
  const handleCancel = async (idRegis: string, idProfile: string) => {
    await cancelRegis({
      variables: {
        id: idRegis,
      },
    })
      .then(() => {
        showToast(lan.cancelledMess);
        if (!shareList)
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
        else
          setProfileShare((pre) =>
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

  const isCancel = (
    state: string,
    date: string,
    startTime: string
  ): boolean => {
    if (state !== GetEStateRegister.Pending) return false;
    const currentDate = new Date();
    const regisDate = new Date(date);
    const [regisHour, regisMinute] = startTime.split(":").map(Number);
    regisDate.setHours(regisHour);
    regisDate.setMinutes(regisMinute);

    const currentDateAfter12 = new Date(
      currentDate.getTime() + 12 * 60 * 60 * 1000
    );
    if (regisDate.getTime() < currentDateAfter12.getTime()) return false;
    return true;
  };
  // =================================================================
  return (
    <div className="py-3">
      <Row>
        <Col
          className="d-flex justify-content-between"
          md={{ span: 6, offset: 3 }}>
          {!shareList && list?.length === 0 && (
            <div>
              <h4 className="fw-bold">
                {lan.titleProfileNone}{" "}
                {(loading || loadingShare) && (
                  <Spinner size="sm" variant="primary" />
                )}{" "}
              </h4>
              <h5 className="fw-bold">{lan.titleProfileSay} ➕➕➕</h5>
            </div>
          )}
          {!shareList && list?.length !== 0 && (
            <div>
              <h4 className="fw-bold">
                {lan.titleProfile}
                {(loading || loadingShare) && (
                  <Spinner size="sm" variant="primary" />
                )}{" "}
              </h4>
            </div>
          )}
          {shareList && profileShare?.length === 0 && (
            <div>
              <h4 className="fw-bold">
                {lan.titleProfileShareNone}
                {(loading || loadingShare) && (
                  <Spinner size="sm" variant="primary" />
                )}{" "}
              </h4>
            </div>
          )}
          {shareList && profileShare?.length !== 0 && (
            <div>
              <h4 className="fw-bold">
                {lan.titleProfileShare}
                {(loading || loadingShare) && (
                  <Spinner size="sm" variant="primary" />
                )}{" "}
              </h4>
            </div>
          )}
          <Button
            active={shareList}
            className="ms-2"
            size="sm"
            variant="outline-success"
            onClick={() => setShareList((pre) => !pre)}>
            <FaRegShareFromSquare />
          </Button>
        </Col>

        <Col
          lg={{ span: 6, offset: 3 }}
          md={{ span: 8, offset: 2 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 12, offset: 0 }}>
          <div className="">
            {((shareList && profileShare && profileShare.length !== 0) ||
              (!shareList && list && list.length !== 0)) && (
              <div className="d-flex justify-content-evenly">
                <Button
                  className="rounded-pill"
                  variant="outline-primary"
                  active={
                    stateRegis.stateRegis === undefined &&
                    stateRegis.cancel === undefined
                  }
                  onClick={() =>
                    setStateRegis({
                      cancel: undefined,
                      stateRegis: undefined,
                    })
                  }
                  size="sm">
                  {lan.stateAll}
                </Button>
                <Button
                  className="rounded-pill"
                  variant="outline-success"
                  active={stateRegis?.stateRegis === GetEStateRegister.Success}
                  onClick={() =>
                    setStateRegis((p) => ({
                      cancel: undefined,
                      stateRegis:
                        p.stateRegis !== GetEStateRegister.Success
                          ? GetEStateRegister.Success
                          : undefined,
                    }))
                  }
                  size="sm">
                  {lan.stateSuccess}
                </Button>
                <Button
                  className="rounded-pill"
                  variant="outline-info"
                  active={stateRegis?.stateRegis === GetEStateRegister.Approved}
                  onClick={() =>
                    setStateRegis((p) => ({
                      cancel: undefined,
                      stateRegis:
                        p.stateRegis !== GetEStateRegister.Approved
                          ? GetEStateRegister.Approved
                          : undefined,
                    }))
                  }
                  size="sm">
                  {lan.stateApproved}
                </Button>
                <Button
                  className="rounded-pill"
                  variant="outline-warning"
                  active={stateRegis?.stateRegis === GetEStateRegister.Pending}
                  onClick={() =>
                    setStateRegis((p) => ({
                      cancel: undefined,
                      stateRegis:
                        p.stateRegis !== GetEStateRegister.Pending
                          ? GetEStateRegister.Pending
                          : undefined,
                    }))
                  }
                  size="sm">
                  {lan.statePending}
                </Button>
                <Button
                  className="rounded-pill"
                  variant="outline-danger"
                  active={stateRegis?.cancel}
                  onClick={() =>
                    setStateRegis((p) => ({
                      stateRegis:
                        (p.cancel === false && undefined) || p.stateRegis,
                      cancel: !p.cancel,
                    }))
                  }
                  size="sm">
                  {lan.stateCancel}
                </Button>
              </div>
            )}
            {!shareList && list && (
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
                                {regis.session.startTime}-
                                {regis.session.endTime}
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
                            <div className="d-flex justify-content-center ">
                              {!regis.cancel &&
                                isCancel(
                                  regis.state,
                                  regis.date,
                                  regis.session.startTime
                                ) && (
                                  <Button
                                    size="sm"
                                    className=""
                                    onClick={() =>
                                      handleCancel(regis.id, item.id)
                                    }
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
                  </Accordion.Item>
                ))}
              </Accordion>
            )}
            {shareList && (
              <Accordion>
                {profileShare?.map((item, i) => (
                  <Accordion.Item
                    eventKey={i.toString()}
                    key={i}
                    className="p-3 mt-3">
                    <Accordion.Header className="px-3 bg-light ">
                      <h5>
                        <strong className=" ms-2">
                          <span className="text-success">
                            {item.fullname} ({item.register?.length})
                            {(loading || loadingShare) && (
                              <Spinner size="sm" variant="info" />
                            )}{" "}
                          </span>
                          <br />
                          <i className="fs-6 text-warning ">
                            {lan.titleShare}:{item.customer?.fullname}{" "}
                          </i>
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
                                {regis.session.startTime}-
                                {regis.session.endTime}
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
                            <div className="d-flex justify-content-center ">
                              {!regis.cancel &&
                                isCancel(
                                  regis.state,
                                  regis.date,
                                  regis.session.startTime
                                ) && (
                                  <Button
                                    size="sm"
                                    className=""
                                    onClick={() =>
                                      handleCancel(regis.id, item.id)
                                    }
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
                  </Accordion.Item>
                ))}
              </Accordion>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default ManagerTicked;
