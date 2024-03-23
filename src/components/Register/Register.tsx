"use client";
import { Col, Container, Row } from "react-bootstrap";
import TypeOfServive from "./TypeOfService";
import { useEffect, useLayoutEffect, useReducer } from "react";
import { EtypeService } from "@/assets/contains/emun";
import {
  useGetListMedicalSpecialtyRegisInfoByFacilityIdLazyQuery,
  useGetMedicalFacilityRegisInfoByIdQuery,
} from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
// import RegisSpecialty from "./Spcialty/ListRegisSpcialty";
import {
  handleChangeServiceState,
  handleSetRegisSpecialty,
  handleSetSpecialties,
  initState,
  reducer,
} from "./reducer";
import InforRegis from "./InforRegis";
import RegisSpecialty from "./Spcialty/RegisSpecialty";

interface IProps {
  facilityId: string;
  type: EtypeService | undefined;
  lan: typeof regisVi;
}
interface EServiceState {
  doctor: boolean | undefined;
  specialty: boolean | undefined;
  package: boolean | undefined;
  vaccination: boolean | undefined;
}

function Register(props: IProps) {
  const { facilityId, type, lan } = props;

  const [state, dispatch] = useReducer(reducer, initState);

  // =================================================================

  // =================================================================

  const { data: dataFacility, loading } =
    useGetMedicalFacilityRegisInfoByIdQuery({
      variables: {
        input: facilityId,
        isClient: true,
      },
    });
  const [getDataSpecialty, { data: dataSpecialty, loading: loadingSpecialty }] =
    useGetListMedicalSpecialtyRegisInfoByFacilityIdLazyQuery();
  // =================================================================
  useLayoutEffect(() => {
    if (dataFacility) {
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
    if (state.svrState.specialty === true) {
      getDataSpecialty({
        variables: {
          input: facilityId,
          isClient: true,
        },
      });
    }
  }, [state.svrState]);
  useEffect(() => {
    if (
      dataSpecialty &&
      dataSpecialty.getMedicalFacilityById.medicalSpecialties
    ) {
      console.log("Chang Specifically", dataSpecialty.getMedicalFacilityById);
      dispatch(
        handleSetSpecialties(
          dataSpecialty.getMedicalFacilityById.medicalSpecialties
        )
      );
    }
  }, [dataSpecialty]);
  // =================================================================

  const handleClickSpecialty = (specialtyId: string) => {
    dispatch(
      handleSetRegisSpecialty({
        ...state.regisSpecialty,
        specialtyId: specialtyId,
      })
    );
  };
  console.log("==> test State: ", state.svrState);
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
            console.log("click: ", state);
            dispatch(handleChangeServiceState(state));
            // setSvrState(state);
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
          <Col lg={2} md={2} className="infor p-2">
            <InforRegis
              lan={lan}
              facilityAddress={
                dataFacility?.getMedicalFacilityById.address || ""
              }
              facilityName={
                dataFacility?.getMedicalFacilityById.medicalFacilityName || ""
              }
            />
          </Col>
          <Col lg={10} md={10} className="option py-2">
            {state.svrState.doctor && <p>Bác sỉ</p>}
            {state.svrState.specialty && (
              <RegisSpecialty dispatch={dispatch} lan={lan} state={state} />
            )}
            {state.svrState.package && <h1>Gói khám</h1>}
            {state.svrState.vaccination && <h1>Vaccine</h1>}
          </Col>
        </Row>
      )}
    </Container>
  );
}
export default Register;
