import { regisVi } from "@/locales/vi/Facility";
import {
  IActionRegis,
  IStateRegister,
  handleChangeServiceState,
  handleChangeSpecialty,
  handleSetRegisSpecialty,
} from "../reducer";
import ListRegisSpecialty from "./ListRegisSpcialty";
import { MedicalSpecialties } from "@/graphql/webbooking-service.generated";
import DateSession from "../DateSession/DateSession";
import ListProfile from "../DateSession/ListProfile";

interface IProps {
  lan: typeof regisVi;
  state: IStateRegister;
  dispatch: React.Dispatch<IActionRegis>;
}
function RegisSpecialty(props: IProps) {
  const { lan, state, dispatch } = props;
  const handleClickSpecialty = (specialty: MedicalSpecialties) => {
    dispatch(handleChangeSpecialty(specialty));
    dispatch(
      handleSetRegisSpecialty({
        ...state.regisSpecialty,
        specialtyId: specialty.id,
      })
    );
  };
  return (
    <div className="session px-2">
      {state.regisSpecialty.specialtyId === "" && (
        <ListRegisSpecialty
          onBack={() =>
            dispatch(
              handleChangeServiceState({
                ...state.svrState,
                specialty: false,
              })
            )
          }
          onClick={handleClickSpecialty}
          lan={lan}
          specialties={state.specialties}
        />
      )}
      {(state.regisSpecialty.specialtyId !== "" &&
        (state.regisSpecialty.date === "" ||
          state.regisSpecialty.session.startTime === "" ||
          state.regisSpecialty.session.endTime === "") && (
          <DateSession lan={lan} state={state} dispatch={dispatch} />
        )) || (
        <div>
          {state.regisSpecialty.specialtyId !== "" && (
            <ListProfile state={state} dispatch={dispatch} />
          )}
        </div>
      )}
    </div>
  );
}
export default RegisSpecialty;
