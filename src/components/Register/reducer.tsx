import {
  CreateRegisterSpecialtyInput,
  MedicalSpecialties,
} from "@/graphql/webbooking-service.generated";

export interface EServiceState {
  doctor: boolean | undefined;
  specialty: boolean | undefined;
  package: boolean | undefined;
  vaccination: boolean | undefined;
}

export interface IStateRegister {
  svrState: EServiceState;
  specialties: MedicalSpecialties[];
  specialty: MedicalSpecialties | undefined;
  regisSpecialty: CreateRegisterSpecialtyInput;
}
export interface IActionRegis {
  type: string;
  payload: any;
}

// innitState
export const initState: IStateRegister = {
  svrState: {
    doctor: undefined,
    specialty: undefined,
    package: undefined,
    vaccination: undefined,
  },
  specialty: undefined,
  specialties: [],
  regisSpecialty: {
    specialtyId: "",
    date: "",
    isHealthInsurance: false,
    profileId: "",
    session: {
      endTime: "",
      startTime: "",
    },
  },
};

//actions
const HC_SERVICE_STATE = "hs-service-state";
const HS_MEDICAL_SPECIALTIES = "hs-medical-specialties";
const HS_REGIS_SPECIALTIES = "hs-regis-specialties";
const HC_SPECIALTY = "hs-specialty";
export const handleChangeServiceState = (
  value: EServiceState
): IActionRegis => {
  return {
    type: HC_SERVICE_STATE,
    payload: value,
  };
};
export const handleSetSpecialties = (
  value: MedicalSpecialties[]
): IActionRegis => {
  return {
    type: HS_MEDICAL_SPECIALTIES,
    payload: value,
  };
};
export const handleSetRegisSpecialty = (
  value: CreateRegisterSpecialtyInput
): IActionRegis => {
  return {
    type: HS_REGIS_SPECIALTIES,
    payload: value,
  };
};

export const handleChangeSpecialty = (
  value: MedicalSpecialties
): IActionRegis => {
  return {
    type: HC_SPECIALTY,
    payload: value,
  };
};

// reducer
export const reducer = (
  state: IStateRegister,
  action: IActionRegis
): IStateRegister => {
  switch (action.type) {
    case HC_SERVICE_STATE:
      return {
        ...state,
        svrState: action.payload,
      };

    case HS_MEDICAL_SPECIALTIES:
      return {
        ...state,
        specialties: action.payload,
      };
    case HS_REGIS_SPECIALTIES:
      return {
        ...state,
        regisSpecialty: action.payload,
      };
    case HC_SPECIALTY:
      return {
        ...state,
        specialty: action.payload,
      };

    default:
      return state;
  }
};
