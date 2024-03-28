import { IPagination } from "@/assets/contains/item-interface";
import FilterDoctorShort from "@/components/Filter/FilterDoctorShort";
import PaginationCpn from "@/components/subs/Pagination";
import {
  Doctor,
  FilterDoctorInput,
  useGetAllDoctorPaginationOfFacilityForClientQuery,
  useGetTotalDoctorsCountForClientQuery,
} from "@/graphql/webbooking-service.generated";
import useNProgress from "@/hooks/useNProgress";
import { regisVi } from "@/locales/vi/Facility";
import { store } from "@/redux/store/store";
import { getLabelDayOfWeek } from "@/utils/getData";
import { formatter } from "@/utils/tools";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

interface IProps {
  // doctors: Doctor[];
  facilityId: string;
  lan: typeof regisVi;
  onClick: (doctor: Doctor) => void;
  onBack: () => void;
}

interface IFilter {
  filterDoctor: FilterDoctorInput;
  pagination: IPagination;
}

function ListRegisDoctor(props: IProps) {
  const { lan, onClick, onBack, facilityId } = props;

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    filterDoctor: {
      academicTitle: undefined,
      degree: undefined,
      doctorName: undefined,
      gender: undefined,
      specialistId: undefined,
    },
    pagination: {
      current: 1,
      total: 1,
      limit: 10,
    },
  });
  // =================================================================
  const { data, loading, error } =
    useGetAllDoctorPaginationOfFacilityForClientQuery({
      variables: {
        facilityId: facilityId,
        limit: filter.pagination.limit,
        page: filter.pagination.current,
        filter: filter.filterDoctor,
      },
    });
  console.log("filter: ", filter);
  const { data: dataTotal, loading: loadTotalData } =
    useGetTotalDoctorsCountForClientQuery({
      variables: {
        filter: filter.filterDoctor,
        facilityId: facilityId,
      },
    });
  // =================================================================
  useEffect(() => {
    if (data) setDoctors(data.getAllDoctorPaginationOfFacilityForClient);
  }, [data]);

  useEffect(() => {
    if (dataTotal)
      setFilter((pre) => ({
        ...pre,
        pagination: {
          ...pre.pagination,
          total: dataTotal?.getTotalDoctorsCountForClient,
        },
      }));
  }, [dataTotal]);

  useEffect(() => {
    useNProgress(loading || loadTotalData);
  }, [loading, loadTotalData]);
  // =================================================================
  const getSpecialties = (): { id: string; name: string }[] => {
    const specialties: { id: string; name: string }[] = [];
    doctors.map((doctor) => {
      if (doctor.specialty) {
        const tmp = specialties.find(
          (spec) => spec.id === doctor.specialty?.id
        );
        if (!tmp)
          specialties.push({
            id: doctor.specialty.id,
            name: doctor.specialty.specialtyName,
          });
      }
    });
    return specialties;
  };
  return (
    <div>
      <h4 className="text-primary text-center pt-3">{lan.titleDoctors}</h4>

      <FilterDoctorShort
        specialties={getSpecialties()}
        onChangeFilter={(filter) => {
          filter && setFilter((pre) => ({ ...pre, filterDoctor: filter }));
        }}
      />
      {doctors && (
        <Table hover size="sm" responsive>
          <thead>
            <tr>
              <th className="d-none d-md-table-cell">#</th>
              <th>{lan.headServiceName}</th>
              <th className="d-none d-md-table-cell">{lan.headPrice}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={i}>
                <td className="d-none d-md-table-cell">{i + 1}</td>
                <td>
                  <div>
                    <h6 className="text-primary">
                      <strong>{doctor.doctorName}</strong>
                    </h6>
                    <div>
                      {" "}
                      <i>
                        {doctor.academicTitle && `${doctor.academicTitle} /`}{" "}
                        {doctor.degree}
                      </i>{" "}
                    </div>

                    <p className="mb-1">
                      {lan.lableSchedule}: {lan.labelDayOfWeek}{" "}
                      {doctor.workSchedule?.schedule.map((s, i) => (
                        <span key={i}>
                          {(doctor.workSchedule?.schedule &&
                            doctor.workSchedule?.schedule.length - 1 === i &&
                            getLabelDayOfWeek(
                              s.dayOfWeek,
                              store.getState().client.language.code as
                                | "us"
                                | "vn"
                            )) ||
                            `${getLabelDayOfWeek(
                              s.dayOfWeek,
                              store.getState().client.language.code as
                                | "us"
                                | "vn"
                            )}, `}
                        </span>
                      ))}
                    </p>
                    {doctor.specialty?.specialtyName && (
                      <div className="">
                        {lan.headSpecialty}:
                        <span className="text-success ms-1">
                          {doctor.specialty?.specialtyName}
                        </span>
                      </div>
                    )}
                    <div className="d-block d-md-none">
                      {lan.headPrice}: {formatter.format(doctor.price)}
                    </div>
                  </div>
                </td>
                <td className="d-none d-md-table-cell align-middle ">
                  {formatter.format(doctor.price)}
                </td>
                <td className="align-middle">
                  <Button
                    size="sm"
                    className="me-3 mb-2"
                    onClick={() => {
                      onClick(doctor);
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
          totalPage={Math.ceil(
            filter.pagination?.limit
              ? filter.pagination.total / filter.pagination?.limit
              : 0
          )}
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
export default ListRegisDoctor;
