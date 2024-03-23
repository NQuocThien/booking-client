import { regisVi } from "@/locales/vi/Facility";
import { EServiceState } from "./TypeOfService";
import { Session } from "inspector";
import { SessionInput } from "@/graphql/webbooking-service.generated";

interface IProps {
  facilityName: string;
  facilityAddress: string;
  type?: EServiceState;
  serviceName?: string | undefined;
  date?: string | undefined;
  sessions?: SessionInput | undefined;
  lan: typeof regisVi;
}

function InforRegis(props: IProps) {
  const { facilityName, facilityAddress, type = undefined } = props;
  return (
    <div>
      <div>
        <i className="bi bi-building-fill"></i>
        <strong>{facilityName}</strong>
      </div>
      <div>
        <i className="bi bi-geo-alt"></i>
        <span>{facilityAddress}</span>
      </div>
    </div>
  );
}
export default InforRegis;
