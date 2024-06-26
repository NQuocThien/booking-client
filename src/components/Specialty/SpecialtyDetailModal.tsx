import {
  Evaluate,
  MedicalSpecialties,
  useGetEvaluateByOptionQuery,
} from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
import ModalCpn from "../subs/Modal";
import { Container, Row, Spinner } from "react-bootstrap";
import { formatter } from "@/utils/tools";
import { IoIosPricetags } from "react-icons/io";
import { getSchedule } from "@/utils/getData";
import { store } from "@/redux/store/store";
import { GrSchedules } from "react-icons/gr";
import { useEffect, useState } from "react";
import ListEvaluate from "../subs/ListEvaluate";
interface IProp {
  lan: typeof regisVi;
  open: boolean;
  onClose: () => void;
  specialty: MedicalSpecialties | undefined;
}
function SpecialtyDetailModal(props: IProp) {
  const { lan, specialty, onClose, open } = props;
  const [evaluate, setEvaluate] = useState<Evaluate[]>([]);

  const { data, loading } = useGetEvaluateByOptionQuery({
    variables: {
      input: {
        specialtyId: specialty?.id || "",
      },
    },
  });
  useEffect(() => {
    if (data?.getEvaluateByOption) setEvaluate(data.getEvaluateByOption);
  }, [data]);

  // =================================================================

  return (
    <ModalCpn
      buttonSize="sm"
      headerText={`${lan.modalSpecialtyHead} "${specialty?.specialtyName}"`}
      handleClose={onClose}
      handleSave={() => {}}
      openRequest={open}
      onlyClose>
      <Container fluid className="facility-detail mt-2 ">
        <Row className="detail ">
          <Row className={`p-2`}>
            <div className="general-info p-2">
              <h4 className="text-primary mt-2">{specialty?.specialtyName}</h4>
              <div className="">
                <IoIosPricetags className="text-success me-1" />
                <span>
                  {specialty?.price && formatter.format(specialty?.price)}
                </span>
              </div>
              <div className="">
                <GrSchedules className="text-primary me-1" />
                <span>
                  {lan.labelDayOfWeek}:
                  {getSchedule(
                    specialty?.workSchedule?.schedule,
                    store.getState().client.language.code as "vn" | "us"
                  )}
                </span>
              </div>
            </div>
          </Row>
        </Row>
        <Row>
          <div className="discription my-3 p-2">
            <p>{lan.modalSpecialtyDiscription}</p>
            <span> {specialty?.discription}</span>
          </div>
        </Row>
        <Row>
          <div>
            {lan.rating} {loading && <Spinner size="sm" variant="primary" />}
          </div>
          <ListEvaluate list={evaluate} />{" "}
        </Row>
      </Container>
    </ModalCpn>
  );
}
export default SpecialtyDetailModal;
