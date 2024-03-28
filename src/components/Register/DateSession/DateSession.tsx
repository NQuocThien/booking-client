import DatePickerCpn from "@/components/subs/DatePicker";
import { regisVi } from "@/locales/vi/Facility";
import { Button, Row } from "react-bootstrap";
import { IActionRegis, IStateRegister } from "../reducer";
import { Session } from "@/graphql/webbooking-service.generated";
interface IProps {
  lan: typeof regisVi;
  state: IStateRegister;
  dispatch: React.Dispatch<IActionRegis>;
  filterDatePicker: (date: Date) => boolean;
  sessions: Session[];
  onChangeDate: (date: Date) => void;
  onClickSession: (session: Session) => void;
  onClickBack: () => void;
}
function DateSession(props: IProps) {
  const {
    lan,
    sessions,
    filterDatePicker,
    onChangeDate,
    onClickSession,
    onClickBack,
  } = props;

  return (
    <div className="">
      <h4 className="text-primary p-2">{lan.titleChooseDate}:</h4>
      <div className="d-flex justify-content-center">
        <DatePickerCpn filterDate={filterDatePicker} onChange={onChangeDate} />
      </div>
      <div className="">
        <h4 className="text-primary p-2">{lan.titleSession}</h4>
        <Row>
          <div className="px-5 my-3">
            {sessions.map((ss, i) => (
              <Button
                variant="outline-success"
                className="m-1"
                key={i}
                onClick={() => {
                  onClickSession(ss);
                }}>
                {ss.startTime} - {ss.endTime}
              </Button>
            ))}
          </div>
        </Row>
      </div>
      <div>
        <Button
          variant="light"
          onClick={() => {
            onClickBack();
          }}>
          <strong>
            <i className="bi bi-arrow-return-left me-2"></i>
          </strong>
          {lan.btnBack}
        </Button>
      </div>
    </div>
  );
}
export default DateSession;
