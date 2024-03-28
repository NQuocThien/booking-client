import { regisVi } from "@/locales/vi/Facility";
import { EServiceState } from "./TypeOfService";
import { Session } from "inspector";
import { SessionInput } from "@/graphql/webbooking-service.generated";
import { IStateRegister } from "./reducer";
import { GiTargeted } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { CiMedicalCross } from "react-icons/ci";
import { formatDate } from "@/utils/tools";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

interface IProps {
  // facilityName: string;
  // facilityAddress: string;
  // type?: EServiceState;
  // serviceName?: string | undefined;
  // date?: string | undefined;
  // sessions?: SessionInput | undefined;
  state: IStateRegister;
  lan: typeof regisVi;
}

function InforRegis(props: IProps) {
  const { state, lan } = props;
  return (
    <div>
      <div className="mb-1">
        <i className="bi bi-building-fill text-primary mb-2"></i>
        <strong className="ms-1">{state.facility?.medicalFacilityName}</strong>
      </div>
      <div>
        <i className="bi bi-geo-alt text-success"></i>
        <i className="ms-1">{state.facility?.address}</i>
      </div>
      {state.svrState.doctor === true && (
        <div>
          <GiTargeted className="text-success" />
          <span className="ms-1">{lan.svrDoctor}</span>
        </div>
      )}
      {state.svrState.package === true && (
        <div>
          <GiTargeted className="text-success" />
          <span className="ms-1">{lan.svrPackage}</span>
        </div>
      )}
      {state.svrState.specialty === true && (
        <div>
          <GiTargeted className="text-success" />
          <span className="ms-1">{lan.svrSpecialty}</span>
        </div>
      )}
      {state.svrState.vaccination === true && (
        <div>
          <GiTargeted className="text-success" />
          <span className="ms-1">{lan.svrVaccine}</span>
        </div>
      )}
      {state.regisSpecialty.specialtyId !== "" &&
        state.specialty?.specialtyName && (
          <div>
            <CiMedicalCross className="text-success" />
            <span className="ms-1">{state.specialty?.specialtyName}</span>
          </div>
        )}

      {state.regisSpecialty.date !== "" && (
        <div>
          <FaCalendarAlt className="text-success" />
          <span className="ms-1">{formatDate(state.regisSpecialty.date)}</span>
        </div>
      )}
      {state.regisSpecialty.session.startTime !== "" && (
        <div>
          <FaRegClock className="text-success" />
          <span className="ms-1">
            {state.regisSpecialty.session.startTime} -{" "}
            {state.regisSpecialty.session.endTime}
          </span>
        </div>
      )}
    </div>
  );
}
export default InforRegis;
