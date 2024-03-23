import DatePickerCpn from "@/components/subs/DatePicker";
import {
  EDayOfWeed,
  EStateRegister,
  ScheduleInput,
  SessionInput,
} from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
import { Button, Row } from "react-bootstrap";
import {
  IActionRegis,
  IStateRegister,
  handleSetRegisSpecialty,
} from "../reducer";
import { useEffect, useState } from "react";
import { getEnumValueDayOfWeek } from "@/utils/getData";
interface IProps {
  lan: typeof regisVi;
  state: IStateRegister;
  dispatch: React.Dispatch<IActionRegis>;
}
function DateSession(props: IProps) {
  const { lan, state, dispatch } = props;

  const [schedule, setSchedule] = useState<ScheduleInput>();
  const [listSchedule, setListSchedule] = useState<ScheduleInput[]>([]);

  useEffect(() => {
    if (state.specialty?.workSchedule) {
      const schedulesInput: ScheduleInput[] =
        state.specialty?.workSchedule.schedule.map((s) => ({
          ...s,
          dayOfWeek: getEnumValueDayOfWeek(s.dayOfWeek),
        }));

      setListSchedule(schedulesInput);
    }
  }, [state.specialty?.workSchedule]);

  const filterWeekdays = (date: Date): boolean => {
    const day = date.getDay();
    var dayOfWeek: string;
    switch (day) {
      case 0:
        dayOfWeek = "Chủ nhật";
        break;
      case 1:
        dayOfWeek = "2";
        break;
      case 2:
        dayOfWeek = "3";
        break;
      case 3:
        dayOfWeek = "4";
        break;
      case 4:
        dayOfWeek = "5";
        break;
      case 5:
        dayOfWeek = "6";
        break;
      case 6:
        dayOfWeek = "7";
        break;
      default:
        dayOfWeek = "";
    }
    const find = state.specialty?.workSchedule?.schedule?.findIndex(
      (item) => item.dayOfWeek === dayOfWeek
    );
    return find !== -1 ? true : false;
  };

  const handleChangeDatePicker = (date: Date) => {
    dispatch(
      handleSetRegisSpecialty({
        ...state.regisSpecialty,
        date: date,
      })
    );
    switch (date.getDay()) {
      case 0:
        setSchedule(() =>
          listSchedule?.find((item) => item.dayOfWeek === EDayOfWeed.Sunday)
        );
        break;
      case 1:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Monday));
        break;
      case 2:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Tuesday));
        break;
      case 3:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Wednesday));
        break;
      case 4:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Thursday));
        break;
      case 5:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Friday));
        break;
      case 6:
        setSchedule(() => listSchedule?.find((item) => EDayOfWeed.Saturday));
        break;
    }
  };
  return (
    <div className="">
      <h4 className="text-primary p-2">{lan.titleChooseDate}:</h4>
      <div className="d-flex justify-content-center">
        <DatePickerCpn
          filterDate={filterWeekdays}
          onChange={handleChangeDatePicker}
        />
      </div>
      <div className="">
        {/* <DatePickerCpn filterDate={filterWeekdays} onChange={(date) => {}} /> */}
        <h4 className="text-primary p-2">{lan.titleSession}</h4>
        <Row>
          <div className="px-5 my-3">
            {schedule?.sessions.map((ss, i) => (
              <Button
                variant="outline-success"
                className="m-1"
                key={i}
                onClick={() => {
                  dispatch(
                    handleSetRegisSpecialty({
                      ...state.regisSpecialty,
                      session: {
                        startTime: ss.startTime,
                        endTime: ss.endTime,
                      } as SessionInput,
                    })
                  );
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
            dispatch(
              handleSetRegisSpecialty({
                ...state.regisSpecialty,
                specialtyId: "",
              })
            );
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
