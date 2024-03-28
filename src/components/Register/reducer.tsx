import {
  CreateRegisterDoctorInput,
  CreateRegisterPackageInput,
  CreateRegisterSpecialtyInput,
  CreateRegisterVaccineInput,
  Doctor,
  MedicalFacilities,
  MedicalSpecialties,
  Package,
  Vaccination,
} from "@/graphql/webbooking-service.generated";

export interface EServiceState {
  doctor: boolean | undefined;
  specialty: boolean | undefined;
  package: boolean | undefined;
  vaccination: boolean | undefined;
}

export interface IStateRegister {
  svrState: EServiceState;
  facility: MedicalFacilities | undefined;
  // ----- SPECIALTY -----
  specialties: MedicalSpecialties[];
  specialty: MedicalSpecialties | undefined;
  regisSpecialty: CreateRegisterSpecialtyInput;
  // ----- DOCTOR -----
  doctors: Doctor[];
  doctor: MedicalSpecialties | undefined;
  regisDoctor: CreateRegisterDoctorInput;

  // ----- PACKAGE -----
  packages: Package[];
  package: Package | undefined;
  regisPackage: CreateRegisterPackageInput;

  // ----- VACCINATION -----
  vaccinations: Vaccination[];
  vaccination: Vaccination | undefined;
  regisVaccination: CreateRegisterVaccineInput;
}
export interface IActionRegis {
  type: string;
  payload: any;
}

// =================== INIT STATE ============================

export const initState: IStateRegister = {
  svrState: {
    doctor: undefined,
    specialty: undefined,
    package: undefined,
    vaccination: undefined,
  },
  facility: undefined,
  specialty: undefined,
  specialties: [],
  regisSpecialty: {
    specialtyId: "",
    date: "",
    profileId: "",
    session: {
      endTime: "",
      startTime: "",
    },
  },

  doctor: undefined,
  doctors: [],
  regisDoctor: {
    date: "",
    doctorId: "",
    profileId: "",
    session: {
      startTime: "",
      endTime: "",
    },
  },

  package: undefined,
  packages: [],
  regisPackage: {
    date: "",
    packageId: "",
    profileId: "",
    session: {
      startTime: "",
      endTime: "",
    },
  },

  vaccination: undefined,
  vaccinations: [],
  regisVaccination: {
    date: "",
    vaccineId: "",
    profileId: "",
    session: {
      startTime: "",
      endTime: "",
    },
  },
};

const HC_SERVICE_STATE = "hs-service-state";
const HS_FACILITY = "hs-facility";
const HS_MEDICAL_SPECIALTIES = "hs-medical-specialties";
const HS_REGIS_SPECIALTIES = "hs-regis-specialties";
const HC_SPECIALTY = "hs-specialty";

const HS_DOCTORS = "hs-doctors";
const HS_REGIS_DOCTOR = "hs-regis-doctor";
const HC_DOCTOR = "hs-doctor";

const HS_PACKAGES = "hs-packages";
const HS_REGIS_PACKAGE = "hs-regis-package";
const HC_PACKAGE = "hs-package";

const HS_VACCINATIONS = "hs-vaccinations";
const HS_REGIS_VACCINATION = "hs-regis-vaccination";
const HC_VACCINATION = "hs-vaccination";

// =================== ACTION ============================

export const handleChangeServiceState = (
  value: EServiceState
): IActionRegis => {
  return {
    type: HC_SERVICE_STATE,
    payload: value,
  };
};
export const handleSetFacility = (value: MedicalFacilities): IActionRegis => {
  return {
    type: HS_FACILITY,
    payload: value,
  };
};
// ------ SPECIALTY -------

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

// ------ DOCTOR -------

export const handleSetDoctors = (value: Doctor[]): IActionRegis => {
  return {
    type: HS_DOCTORS,
    payload: value,
  };
};
export const handleSetRegisDoctor = (
  value: CreateRegisterDoctorInput
): IActionRegis => {
  return {
    type: HS_REGIS_DOCTOR,
    payload: value,
  };
};

export const handleChangeDoctor = (value: Doctor): IActionRegis => {
  return {
    type: HC_DOCTOR,
    payload: value,
  };
};

// ------ PACKAGE -------

export const handleSetPackages = (value: Package[]): IActionRegis => {
  return {
    type: HS_PACKAGES,
    payload: value,
  };
};
export const handleSetRegisPackage = (
  value: CreateRegisterPackageInput
): IActionRegis => {
  return {
    type: HS_REGIS_PACKAGE,
    payload: value,
  };
};
export const handleChangePackage = (value: Package): IActionRegis => {
  return {
    type: HC_PACKAGE,
    payload: value,
  };
};
// ------ VACCINATION -------

export const handleSetVaccinations = (value: Vaccination[]): IActionRegis => {
  console.log(" vaccinations:");

  return {
    type: HS_VACCINATIONS,
    payload: value,
  };
};
export const handleSetRegisVaccination = (
  value: CreateRegisterVaccineInput
): IActionRegis => {
  return {
    type: HS_REGIS_VACCINATION,
    payload: value,
  };
};

export const handleChangeVaccination = (value: Vaccination): IActionRegis => {
  return {
    type: HC_VACCINATION,
    payload: value,
  };
};

// =================== REDUCER ============================
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
    case HS_FACILITY:
      return {
        ...state,
        facility: action.payload,
      };
    // -------- SPECIALTY --------
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

    // -------- DOCTOR --------
    case HS_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    case HS_REGIS_DOCTOR:
      return {
        ...state,
        regisDoctor: action.payload,
      };
    case HC_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };

    // -------- PACKAGE --------
    case HS_PACKAGES:
      return {
        ...state,
        packages: action.payload,
      };
    case HS_REGIS_PACKAGE:
      return {
        ...state,
        regisPackage: action.payload,
      };
    case HC_PACKAGE:
      return {
        ...state,
        package: action.payload,
      };

    // -------- VACCINATION --------
    case HS_VACCINATIONS:
      return {
        ...state,
        vaccinations: action.payload,
      };
    case HS_REGIS_VACCINATION:
      return {
        ...state,
        regisVaccination: action.payload,
      };
    case HC_VACCINATION:
      return {
        ...state,
        vaccination: action.payload,
      };

    default:
      return state;
  }
};
