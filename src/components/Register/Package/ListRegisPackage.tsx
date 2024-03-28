import { Package } from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
import { formatter } from "@/utils/tools";
import { Button, Table } from "react-bootstrap";

interface IProps {
  packages: Package[];
  lan: typeof regisVi;
  onClick: (p: Package) => void;
  onBack: () => void;
}

function ListRegisPackage(props: IProps) {
  const { packages, lan, onClick, onBack } = props;

  return (
    <div>
      <h4 className="text-primary text-center">{lan.titleSpecialties}</h4>
      {packages && (
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
            {packages.map((p, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <div>
                    <h6 className="text-primary">{p.packageName}</h6>
                    <p>
                      {lan.lableSchedule}: Thứ{" "}
                      {p?.workSchedule?.schedule.map((s, i) => (
                        <span key={i}>
                          {(p.workSchedule?.schedule &&
                            p.workSchedule?.schedule.length - 1 === i &&
                            s.dayOfWeek) ||
                            `${s.dayOfWeek}, `}
                        </span>
                      ))}
                    </p>
                  </div>
                </td>
                <td>{formatter.format(p.price)}</td>
                <td className="p-3">
                  <Button
                    size="sm"
                    className="me-3"
                    onClick={() => {
                      onClick(p);
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
export default ListRegisPackage;
