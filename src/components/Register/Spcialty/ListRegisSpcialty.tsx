import { IPagination } from "@/assets/contains/item-interface";
import SearchInputCpn from "@/components/Filter/FilterSearch";
import SpecialtyDetailModal from "@/components/Specialty/SpecialtyDetailModal";
import PaginationCpn from "@/components/subs/Pagination";
import {
  MedicalSpecialties,
  useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery,
  useGetTotalMedicalSpecialtiesCountForClientQuery,
} from "@/graphql/webbooking-service.generated";
import useNProgress from "@/hooks/useNProgress";
import { regisVi } from "@/locales/vi/Facility";
import { store } from "@/redux/store/store";
import { getLabelDayOfWeek } from "@/utils/getData";
import { formatter } from "@/utils/tools";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

interface IProps {
  facilityId: string | undefined;
  lan: typeof regisVi;
  onClick: (specialty: MedicalSpecialties) => void;
  onBack: () => void;
}
interface IFilter {
  pagination: IPagination;
  search: string;
}
function ListRegisSpecialty(props: IProps) {
  const { lan, facilityId, onClick, onBack } = props;

  const [specialties, setSpecialties] = useState<MedicalSpecialties[]>([]);
  const [specialty, setSpecialty] = useState<MedicalSpecialties>();
  const [filter, setFilter] = useState<IFilter>({
    pagination: {
      current: 1,
      total: 1,
      limit: 10,
    },
    search: "",
  });
  const [modal, setModal] = useState(false);
  //================================================================

  const { data, loading, error } =
    useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery({
      variables: {
        facilityId: facilityId || "",
        limit: filter.pagination.limit || 10,
        page: filter.pagination.current,
        search: filter.search,
      },
    });

  const { data: dataTotal, loading: loadTotalData } =
    useGetTotalMedicalSpecialtiesCountForClientQuery({
      variables: {
        facilityId: facilityId || "",
        search: filter.search,
      },
    });
  //================================================================

  useEffect(() => {
    if (data) {
      setSpecialties(
        data.getAllMedicalSpecialtiesPaginationOfFacilityForClient
      );
    }
  }, [data]);

  useEffect(() => {
    if (dataTotal) {
      setFilter((pre) => ({
        ...pre,
        pagination: {
          ...pre.pagination,
          total: dataTotal.getTotalMedicalSpecialtiesCountForClient,
        },
      }));
    }
  }, [dataTotal]);

  // useEffect(() => {
  useNProgress(loading || loadTotalData);
  // }, [loading, loadTotalData]);

  //================================================================

  const handleClickDetail = (specialty: MedicalSpecialties) => {
    setSpecialty(specialty);
    setModal(true);
  };
  return (
    <div>
      <h4 className="text-primary fw-bold text-center py-3">
        {lan.titleSpecialties}
      </h4>
      <SearchInputCpn
        onSearch={(s) => {
          setFilter((pre) => ({ ...pre, search: s }));
        }}
      />
      {specialties && (
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
            {specialties.map((specialty, i) => (
              <tr key={i}>
                <td className="d-none d-md-table-cell">{i + 1}</td>
                <td>
                  <div>
                    <h6 className="text-primary">{specialty.specialtyName}</h6>
                    <p>
                      {lan.lableSchedule}: {lan.labelDayOfWeek}{" "}
                      {specialty.workSchedule?.schedule.map((s, i) => (
                        <span key={i}>
                          {(specialty.workSchedule?.schedule &&
                            specialty.workSchedule?.schedule.length - 1 === i &&
                            getLabelDayOfWeek(
                              s.dayOfWeek,
                              store.getState().client.language.code as
                                | "vn"
                                | "us"
                            )) ||
                            `${getLabelDayOfWeek(
                              s.dayOfWeek,
                              store.getState().client.language.code as
                                | "vn"
                                | "us"
                            )}, `}
                        </span>
                      ))}
                    </p>
                    <div className="d-block d-md-none">
                      {lan.headPrice}: {formatter.format(specialty.price)}
                    </div>
                  </div>
                </td>
                <td className="align-middle d-none d-md-table-cell">
                  {formatter.format(specialty.price)}
                </td>
                <td className="p-3 align-middle">
                  <Button
                    size="sm"
                    className="me-3 mb-1"
                    onClick={() => {
                      onClick(specialty);
                    }}>
                    {lan.btnBooking}
                  </Button>
                  <Button
                    onClick={() => handleClickDetail(specialty)}
                    size="sm"
                    variant="outline-info">
                    {lan.btnDetail}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <div className="d-flex justify-content-center ">
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
      <SpecialtyDetailModal
        open={modal}
        lan={lan}
        onClose={() => setModal(false)}
        specialty={specialty}
      />
    </div>
  );
}
export default ListRegisSpecialty;
