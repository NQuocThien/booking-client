import { IPagination } from "@/assets/contains/item-interface";
import SearchInputCpn from "@/components/Filter/FilterSearch";
import PaginationCpn from "@/components/subs/Pagination";
import {
  Vaccination,
  useGetAllVaccinationPaginationOfFacilityForClientQuery,
  useGetTotalVaccinationsCountForClientQuery,
} from "@/graphql/webbooking-service.generated";
import useNProgress from "@/hooks/useNProgress";
import { regisVi } from "@/locales/vi/Facility";
import { formatter } from "@/utils/tools";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

interface IProps {
  // vaccinations: Vaccination[];
  facilityId: string | undefined;
  lan: typeof regisVi;
  onClick: (vaccine: Vaccination) => void;
  onBack: () => void;
}

interface IFilter {
  pagination: IPagination;
  search: string;
}
function ListRegisVaccination(props: IProps) {
  const { facilityId, lan, onClick, onBack } = props;

  const [vaccines, setvaccines] = useState<Vaccination[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    pagination: {
      current: 1,
      total: 1,
      limit: 10,
    },
    search: "",
  });
  // =================================================================
  const { data, loading } =
    useGetAllVaccinationPaginationOfFacilityForClientQuery({
      variables: {
        facilityId: facilityId || "",
        limit: filter.pagination.limit || 10,
        page: filter.pagination.current,
        search: filter.search,
      },
    });

  const { data: dataTotal, loading: loadTotalData } =
    useGetTotalVaccinationsCountForClientQuery({
      variables: {
        facilityId: facilityId || "",
        search: filter.search,
      },
    });
  // =================================================================

  useEffect(() => {
    if (data) {
      setvaccines(data.getAllVaccinationPaginationOfFacilityForClient);
    }
  }, [data]);

  useEffect(() => {
    if (dataTotal) {
      setFilter((pre) => ({
        ...pre,
        pagination: {
          ...pre.pagination,
          total: dataTotal.getTotalVaccinationsCountForClient,
        },
      }));
    }
  }, [dataTotal]);

  useEffect(() => {
    useNProgress(loading || loadTotalData);
  }, [loading, loadTotalData]);

  console.log(vaccines);
  return (
    <div>
      <h4 className="text-primary text-center pt-3">{lan.titleVaccination}</h4>
      <SearchInputCpn
        onSearch={(s) => {
          setFilter((pre) => ({ ...pre, search: s }));
        }}
      />
      {vaccines && (
        <Table hover size="sm">
          <thead>
            <tr>
              <th className="d-none d-md-table-cell">#</th>
              <th>{lan.headServiceName}</th>
              <th className="d-none d-md-table-cell">{lan.headPrice}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine, i) => (
              <tr key={i}>
                <td className="d-none d-md-table-cell">{i + 1}</td>
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
                    <div className="d-block d-md-none">
                      {lan.headPrice}: {formatter.format(vaccine.price)}
                    </div>
                  </div>
                </td>
                <td className="d-none d-md-table-cell align-middle">
                  {formatter.format(vaccine.price)}
                </td>
                <td className="p-3 align-middle">
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
      <div className="d-flex justify-content-center">
        <PaginationCpn
          setPageActive={(page) => {
            setFilter((pre) => ({
              ...pre,
              pagination: {
                ...pre.pagination,
                current: page,
              },
            }));
          }}
          totalPage={
            (filter.pagination.limit &&
              Math.ceil(filter.pagination.total / filter.pagination.limit)) ||
            Math.ceil(filter.pagination.total / 10)
          }
        />
      </div>
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
