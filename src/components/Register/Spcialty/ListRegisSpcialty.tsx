import { MedicalSpecialties } from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
import { formatter } from "@/utils/tools";
import { Button, Table } from "react-bootstrap";

interface IProps {
  specialties: MedicalSpecialties[];
  lan: typeof regisVi;
  onClick: (specialty: MedicalSpecialties) => void;
  onBack: () => void;
}

function ListRegisSpecialty(props: IProps) {
  const { specialties, lan, onClick, onBack } = props;

  return (
    <div>
      <h4 className="text-primary text-center">{lan.titleSpecialties}</h4>
      {specialties && (
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
            {specialties.map((specialty, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div>
                    <h6 className="text-primary">{specialty.specialtyName}</h6>
                    <p>
                      {lan.lableSchedule}: Thứ{" "}
                      {specialty.workSchedule?.schedule.map((s, i) => (
                        <span key={i}>
                          {(specialty.workSchedule?.schedule &&
                            specialty.workSchedule?.schedule.length - 1 === i &&
                            s.dayOfWeek) ||
                            `${s.dayOfWeek}, `}
                        </span>
                      ))}
                    </p>
                  </div>
                </td>
                <td>{formatter.format(specialty.price)}</td>
                <td className="p-3">
                  <Button
                    size="sm"
                    className="me-3"
                    onClick={() => {
                      onClick(specialty);
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
export default ListRegisSpecialty;
