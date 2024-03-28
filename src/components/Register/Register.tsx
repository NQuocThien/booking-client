"use client";
import { Col, Container, Row } from "react-bootstrap";
import TypeOfServive from "./TypeOfService";
import { useEffect, useLayoutEffect, useReducer } from "react";
import {
  useGetListDoctorRegisInfoByFacilityIdLazyQuery,
  useGetListMedicalSpecialtyRegisInfoByFacilityIdLazyQuery,
  useGetListPackageRegisInfoByFacilityIdLazyQuery,
  useGetListVaccinationRegisInfoByFacilityIdLazyQuery,
  useGetMedicalFacilityRegisInfoByIdQuery,
} from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
// import RegisSpecialty from "./Spcialty/ListRegisSpcialty";
import {
  handleChangeServiceState,
  handleSetDoctors,
  handleSetFacility,
  handleSetPackages,
  handleSetSpecialties,
  handleSetVaccinations,
  initState,
  reducer,
} from "./reducer";
import InforRegis from "./InforRegis";
import RegisSpecialty from "./Spcialty/RegisSpecialty";
import useNProgress from "@/hooks/useNProgress";
import RegisDoctorCpn from "./Doctor/RegisDoctor";
import RegisPackageCpn from "./Package/RegisPackage";
import RegisVaccinationCpn from "./Vaccination/RegisVaccination";

interface IProps {
  facilityId: string;
  lan: typeof regisVi;
}
interface EServiceState {
  doctor: boolean | undefined;
  specialty: boolean | undefined;
  package: boolean | undefined;
  vaccination: boolean | undefined;
}

function Register(props: IProps) {
  const { facilityId, lan } = props;

  const [state, dispatch] = useReducer(reducer, initState);

  // =================================================================

  // =================================================================

  const { data: dataFacility, loading } =
    useGetMedicalFacilityRegisInfoByIdQuery({
      variables: {
        input: facilityId,
        isClient: true,
      },
    }); // thông tin tổng quan về csyt

  const [getDataSpecialty, { data: dataSpecialty, loading: loadingSpecialty }] =
    useGetListMedicalSpecialtyRegisInfoByFacilityIdLazyQuery(); //thông tin chuyên khoa của csyt

  const [getDataDoctor, { data: dataDoctors, loading: loadingDoctors }] =
    useGetListDoctorRegisInfoByFacilityIdLazyQuery(); //thông tin bác sỉ

  const [getDataPackage, { data: dataPackages, loading: loadingPackages }] =
    useGetListPackageRegisInfoByFacilityIdLazyQuery(); //thông tin gói khám

  const [
    getDataVaccinations,
    { data: dataVaccination, loading: loadingVaccination },
  ] = useGetListVaccinationRegisInfoByFacilityIdLazyQuery(); //thông tin gói khám

  // =================================================================
  useLayoutEffect(() => {
    if (dataFacility) {
      dispatch(handleSetFacility(dataFacility.getMedicalFacilityById));
      var serviceState: EServiceState = {
        doctor: undefined,
        specialty: undefined,
        package: undefined,
        vaccination: undefined,
      };
      if (dataFacility.getMedicalFacilityById.totalDoctors !== 0) {
        serviceState.doctor = false;
      }
      if (dataFacility.getMedicalFacilityById.totalPackages !== 0) {
        serviceState.package = false;
      }
      if (dataFacility.getMedicalFacilityById.totalSpecialties !== 0) {
        serviceState.specialty = false;
      }
      if (dataFacility.getMedicalFacilityById.totalVaccinations !== 0) {
        serviceState.vaccination = false;
      }
      dispatch(handleChangeServiceState(serviceState));
    }
  }, [dataFacility]);

  useEffect(() => {
    useNProgress(
      loading ||
        loadingSpecialty ||
        loadingDoctors ||
        loadingPackages ||
        loadingVaccination
    );
  }, [
    loading,
    loadingSpecialty,
    loadingDoctors,
    loadingPackages,
    loadingVaccination,
  ]);
  // ================== LOAD DATA =================
  useEffect(() => {
    // load thông tin theo trạng thái từ srvState
    if (state.svrState.specialty === true) {
      getDataSpecialty({
        variables: {
          input: facilityId,
          isClient: true,
        },
      });
    } else if (state.svrState.doctor === true) {
      getDataDoctor({
        variables: {
          input: facilityId,
          isClient: true,
        },
      });
    } else if (state.svrState.package === true) {
      getDataPackage({
        variables: {
          input: facilityId,
          isClient: true,
        },
      });
    } else if (state.svrState.vaccination === true) {
      getDataVaccinations({
        variables: {
          input: facilityId,
          isClient: true,
        },
      });
    }
  }, [state.svrState]);

  // ================== SET DATA =================
  useEffect(() => {
    if (dataDoctors && dataDoctors.getMedicalFacilityById.doctors) {
      dispatch(handleSetDoctors(dataDoctors.getMedicalFacilityById.doctors));
    }
  }, [dataDoctors]);

  useEffect(() => {
    if (dataPackages && dataPackages.getMedicalFacilityById.packages) {
      dispatch(handleSetPackages(dataPackages.getMedicalFacilityById.packages));
    }
  }, [dataPackages]);

  useEffect(() => {
    if (
      dataVaccination &&
      dataVaccination.getMedicalFacilityById.vaccinations
    ) {
      dispatch(
        handleSetVaccinations(
          dataVaccination.getMedicalFacilityById.vaccinations
        )
      );
    }
  }, [dataVaccination]);

  useEffect(() => {
    if (
      dataSpecialty &&
      dataSpecialty.getMedicalFacilityById.medicalSpecialties
    ) {
      dispatch(
        handleSetSpecialties(
          dataSpecialty.getMedicalFacilityById.medicalSpecialties
        )
      );
    }
  }, [dataSpecialty]);

  // =================================================================
  console.log("test State: ", state);
  return (
    <Container>
      {!(
        state.svrState.doctor ||
        state.svrState.package ||
        state.svrState.vaccination ||
        state.svrState.specialty
      ) && (
        <TypeOfServive
          onClick={(state) => {
            dispatch(handleChangeServiceState(state));
          }}
          srvState={state.svrState}
          lan={lan}
        />
      )}
      {(state.svrState.doctor ||
        state.svrState.package ||
        state.svrState.vaccination ||
        state.svrState.specialty) && (
        <Row className="service-main">
          <Col lg={2} md={12} className="infor p-2">
            <InforRegis lan={lan} state={state} />
          </Col>
          <Col lg={10} md={12} className="option py-2">
            {state.svrState.doctor && (
              <RegisDoctorCpn lan={lan} state={state} dispatch={dispatch} />
            )}
            {state.svrState.specialty && (
              <RegisSpecialty dispatch={dispatch} lan={lan} state={state} />
            )}
            {state.svrState.package && (
              <RegisPackageCpn dispatch={dispatch} lan={lan} state={state} />
            )}
            {state.svrState.vaccination && (
              <RegisVaccinationCpn
                dispatch={dispatch}
                lan={lan}
                state={state}
              />
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
export default Register;
