import { IPagination } from "@/assets/contains/item-interface";
import SearchInputCpn from "@/components/Filter/FilterSearch";
import PackageDetailModal from "@/components/Package/PackageDetailModal";
import PaginationCpn from "@/components/subs/Pagination";
import {
  Package,
  useGetAllPackagePaginationOfFacilityForClientQuery,
  useGetTotalPackagesCountForClientQuery,
} from "@/graphql/webbooking-service.generated";
import useNProgress from "@/hooks/useNProgress";
import { regisVi } from "@/locales/vi/Facility";
import { formatter } from "@/utils/tools";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

interface IProps {
  facilityId: string | undefined;
  lan: typeof regisVi;
  onClick: (p: Package) => void;
  onBack: () => void;
}
interface IFilter {
  pagination: IPagination;
  search: string;
}
function ListRegisPackage(props: IProps) {
  const { facilityId, lan, onClick, onBack } = props;

  const [packages, setPackages] = useState<Package[]>([]);
  const [packageCare, setPackage] = useState<Package>();
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState<IFilter>({
    pagination: {
      current: 1,
      total: 1,
      limit: 10,
    },
    search: "",
  });
  // =================================================================
  const { data, loading } = useGetAllPackagePaginationOfFacilityForClientQuery({
    fetchPolicy: "no-cache",
    variables: {
      facilityId: facilityId || "",
      limit: filter.pagination.limit || 10,
      page: filter.pagination.current,
      search: filter.search,
    },
  });

  const { data: dataTotal, loading: loadTotalData } =
    useGetTotalPackagesCountForClientQuery({
      variables: {
        facilityId: facilityId || "",
        search: filter.search,
      },
    });
  // =================================================================

  useEffect(() => {
    if (data) {
      setPackages(data.getAllPackagePaginationOfFacilityForClient);
    }
  }, [data]);

  useEffect(() => {
    if (dataTotal) {
      setFilter((pre) => ({
        ...pre,
        pagination: {
          ...pre.pagination,
          total: dataTotal.getTotalPackagesCountForClient,
        },
      }));
    }
  }, [dataTotal]);

  // useEffect(() => {
  useNProgress(loading || loadTotalData);
  // }, [loading, loadTotalData]);
  // =================================================================
  const handleClickDetail = (p: Package) => {
    setPackage(p);
    setModal(true);
  };
  return (
    <div>
      <h4 className="text-primary text-center pt-3">{lan.titlePackage}</h4>
      <SearchInputCpn
        onSearch={(s) => {
          setFilter((pre) => ({ ...pre, search: s }));
        }}
      />
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
                  <Button
                    onClick={() => handleClickDetail(p)}
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
      <PackageDetailModal
        open={modal}
        lan={lan}
        onClose={() => setModal(false)}
        packageCare={packageCare}
      />
    </div>
  );
}
export default ListRegisPackage;
