import {
  CreateEvaluateInput,
  ETypeOfService,
  Evaluate,
  GetRegisByIdQuery,
  UpdateEvaluateInput,
  useCreateEvaluateMutation,
  useGetEvaluateByRegisIdQuery,
  useGetRegisByIdQuery,
  useUpdateEvaluateMutation,
} from "@/graphql/webbooking-service.generated";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CiCalendarDate } from "react-icons/ci";
import {
  FaBriefcaseMedical,
  FaBuilding,
  FaCheck,
  FaPhone,
  FaRegClock,
} from "react-icons/fa";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { GiMedicalPackAlt, GiTriangleTarget } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineTransgender } from "react-icons/md";
import { SiStaffbase } from "react-icons/si";
import { formCustomerVi } from "@/locales/vi/Account";
import useNProgress from "@/hooks/useNProgress";
import { IoIosPricetag } from "react-icons/io";
import { formatDate, formatter } from "@/utils/tools";
import { SlCalender } from "react-icons/sl";
import CustomBreadcrumbs from "../subs/Breadcrumbs";
import { useRouter } from "next/navigation";
import ModalCpn from "../subs/Modal";
import RatingForm from "../subs/Rating";
import { getEnumValueTypeOfService } from "@/utils/getData";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { showToast } from "../subs/toast";
interface IProps {
  regisId: string;
  lan: typeof formCustomerVi;
}
function TicketDetail({ regisId, lan }: IProps) {
  const [regis, setRegis] = useState<GetRegisByIdQuery["getRegisById"]>();
  const router = useRouter();
  const inforUser = useSelector((state: RootState) => state.client.inforUser);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [evaluate, setEvaluate] = useState<Evaluate>();
  //================================================================
  const { data, loading, error } = useGetRegisByIdQuery({
    variables: {
      id: regisId,
    },
  });
  const {
    data: dataEvaluate,
    loading: loadingEvaluate,
    error: errorEvaluate,
  } = useGetEvaluateByRegisIdQuery({
    variables: {
      regisId: regisId,
    },
  });
  const [
    create,
    { data: created, loading: loadingCreated, error: errorCreated },
  ] = useCreateEvaluateMutation();
  const [
    update,
    { data: updated, loading: loadingUpdated, error: errorUpdated },
  ] = useUpdateEvaluateMutation();
  // ================================================================
  useEffect(() => {
    if (data) {
      setRegis(data.getRegisById);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      setEvaluate(dataEvaluate?.getEvaluateByRegisId);
    }
  }, [dataEvaluate]);
  useEffect(() => {
    useNProgress(
      loading || loadingEvaluate || loadingUpdated || loadingCreated
    );
  }, [loading, loadingEvaluate]);
  //================================================================

  const handleSubmit = async (rating: number, comment: string) => {
    setShowModal(false);
    if (evaluate) {
      if (regis && inforUser) {
        const input: UpdateEvaluateInput = {
          id: evaluate.id,
          comment: comment,
          rating: rating,
        };
        await update({ variables: { input: input } })
          .then((res) => {
            showToast("Đã sửa đánh giá");
            if (res.data) setEvaluate(res.data.updateEvaluate);
          })
          .catch((err) => {
            showToast("Có lỗi");
            console.log(err);
          });
      }
    } else {
      // create
      console.log("test rating: ", regis, inforUser);

      if (regis && inforUser?.customer) {
        const typeServie: ETypeOfService = getEnumValueTypeOfService(
          regis.typeOfService
        );
        const input: CreateEvaluateInput = {
          comment: comment,
          rating: rating,
          registerId: regisId,
          typeOfService: typeServie,
          userId: inforUser?.id,
          doctorId: regis.doctorId,
          packageId: regis.packageId,
          specialtyId: regis.specialtyId,
          vaccineId: regis.vaccineId,
          customerName: inforUser.customer?.fullname,
        };
        await create({ variables: { input: input } })
          .then((res) => {
            showToast("Đã thêm đánh giá");
            if (res.data) setEvaluate(res.data.createEvaluate);
          })
          .catch((err) => {
            showToast("Có lỗi");
            console.log(err);
          });
      }
    }
    if (!inforUser) showToast("Không có thông tin user");
  };
  return (
    <Container className="regis-detail">
      <CustomBreadcrumbs
        paths={[
          {
            label: lan.listRegis,
            url: "",
            onClick: () => {
              router.back();
            },
          },
          {
            label: lan.regisDetail,
            url: "",
          },
        ]}
      />
      <Row>
        <Col className="  my-3">
          <div className="infor-profile rounded p-3">
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <IoPersonCircleOutline />
                </span>
                {lan.titleFullname}:{" "}
                <span className="text-success ms-2">
                  {regis?.profile?.fullname}{" "}
                </span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <CiCalendarDate />
                </span>
                {lan.titleDateOfBirth}:
                <span className="text-info ms-2">
                  {regis?.profile?.dataOfBirth}
                </span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <FaPhone />
                </span>
                {lan.titlePhone}:
                <span className="text-info ms-2">
                  {regis?.profile?.numberPhone}
                </span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <MdOutlineEmail />
                </span>
                {lan.titleEmail}:
                <span className="text-info ms-2">{regis?.profile?.email}</span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <MdOutlineTransgender />
                </span>
                {lan.titleGender}:
                <span className="text-info ms-2">{regis?.profile?.gender}</span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <SiStaffbase />
                </span>
                {lan.titleJob}:
                <span className="text-info ms-2">{regis?.profile?.job}</span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <SiStaffbase />
                </span>
                {lan.titleIndentity}:
                <span className="text-info ms-2">
                  {regis?.profile?.identity}
                </span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <GiMedicalPackAlt />
                </span>
                {lan.titleMedicalInsurance}:
                <span className="text-info ms-2">
                  {regis?.profile?.medicalInsurance}
                </span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <FaPeopleGroup />
                </span>
                {lan.titleEthnic}:
                <span className="text-info ms-2">{regis?.profile?.ethnic}</span>
              </h6>
            </div>
            <div className="px-3">
              <h6>
                <span className="text-primary">
                  <FaPeopleGroup />
                </span>
                {lan.titleRelationship}:
                <span className="text-info ms-2">
                  {regis?.profile?.relationship}
                </span>
              </h6>
            </div>
          </div>
        </Col>
        <Col className="rounded my-3">
          <div className="bg-light border border-info p-3">
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
              <span className="text-dark ms-2">{regis?.typeOfService}</span>
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
              <span className="text-dark ms-2">
                {regis?.doctor?.price && formatter.format(regis?.doctor?.price)}
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
              <span className="text-dark ms-2">{formatDate(regis?.date)}</span>
            </h6>
            <h6>
              <span className="text-primary me-1">
                <FaRegClock />
              </span>
              <span className="text-dark ms-2">
                {regis?.session.startTime}-{regis?.session.endTime}
              </span>
            </h6>
            <h6>
              <span className="text-primary me-1">
                <FaCheck />
              </span>
              <span className="text-success ms-2 fw-bold">{regis?.state}</span>
            </h6>
            <div className="text-center">
              <Button
                onClick={() => setShowModal(true)}
                size="sm"
                variant="primary">
                {lan.modalRating}
              </Button>
            </div>
          </div>
          {regis?.files && (
            <div className="bg-light border border-info p-3 mt-2">
              <h5 className="text-primary">
                <i className="bi bi-paperclip"></i> {lan.listFile}
              </h5>
              <ul className="mt-2">
                {regis.files?.map((file, i) => (
                  <li key={i}>
                    <a href={file.url} target="_bank">
                      {i + 1}. {file.filename}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
      <ModalCpn
        handleClose={() => {
          setShowModal(false);
        }}
        handleSave={() => {}}
        headerText={lan.modalRating}
        openRequest={showModal}
        onlyClose
        buttonSize="sm">
        <div>
          <RatingForm
            commentRating={evaluate?.comment}
            star={evaluate?.rating}
            textComment={lan.comment}
            textRating={lan.star}
            onSubmit={handleSubmit}
          />
        </div>
      </ModalCpn>
    </Container>
  );
}
export default TicketDetail;
