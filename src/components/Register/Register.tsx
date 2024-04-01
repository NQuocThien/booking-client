"use client";
import { Col, Container, Row } from "react-bootstrap";
import TypeOfServive from "./TypeOfService";
import { useEffect, useLayoutEffect, useReducer } from "react";
import { useGetMedicalFacilityRegisInfoByIdQuery } from "@/graphql/webbooking-service.generated";
import { regisVi } from "@/locales/vi/Facility";
// import RegisSpecialty from "./Spcialty/ListRegisSpcialty";
import {
  handleChangeServiceState,
  handleSetFacility,
  initState,
  reducer,
} from "./reducer";
import InforRegis from "./InforRegis";
import RegisSpecialty from "./Spcialty/RegisSpecialty";
import useNProgress from "@/hooks/useNProgress";
import RegisDoctorCpn from "./Doctor/RegisDoctor";
import RegisPackageCpn from "./Package/RegisPackage";
import RegisVaccinationCpn from "./Vaccination/RegisVaccination";
import { ETypeOfService } from "@/assets/contains/emun";

interface IProps {
  facilityId: string;
  lan: typeof regisVi;
  typeOfService?: ETypeOfService;
}
interface EServiceState {
  doctor: boolean | undefined;
  specialty: boolean | undefined;
  package: boolean | undefined;
  vaccination: boolean | undefined;
}

function Register(props: IProps) {
  const { facilityId, lan, typeOfService = undefined } = props;

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
  useLayoutEffect(() => {
    if (dataFacility) {
      dispatch(handleSetFacility(dataFacility.getMedicalFacilityById));
      if (typeOfService === undefined) {
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
      } else {
        var serviceState: EServiceState = {
          doctor: undefined,
          specialty: undefined,
          package: undefined,
          vaccination: undefined,
        };
        if (typeOfService === ETypeOfService.Doctor) {
          serviceState.doctor = true;
        } else if (typeOfService === ETypeOfService.Package) {
          serviceState.package = true;
        } else if (typeOfService === ETypeOfService.Specialty) {
          serviceState.specialty = true;
        } else if (typeOfService === ETypeOfService.Vaccine) {
          serviceState.vaccination = true;
        }
        dispatch(handleChangeServiceState(serviceState));
      }
    }
  }, [dataFacility]);
  // =================================================================

  useEffect(() => {
    useNProgress(loading);
  }, [loading]);

  // =================================================================
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
