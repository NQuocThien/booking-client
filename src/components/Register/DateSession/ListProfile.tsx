import {
  IActionRegis,
  IStateRegister,
  handleSetRegisSpecialty,
} from "../reducer";
import { Button, Col, Row } from "react-bootstrap";
import {
  Profile,
  useCreateRegisterMedicalSpecialtyMutation,
  useGetProfileByCustomerIdQuery,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useLayoutEffect, useState } from "react";
import { formatDate } from "@/utils/tools";
import { FaCheck, FaPhone } from "react-icons/fa";
import { MdAddLocation, MdOutlineTransgender } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import { formCustomerVi } from "@/locales/vi/Account";
import { formCustomerUs } from "@/locales/en/Account";
import useNProgress from "@/hooks/useNProgress";
import { showToast } from "@/components/subs/toast";
import { useRouter } from "next/navigation";
interface IProps {
  state: IStateRegister;
  dispatch: React.Dispatch<IActionRegis>;
}
function ListProfile(props: IProps) {
  const { state, dispatch } = props;
  const router = useRouter();
  const [lan, setLan] = useState(formCustomerVi);
  const currentLan = useSelector((state: RootState) => state.client.language);
  const infoUser = useSelector((state: RootState) => state.client.inforUser);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { data, loading, error } = useGetProfileByCustomerIdQuery({
    variables: {
      input: infoUser?.customer?.id || "",
    },
  });

  const [regisSpecialty, { loading: loadingRegisSpecialty }] =
    useCreateRegisterMedicalSpecialtyMutation();
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
    useNProgress(loading || loadingRegisSpecialty);
  }, [loading, loadingRegisSpecialty]);
  // =================================================================

  const handleRegis = async () => {
    if (state.svrState.specialty === true) {
      await regisSpecialty({
        variables: {
          input: state.regisSpecialty,
        },
      })
        .then(() => {
          showToast(lan.messRegisSuccess);
          router.push("/");
        })
        .catch((e) => {
          showToast(lan.messRegisError);
          console.log(e);
        });
    }
  };
  return (
    <div className="profile">
      <h4 className="text-primary text-center">{lan.titleProfile}</h4>
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
                    dispatch(
                      handleSetRegisSpecialty({
                        ...state.regisSpecialty,
                        profileId: profile.id,
                      })
                    );
                    handleRegis();
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
            dispatch(
              handleSetRegisSpecialty({
                ...state.regisSpecialty,
                date: "",
                session: {
                  endTime: "",
                  startTime: "",
                },
              })
            );
          }}>
          <strong>
            <i className="bi bi-arrow-return-left me-2"></i>
          </strong>
        </Button>
      </div>
    </div>
  );
}
export default ListProfile;
