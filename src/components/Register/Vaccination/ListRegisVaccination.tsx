import { Vaccination } from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
import { formatter } from "@/utils/tools";
import { Button, Table } from "react-bootstrap";

interface IProps {
  vaccinations: Vaccination[];
  lan: typeof regisVi;
  onClick: (vaccine: Vaccination) => void;
  onBack: () => void;
}

function ListRegisVaccination(props: IProps) {
  const { vaccinations, lan, onClick, onBack } = props;
  console.log(vaccinations);
  return (
    <div>
      <h4 className="text-primary text-center">{lan.titleSpecialties}</h4>
      {vaccinations && (
        <Table hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>{lan.headServiceName}</th>
              <th>{lan.headPrice}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vaccinations.map((vaccine, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div>
                    <h6 className="text-primary">{vaccine.vaccineName}</h6>
                    <p>
                      {lan.lableSchedule}: Thứ{" "}
                      {vaccine?.workSchedule?.schedule.map((s, i) => (
                        <span key={i}>
                          {(vaccine.workSchedule?.schedule &&
                            vaccine.workSchedule?.schedule.length - 1 === i &&
                            s.dayOfWeek) ||
                            `${s.dayOfWeek}, `}
                        </span>
                      ))}
                    </p>
                  </div>
                </td>
                <td>{formatter.format(vaccine.price)}</td>
                <td className="p-3">
                  <Button
                    size="sm"
                    className="me-3"
                    onClick={() => {
                      onClick(vaccine);
                    }}>
                    {lan.btnBooking}
                  </Button>
                  <Button size="sm" variant="outline-info">
                    {lan.btnDetail}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <div>
        <Button
          variant="light"
          onClick={() => {
            //   router.back();
            onBack();
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
export default ListRegisVaccination;
