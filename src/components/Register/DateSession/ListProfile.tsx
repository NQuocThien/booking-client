import { IStateRegister } from "../reducer";
import { Button, Col, Row } from "react-bootstrap";
import {
  Profile,
  useGetProfileByCustomerIdQuery,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useLayoutEffect, useState } from "react";
import { formatDate } from "@/utils/tools";
import {
  FaBriefcaseMedical,
  FaBuilding,
  FaCheck,
  FaPhone,
} from "react-icons/fa";
import {
  MdAddLocation,
  MdOutlineEmail,
  MdOutlineTransgender,
} from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoLocationOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendarDate, CiClock2 } from "react-icons/ci";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import { formCustomerVi } from "@/locales/vi/Account";
import { formCustomerUs } from "@/locales/en/Account";
import useNProgress from "@/hooks/useNProgress";
import { useRouter } from "next/navigation";
import ModalCpn from "@/components/subs/Modal";
import { SiStaffbase } from "react-icons/si";
import { GiMedicalPackAlt } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
interface IProps {
  state: IStateRegister;
  onClickProfile: (profile: Profile) => void;
  onRegis: () => void;
  onBack: () => void;
}
function ListProfile(props: IProps) {
  const { state, onClickProfile, onRegis, onBack } = props;
  const router = useRouter();
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const infoUser = useSelector((state: RootState) => state.client.inforUser);
  // =================================================================
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [profile, setProfile] = useState<Profile>();
  const [modal, setModal] = useState<boolean>(false);
  // =================================================================
  const { data, loading, error } = useGetProfileByCustomerIdQuery({
    variables: {
      input: infoUser?.customer?.id || "",
    },
  });

  // =================================================================
  useLayoutEffect(() => {
    if (currentLan.code !== "vn") {
      setLan(formCustomerUs);
    } else setLan(formCustomerVi);
  }, [currentLan]);
  useEffect(() => {
    if (data?.getProfileByCustomerId) setProfiles(data.getProfileByCustomerId);
  }, [data]);
  useEffect(() => {
    useNProgress(loading);
  }, [loading]);
  // =================================================================

  const handleRegis = async () => {
    await onRegis();
  };

  const handleClickProfile = (profile: Profile) => {
    setProfile(profile);
    onClickProfile(profile);
    setModal(true);
  };
  return (
    <div className="profile">
      <h4 className="text-primary  text-center">{lan.titleProfile}</h4>
      <h4 className="text-primary text-center">{lan.subProfile}</h4>
      <div className="profile-list">
        {profiles.map((profile, i) => (
          <Row key={i} className=" p-3 mt-3 profile-item">
            <Col lg={10} md={10} sm={12} xs={12}>
              <div className="px-2">
                <h6>
                  <span className="text-primary me-1">
                    <IoPersonCircleOutline />
                  </span>
                  {lan.titleFullname}:{" "}
                  <strong className="text-success ms-2">
                    {profile.fullname}{" "}
                  </strong>
                </h6>
              </div>
              <div className="px-2">
                <h6>
                  <span className="text-primary me-1">
                    <CiCalendarDate />
                  </span>
                  {lan.titleDateOfBirth}:
                  <span className="text-info ms-2">
                    {formatDate(profile.dataOfBirth)}
                  </span>
                </h6>
              </div>
              <div className="px-2">
                <h6>
                  <span className="text-primary me-1">
                    <FaPhone />
                  </span>
                  {lan.titleFullname}:
                  <span className="text-info ms-2">{profile.numberPhone}</span>
                </h6>
              </div>
              <div className="px-2">
                <h6>
                  <span className="text-primary me-1">
                    <MdOutlineTransgender />
                  </span>
                  {lan.titleGender}:
                  <span className="text-info ms-2">{profile.gender}</span>
                </h6>
              </div>
              <div className="px-2">
                <h6>
                  <span className="text-primary me-1">
                    <MdAddLocation />
                  </span>
                  {lan.titleAddress}:
                  <span className="text-info ms-2">{profile.address}</span>
                </h6>
              </div>
              <div className="px-2">
                <h6>
                  <span className="text-primary me-1">
                    <FaPeopleGroup />
                  </span>
                  {lan.titleEthnic}:
                  <span className="text-info ms-2">{profile.ethnic}</span>
                </h6>
              </div>
            </Col>
            <Col
              lg={2}
              md={2}
              sm={12}
              xs={12}
              className="d-flex align-items-end justify-content-end">
              <div className="">
                <Button
                  variant="outline-success"
                  className="mx-1"
                  onClick={() => {
                    handleClickProfile(profile);
                  }}>
                  <strong>
                    <FaCheck />
                  </strong>
                </Button>
              </div>
            </Col>
          </Row>
        ))}
      </div>
      <div className="mt-2">
        <Button
          active
          variant="light"
          onClick={() => {
            onBack();
          }}>
          <strong>
            <i className="bi bi-arrow-return-left me-2"></i>
          </strong>
        </Button>
      </div>
      <ModalCpn
        handleSave={() => {
          handleRegis();
          setModal(false);
        }}
        handleClose={() => {
          setModal(false);
        }}
        textButtonSave={lan.modalBtnRegis}
        headerText={lan.modalHeaderRegis}
        openRequest={modal}>
        <div className="mt-3 ">
          {profile && (
            <>
              <h5 className="text-success">{lan.titleGeneralRegis}</h5>
              <div className="shadow-lg bg-light px-3 my-3 border-bottom border-secondary">
                <h5>
                  <span className="text-primary me-2">
                    <FaBuilding />
                  </span>

                  {state.facility?.medicalFacilityName}
                </h5>
                <h6>
                  <span className="text-primary me-2">
                    <IoLocationOutline />
                  </span>
                  {state.facility?.address}
                </h6>
                <h6>
                  <span className="text-primary me-2">
                    <FaBriefcaseMedical />
                  </span>

                  {state.svrState.specialty && state.specialty?.specialtyName}
                  {state.svrState.doctor &&
                    `${lan.subInfoDoctor}. ${state.doctor?.doctorName}`}
                  {state.svrState.vaccination && state.vaccination?.vaccineName}
                  {state.svrState.package && state.package?.packageName}
                </h6>
                <h6>
                  <span className="text-primary me-2">
                    <SlCalender />
                  </span>

                  {state.svrState.specialty &&
                    formatDate(state.regisSpecialty.date)}

                  {state.svrState.doctor && formatDate(state.regisDoctor.date)}

                  {state.svrState.package &&
                    formatDate(state.regisPackage.date)}

                  {state.svrState.vaccination &&
                    formatDate(state.regisVaccination.date)}
                </h6>
                <h6>
                  <span className="text-primary me-2">
                    <CiClock2 />
                  </span>
                  {state.svrState.specialty &&
                    state.regisSpecialty.session.startTime +
                      " - " +
                      state.regisSpecialty.session.endTime}

                  {state.svrState.doctor &&
                    state.regisDoctor.session.startTime +
                      " - " +
                      state.regisDoctor.session.endTime}

                  {state.svrState.package &&
                    state.regisPackage.session.startTime +
                      " - " +
                      state.regisPackage.session.endTime}

                  {state.svrState.vaccination &&
                    state.regisVaccination.session.startTime +
                      " - " +
                      state.regisVaccination.session.endTime}
                </h6>
              </div>
              <h5 className="text-success">{lan.titleProfileDetail}</h5>
              <div className="px-3 shadow-lg bg-light">
                <h6>
                  <span className="text-primary me-2">
                    <IoPersonCircleOutline />
                  </span>
                  {lan.titleFullname}:{" "}
                  <span className="text-success ms-2">{profile.fullname} </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <CiCalendarDate />
                  </span>
                  {lan.titleDateOfBirth}:
                  <span className="text-info ms-2">{profile.dataOfBirth}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <FaPhone />
                  </span>
                  {lan.titlePhone}:
                  <span className="text-info ms-2">{profile.numberPhone}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <MdOutlineEmail />
                  </span>
                  {lan.titleEmail}:
                  <span className="text-info ms-2">{profile.email}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <MdOutlineTransgender />
                  </span>
                  {lan.titleGender}:
                  <span className="text-info ms-2">{profile.gender}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <SiStaffbase />
                  </span>
                  {lan.titleJob}:
                  <span className="text-info ms-2">{profile.job}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <SiStaffbase />
                  </span>
                  {lan.titleIndentity}:
                  <span className="text-info ms-2">{profile.identity}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <GiMedicalPackAlt />
                  </span>
                  {lan.titleMedicalInsurance}:
                  <span className="text-info ms-2">
                    {profile.medicalInsurance}
                  </span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <FaPeopleGroup />
                  </span>
                  {lan.titleEthnic}:
                  <span className="text-info ms-2">{profile.ethnic}</span>
                </h6>
              </div>
              <div className="px-3">
                <h6>
                  <span className="text-primary me-2">
                    <FaPeopleGroup />
                  </span>
                  {lan.titleRelationship}:
                  <span className="text-info ms-2">{profile.relationship}</span>
                </h6>
              </div>
            </>
          )}
        </div>
      </ModalCpn>
    </div>
  );
}
export default ListProfile;
