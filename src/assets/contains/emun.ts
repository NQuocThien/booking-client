import { Language } from "./item-interface";

export enum Evariant {
  danger = "danger",
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  info = "info",
  light = "light",
  dark = "dark",
}

export const languages: Language[] = [
  { code: "vn", name: "Tiếng việt" },
  { code: "us", name: "English" },
  // Add more languages as needed
];

export enum ErrorMes {
  UseNotFound = "User not found",
  InvalidPassword = "Invalid password",
  UserIsInactive = "User is inactive",
}
export enum GetETypeOfFacility {
  publicHospital = "Bệnh viện công",
  privateHospital = "Bệnh viện tư",
  clinic = "Phòng khám",
  vaccinationCenter = "Trung tâm tiêm chủng",
}

export enum EtypeService {
  Doctor = "bác sĩ",
  Package = "gói khám",
  Vaccine = "vaccine",
  Specialty = " chuyên khoa",
}

export enum GetEDegree { // bằng cấp
  Doctorate = "TS BS",
  MasterDoctor = "ThS BS",
  Doctor = "BS",
  DoctorS1 = "BS CKI",
  DoctorS2 = "BS CKII",
}

export enum GetEAcademicTitle { // học hàm
  Professor = "GS",
  AssociateProfesso = "PGS",
}
