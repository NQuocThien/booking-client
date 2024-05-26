/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Blocks = {
  __typename?: 'Blocks';
  content: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  seen: Scalars['Boolean']['output'];
};

export type Blog = {
  __typename?: 'Blog';
  content: Scalars['String']['output'];
  createdAt: Scalars['Float']['output'];
  createdBy: UserSlimEntity;
  deletedAt?: Maybe<Scalars['Float']['output']>;
  deletedBy?: Maybe<UserSlimEntity>;
  id: Scalars['ID']['output'];
  keywords: Scalars['String']['output'];
  mainPhoto: LinkImage;
  priority: Scalars['Float']['output'];
  shortContent: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Float']['output']>;
  updatedBy?: Maybe<UserSlimEntity>;
};

export type ConfirmRegisterInput = {
  note?: InputMaybe<Scalars['String']['input']>;
  registerId: Scalars['String']['input'];
  state: EStateRegister;
};

export type CreatUserAndStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateBlogInput = {
  content: Scalars['String']['input'];
  keywords: Scalars['String']['input'];
  mainPhoto: LinkImageInput;
  priority: Scalars['Float']['input'];
  shortContent: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  status: EnumBlogStatus;
  title: Scalars['String']['input'];
  type: EnumBlogType;
};

export type CreateCustomerInput = {
  address: Scalars['String']['input'];
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  ethnic: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: EGender;
  numberPhone: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateDoctorAndUserInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  username: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type CreateDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type CreateEvaluateInput = {
  comment: Scalars['String']['input'];
  customerName: Scalars['String']['input'];
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  registerId: Scalars['String']['input'];
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  typeOfService: ETypeOfService;
  userId: Scalars['String']['input'];
  vaccineId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMedicalFacilityInput = {
  address: Scalars['String']['input'];
  dateOff?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: LinkImageInput;
  introduce: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  legalRepresentation: Scalars['String']['input'];
  lng?: InputMaybe<Scalars['Float']['input']>;
  logo: LinkImageInput;
  medicalFacilityName: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  operatingStatus: Scalars['String']['input'];
  schedule: Scalars['String']['input'];
  status: EStatusService;
  taxCode: Scalars['String']['input'];
  typeOfFacility: ETypeOfFacility;
  userId: Scalars['String']['input'];
};

export type CreateMedicalSpecialtyInput = {
  discription: Scalars['String']['input'];
  medicalFactilityId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialtyName: Scalars['String']['input'];
  workSchedule?: InputMaybe<WorkScheduleInput>;
};

export type CreateMedicalStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  content: Scalars['String']['input'];
  detailPath: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreatePackageInput = {
  examinationDetails: Scalars['String']['input'];
  gender: EGenderPackage;
  image: LinkImageInput;
  medicalFactilitiesId: Scalars['String']['input'];
  packageName: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  workSchedule: WorkScheduleInput;
};

export type CreateProfileInput = {
  address: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  dataOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  ethnic: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: EGender;
  identity: Scalars['String']['input'];
  job: Scalars['String']['input'];
  medicalInsurance: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  relationship: Scalars['String']['input'];
};

export type CreateRegisterDoctorInput = {
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  doctorId: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
};

export type CreateRegisterPackageInput = {
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  packageId: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
};

export type CreateRegisterSpecialtyInput = {
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
  specialtyId: Scalars['String']['input'];
};

export type CreateRegisterVaccineInput = {
  createBy?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
  vaccineId: Scalars['String']['input'];
};

export type CreateUserByAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateVaccineInput = {
  countryOfOrigin: Scalars['String']['input'];
  indication: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  note: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  prophylactic: Scalars['String']['input'];
  vaccineName: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type Customer = {
  __typename?: 'Customer';
  address: Scalars['String']['output'];
  customerKey: Scalars['String']['output'];
  dateOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  ethnic: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  numberPhone: Scalars['String']['output'];
  profileShares?: Maybe<Array<Profile>>;
  profiles?: Maybe<Array<Profile>>;
  userId: Scalars['String']['output'];
};

export type Doctor = {
  __typename?: 'Doctor';
  academicTitle?: Maybe<Scalars['String']['output']>;
  avatar: LinkImage;
  degree: Scalars['String']['output'];
  discription: Scalars['String']['output'];
  doctorName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  specialistId: Scalars['String']['output'];
  specialty?: Maybe<MedicalSpecialties>;
  userId: Scalars['String']['output'];
  workSchedule: WorkSchedule;
};


export type DoctorRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
};

export enum EAcademicTitle {
  AssociateProfesso = 'AssociateProfesso',
  Professor = 'Professor'
}

export enum EDayOfWeed {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export enum EDegree {
  Doctor = 'Doctor',
  DoctorS1 = 'DoctorS1',
  DoctorS2 = 'DoctorS2',
  Doctorate = 'Doctorate',
  MasterDoctor = 'MasterDoctor'
}

export enum EGender {
  Female = 'Female',
  Male = 'Male'
}

export enum EGenderPackage {
  Both = 'Both',
  Female = 'Female',
  Male = 'Male'
}

export enum EPermission {
  Magager = 'Magager',
  MagagerPackage = 'MagagerPackage',
  MagagerPending = 'MagagerPending',
  MagagerVaccine = 'MagagerVaccine',
  ManagerSpecialty = 'ManagerSpecialty'
}

export enum EStateRegister {
  Approved = 'Approved',
  Pending = 'Pending',
  Success = 'Success'
}

export enum EStatusService {
  Close = 'Close',
  Open = 'Open'
}

export enum ETypeOfFacility {
  Clinic = 'clinic',
  PrivateHospital = 'privateHospital',
  PublicHospital = 'publicHospital',
  VaccinationCenter = 'vaccinationCenter'
}

export enum ETypeOfNotification {
  NotSeen = 'NotSeen',
  Seen = 'Seen'
}

export enum ETypeOfService {
  Doctor = 'Doctor',
  Package = 'Package',
  Specialty = 'Specialty',
  Vaccine = 'Vaccine'
}

export enum EnumBlogStatus {
  Deleted = 'Deleted',
  NotPublic = 'NotPublic',
  Public = 'Public'
}

export enum EnumBlogType {
  Health = 'Health',
  Medical = 'Medical',
  Service = 'Service'
}

export type Evaluate = {
  __typename?: 'Evaluate';
  comment: Scalars['String']['output'];
  createdAt: Scalars['Float']['output'];
  customerName: Scalars['String']['output'];
  doctorId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  packageId?: Maybe<Scalars['String']['output']>;
  rating: Scalars['Float']['output'];
  registerId: Scalars['String']['output'];
  specialtyId?: Maybe<Scalars['String']['output']>;
  typeOfService: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Float']['output']>;
  userId: Scalars['String']['output'];
  vaccineId?: Maybe<Scalars['String']['output']>;
};

export type Exception = {
  __typename?: 'Exception';
  dates: Array<Scalars['DateTime']['output']>;
  numbeSlot?: Maybe<Scalars['Float']['output']>;
  open: Scalars['Boolean']['output'];
};

export type ExceptionInput = {
  dates: Array<Scalars['DateTime']['input']>;
  numbeSlot?: InputMaybe<Scalars['Float']['input']>;
  open: Scalars['Boolean']['input'];
};

export type FilterDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  degree?: InputMaybe<EDegree>;
  doctorName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<EGender>;
  specialistId?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralInfor = {
  __typename?: 'GeneralInfor';
  ID?: Maybe<Scalars['String']['output']>;
  address: Scalars['String']['output'];
  company: Scalars['String']['output'];
  copyrigth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hotline: Scalars['String']['output'];
  liscenceBusiness: Scalars['String']['output'];
  liscenceOparating: Scalars['String']['output'];
  logoFooter: LinkImage;
  logoHeader: LinkImage;
};

export type GeneralInforUpdateInput = {
  address: Scalars['String']['input'];
  company: Scalars['String']['input'];
  copyrigth: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hotline: Scalars['String']['input'];
  liscenceBusiness: Scalars['String']['input'];
  liscenceOparating: Scalars['String']['input'];
  logoFooter?: InputMaybe<LinkImageInput>;
  logoHeader?: InputMaybe<LinkImageInput>;
};

export type GetEvaluateOptionInput = {
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  vaccineId?: InputMaybe<Scalars['String']['input']>;
};

export type GetRegisPendingInput = {
  cancel: Scalars['Boolean']['input'];
  endTime: Scalars['String']['input'];
  facilityIdFromStaff?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  typeOfService?: InputMaybe<ETypeOfService>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type GetRegisterByOptionInput = {
  date: Scalars['DateTime']['input'];
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  pedding?: InputMaybe<Scalars['Boolean']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  vaccineId?: InputMaybe<Scalars['String']['input']>;
};

export type GetRegisterHaveInput = {
  date: Scalars['DateTime']['input'];
  serviceId: Scalars['String']['input'];
  type: ETypeOfService;
};

export type LinkImage = {
  __typename?: 'LinkImage';
  filename: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type LinkImageInput = {
  filename: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type LoginRespone = {
  __typename?: 'LoginRespone';
  access_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LogoutUser = {
  __typename?: 'LogoutUser';
  logout: Scalars['Boolean']['output'];
};

export type MedicalFacilities = {
  __typename?: 'MedicalFacilities';
  address: Scalars['String']['output'];
  blocks?: Maybe<Array<Blocks>>;
  dateOff?: Maybe<Array<Scalars['DateTime']['output']>>;
  discription: Scalars['String']['output'];
  doctors?: Maybe<Array<Doctor>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  introduce: Scalars['String']['output'];
  lat?: Maybe<Scalars['Float']['output']>;
  legalRepresentation: Scalars['String']['output'];
  lng?: Maybe<Scalars['Float']['output']>;
  logo: LinkImage;
  medicalFacilityName: Scalars['String']['output'];
  medicalSpecialties?: Maybe<Array<MedicalSpecialties>>;
  medicalStaffs?: Maybe<Array<MedicalStaff>>;
  numberPhone: Scalars['String']['output'];
  operatingStatus: Scalars['String']['output'];
  packages?: Maybe<Array<Package>>;
  schedule: Scalars['String']['output'];
  status: Scalars['String']['output'];
  taxCode: Scalars['String']['output'];
  totalDoctors?: Maybe<Scalars['Float']['output']>;
  totalPackages?: Maybe<Scalars['Float']['output']>;
  totalSpecialties?: Maybe<Scalars['Float']['output']>;
  totalVaccinations?: Maybe<Scalars['Float']['output']>;
  typeOfFacility: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  vaccinations?: Maybe<Array<Vaccination>>;
};


export type MedicalFacilitiesDoctorsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesMedicalSpecialtiesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesPackagesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalDoctorsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalPackagesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalSpecialtiesArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesTotalVaccinationsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MedicalFacilitiesVaccinationsArgs = {
  isClient?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MedicalSpecialties = {
  __typename?: 'MedicalSpecialties';
  discription: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  id: Scalars['ID']['output'];
  medicalFactilityId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  specialtyName: Scalars['String']['output'];
  workSchedule?: Maybe<WorkSchedule>;
};


export type MedicalSpecialtiesRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
};

export type MedicalStaff = {
  __typename?: 'MedicalStaff';
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFacilityId: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  specialties?: Maybe<Array<MedicalSpecialties>>;
  specialtyId?: Maybe<Array<Scalars['String']['output']>>;
  staffName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activeUser: User;
  addBlockCustomerByProfileId: MedicalFacilities;
  cancelRegister: Register;
  cancelRegisterByAdmin: Register;
  confirmRegister: Register;
  confirmRegisters: Array<Register>;
  createBlog: Blog;
  createCustomer: Customer;
  createDoctor: Doctor;
  createEvaluate: Evaluate;
  createMedicalFacility: MedicalFacilities;
  createMedicalSpecialty: MedicalSpecialties;
  createMedicalStaff: MedicalStaff;
  createNotification: Notification;
  createPackage: Package;
  createProfile: Profile;
  createRegisterDoctor: Register;
  createRegisterPackage: Register;
  createRegisterSpecialty: Register;
  createRegisterVaccine: Register;
  createUserAndStaff: MedicalStaff;
  createVaccination: Vaccination;
  deleteDoctor: Doctor;
  deleteEvaluate: Evaluate;
  deleteMecialSpecialty: MedicalSpecialties;
  deleteMedicalFacility: MedicalFacilities;
  deleteMedicalStaff: MedicalStaff;
  deleteNotification: Notification;
  deletePackage: Package;
  deleteProfile: Profile;
  deleteUnDeleteBlog: Blog;
  deleteUser: User;
  deleteUserAndDoctor: Doctor;
  deleteVaccination: Vaccination;
  generateExcel: Scalars['String']['output'];
  generateExcelRegisByOption: Scalars['String']['output'];
  login: LoginRespone;
  logout: LogoutUser;
  seenAllNotification: Scalars['String']['output'];
  seenNotificationById: Scalars['String']['output'];
  shareProfile: Profile;
  signup: User;
  signupAndCreateDoctor: Doctor;
  signupUser: User;
  updateBlog: Blog;
  updateCustomer: Customer;
  updateDoctor: Doctor;
  updateEvaluate: Evaluate;
  updateGeneralInfor: GeneralInfor;
  updateMedicalFacility: MedicalFacilities;
  updateMedicalSpecialty: MedicalSpecialties;
  updateMedicalStaff: MedicalStaff;
  updateNotification: Notification;
  updatePackage: Package;
  updateProfile: Profile;
  updateRegister: Register;
  updateRoles: User;
  updateSetting: Setting;
  updateUser: User;
  updateUserAndDoctor: Doctor;
  updateUserAndStaff: MedicalStaff;
  updateUserWithPass: User;
  updateVaccination: Vaccination;
  uploadFileRegister: Register;
};


export type MutationActiveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationAddBlockCustomerByProfileIdArgs = {
  content: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  facilityId?: InputMaybe<Scalars['String']['input']>;
  isBlock?: InputMaybe<Scalars['Boolean']['input']>;
  profileId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCancelRegisterArgs = {
  id: Scalars['String']['input'];
};


export type MutationCancelRegisterByAdminArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationConfirmRegisterArgs = {
  input: ConfirmRegisterInput;
};


export type MutationConfirmRegistersArgs = {
  input: Array<ConfirmRegisterInput>;
};


export type MutationCreateBlogArgs = {
  input: CreateBlogInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateDoctorArgs = {
  createDoctorInput: CreateDoctorInput;
};


export type MutationCreateEvaluateArgs = {
  input: CreateEvaluateInput;
};


export type MutationCreateMedicalFacilityArgs = {
  input: CreateMedicalFacilityInput;
};


export type MutationCreateMedicalSpecialtyArgs = {
  input: CreateMedicalSpecialtyInput;
};


export type MutationCreateMedicalStaffArgs = {
  input: CreateMedicalStaffInput;
};


export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};


export type MutationCreatePackageArgs = {
  input: CreatePackageInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateRegisterDoctorArgs = {
  input: CreateRegisterDoctorInput;
};


export type MutationCreateRegisterPackageArgs = {
  input: CreateRegisterPackageInput;
};


export type MutationCreateRegisterSpecialtyArgs = {
  input: CreateRegisterSpecialtyInput;
};


export type MutationCreateRegisterVaccineArgs = {
  input: CreateRegisterVaccineInput;
};


export type MutationCreateUserAndStaffArgs = {
  input: CreatUserAndStaffInput;
};


export type MutationCreateVaccinationArgs = {
  input: CreateVaccineInput;
};


export type MutationDeleteDoctorArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteEvaluateArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMecialSpecialtyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMedicalFacilityArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteMedicalStaffArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePackageArgs = {
  input: Scalars['String']['input'];
};


export type MutationDeleteProfileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUnDeleteBlogArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserAndDoctorArgs = {
  doctorId: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
};


export type MutationDeleteVaccinationArgs = {
  input: Scalars['String']['input'];
};


export type MutationGenerateExcelRegisByOptionArgs = {
  input: GetRegisterByOptionInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSeenAllNotificationArgs = {
  userId: Scalars['String']['input'];
};


export type MutationSeenNotificationByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationShareProfileArgs = {
  customerKey: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSignupAndCreateDoctorArgs = {
  input: CreateDoctorAndUserInput;
};


export type MutationSignupUserArgs = {
  createUserInput: CreateUserByAdminInput;
};


export type MutationUpdateBlogArgs = {
  input: UpdateBlogInput;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateDoctorArgs = {
  input: UpdateDoctorInput;
};


export type MutationUpdateEvaluateArgs = {
  input: UpdateEvaluateInput;
};


export type MutationUpdateGeneralInforArgs = {
  updateGeneralInforInput: GeneralInforUpdateInput;
};


export type MutationUpdateMedicalFacilityArgs = {
  input: UpdateMedicalFacilityInput;
};


export type MutationUpdateMedicalSpecialtyArgs = {
  input: UpdateMedicalSpecialtyInput;
};


export type MutationUpdateMedicalStaffArgs = {
  input: UpdateMedicalStaffInput;
};


export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


export type MutationUpdatePackageArgs = {
  input: UpdatePackageInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateRegisterArgs = {
  input: UpdateRegisterInput;
};


export type MutationUpdateRolesArgs = {
  updateRolesInput: UpdateRolesInput;
};


export type MutationUpdateSettingArgs = {
  updateSettingInput: UpdateSettingInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserAndDoctorArgs = {
  input: UpdateUserAndDoctorInput;
};


export type MutationUpdateUserAndStaffArgs = {
  input: UpdateUserAndStaffInput;
};


export type MutationUpdateUserWithPassArgs = {
  updateUserInput: UpdateUserWithPassInput;
};


export type MutationUpdateVaccinationArgs = {
  input: UpdateVaccineInput;
};


export type MutationUploadFileRegisterArgs = {
  input: UpLoadFileRegisInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String']['output'];
  createdAt: Scalars['Float']['output'];
  detailPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: ETypeOfNotification;
  userId: Scalars['String']['output'];
};

export type Package = {
  __typename?: 'Package';
  examinationDetails: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  medicalFactilitiesId: Scalars['String']['output'];
  packageName: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  workSchedule: WorkSchedule;
};


export type PackageRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
};

export type Profile = {
  __typename?: 'Profile';
  address: Scalars['String']['output'];
  customer?: Maybe<Customer>;
  customerId: Scalars['String']['output'];
  dataOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  ethnic: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  identity?: Maybe<Scalars['String']['output']>;
  job: Scalars['String']['output'];
  medicalInsurance?: Maybe<Scalars['String']['output']>;
  numberPhone: Scalars['String']['output'];
  register?: Maybe<Array<Register>>;
  relationship: Scalars['String']['output'];
  shares?: Maybe<Array<Scalars['String']['output']>>;
};


export type ProfileRegisterArgs = {
  cancel?: InputMaybe<Scalars['Boolean']['input']>;
  stateRegis?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  checklogin: User;
  checkloginCustomer: User;
  getAllBlogOfFacilityPagination: Array<Blog>;
  getAllBlogPagination: Array<Blog>;
  getAllBlogPaginationForClient: Array<Blog>;
  getAllCustomer: Array<Customer>;
  getAllCustomerFromRegis: Array<Customer>;
  getAllCustomerFromRegisCount: Scalars['Float']['output'];
  getAllCustomerPagination: Array<Customer>;
  getAllDoctor: Array<Doctor>;
  getAllDoctorByFacilityId: Array<Doctor>;
  getAllDoctorOfFacility: Array<Doctor>;
  getAllDoctorPagination: Array<Doctor>;
  getAllDoctorPaginationOfFacility: Array<Doctor>;
  getAllDoctorPaginationOfFacilityForClient: Array<Doctor>;
  getAllDoctorPending: Array<Doctor>;
  getAllEvaluate: Array<Evaluate>;
  getAllMecialSpecialty: Array<MedicalSpecialties>;
  getAllMedicalFacility: Array<MedicalFacilities>;
  getAllMedicalFacilityHaveSrvPaginationForClient: Array<MedicalFacilities>;
  getAllMedicalFacilityPagination: Array<MedicalFacilities>;
  getAllMedicalFacilityPaginationForClient: Array<MedicalFacilities>;
  getAllMedicalSpecialtiesOfFacility: Array<MedicalSpecialties>;
  getAllMedicalSpecialtiesPaginationByStaff: Array<MedicalSpecialties>;
  getAllMedicalSpecialtiesPaginationOfFacility: Array<MedicalSpecialties>;
  getAllMedicalSpecialtiesPaginationOfFacilityForClient: Array<MedicalSpecialties>;
  getAllMedicalStaff: Array<MedicalStaff>;
  getAllMedicalStaffPaginationOfFacility: Array<MedicalStaff>;
  getAllNotification: Array<Notification>;
  getAllNotificationByUserId: Array<Notification>;
  getAllPackage: Array<Package>;
  getAllPackageByFacilityId: Array<Package>;
  getAllPackageOfFacility: Array<Package>;
  getAllPackagePaginationByStaff: Array<Package>;
  getAllPackagePaginationOfFacility: Array<Package>;
  getAllPackagePaginationOfFacilityForClient: Array<Package>;
  getAllPackageSelect: Array<Package>;
  getAllProfile: Array<Profile>;
  getAllRegisCountByOption: Register;
  getAllRegisOfService: Array<Register>;
  getAllRegisPending: Array<Register>;
  getAllRegisPendingCount: Scalars['Float']['output'];
  getAllRegisterByOption: Array<Register>;
  getAllStaffPagination: Array<MedicalStaff>;
  getAllUsersPagination: Array<User>;
  getAllVacation: Array<Vaccination>;
  getAllVaccinationByFacilityId: Array<Vaccination>;
  getAllVaccinationOfFacility: Array<Vaccination>;
  getAllVaccinationPaginationByStaff: Array<Vaccination>;
  getAllVaccinationPaginationOfFacility: Array<Vaccination>;
  getAllVaccinationPaginationOfFacilityForClient: Array<Vaccination>;
  getAllVaccinationSelect: Array<Vaccination>;
  getBlogBySlug: Blog;
  getDoctorbyId: Doctor;
  getDoctorbyUserId: Doctor;
  getEvaluateById: Evaluate;
  getEvaluateByOption: Array<Evaluate>;
  getEvaluateByRegisId: Evaluate;
  getGeneralInfor: GeneralInfor;
  getMedicalFacilityById: MedicalFacilities;
  getMedicalFacilityInfo: MedicalFacilities;
  getMedicalSpecialtiesByMedicalFacilityId: Array<MedicalSpecialties>;
  getMedicalSpecialtyById: MedicalSpecialties;
  getMedicalSpecialtySelect: Array<MedicalSpecialties>;
  getMedicalStaffByFacilityId: Array<MedicalStaff>;
  getMedicalStaffById: MedicalStaff;
  getMedicalStaffByUserId: MedicalStaff;
  getPackageById: Package;
  getProfileByCustomerId: Array<Profile>;
  getProfileByCustomerKey: Array<Profile>;
  getProfileById: Profile;
  getProfiles: Profile;
  getRegisById: Register;
  getRegisHistory: Array<Register>;
  getSetting: Setting;
  getTopMedicalFacilities: Array<MedicalFacilities>;
  getTotalBlogsCount: Scalars['Float']['output'];
  getTotalBlogsCountForClient: Scalars['Float']['output'];
  getTotalCustomersCount: Scalars['Float']['output'];
  getTotalDoctorsCount: Scalars['Float']['output'];
  getTotalDoctorsCountForClient: Scalars['Float']['output'];
  getTotalFacilitiesCount: Scalars['Float']['output'];
  getTotalFacilitiesCountForClient: Scalars['Float']['output'];
  getTotalFacilitiesHaveSrvCountForClient: Scalars['Float']['output'];
  getTotalMedicalSpecialtiesCount: Scalars['Float']['output'];
  getTotalMedicalSpecialtiesCountForClient: Scalars['Float']['output'];
  getTotalPackagesCount: Scalars['Float']['output'];
  getTotalPackagesCountForClient: Scalars['Float']['output'];
  getTotalVaccinationsCount: Scalars['Float']['output'];
  getTotalVaccinationsCountForClient: Scalars['Float']['output'];
  getUser: User;
  getUserDoctorPending: Array<User>;
  getUserDoctorPendingUpdate: Array<User>;
  getUserFacilitySelect: Array<User>;
  getUserMedicalNon: Array<User>;
  getUserSelect: Array<User>;
  getUserSelected: User;
  getUserStaffSelect: Array<User>;
  getVaccineById: Vaccination;
  totalStaffsCount: Scalars['Float']['output'];
  totalUsersCount: Scalars['Float']['output'];
  users: Array<User>;
};


export type QueryGetAllBlogOfFacilityPaginationArgs = {
  facilityId: Scalars['String']['input'];
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllBlogPaginationArgs = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllBlogPaginationForClientArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllCustomerFromRegisArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllCustomerFromRegisCountArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllCustomerPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllDoctorOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorPaginationOfFacilityArgs = {
  filter?: InputMaybe<FilterDoctorInput>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllDoctorPaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  filter?: InputMaybe<FilterDoctorInput>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalFacilityHaveSrvPaginationForClientArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalFacilityPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalFacilityPaginationForClientArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  searchField?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalSpecialtiesOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalSpecialtiesPaginationByStaffArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId: Scalars['String']['input'];
};


export type QueryGetAllMedicalSpecialtiesPaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalSpecialtiesPaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllMedicalStaffPaginationOfFacilityArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllNotificationByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetAllPackageByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllPackageOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackagePaginationByStaffArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackagePaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackagePaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackageSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllRegisCountByOptionArgs = {
  input: GetRegisterByOptionInput;
};


export type QueryGetAllRegisOfServiceArgs = {
  input: GetRegisterHaveInput;
};


export type QueryGetAllRegisPendingArgs = {
  input: GetRegisPendingInput;
  limit?: Scalars['Float']['input'];
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllRegisPendingCountArgs = {
  input: GetRegisPendingInput;
};


export type QueryGetAllRegisterByOptionArgs = {
  input: GetRegisterByOptionInput;
};


export type QueryGetAllStaffPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllUsersPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetAllVaccinationOfFacilityArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationPaginationByStaffArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationPaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationPaginationOfFacilityForClientArgs = {
  facilityId: Scalars['String']['input'];
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetBlogBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetDoctorbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetDoctorbyUserIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetEvaluateByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetEvaluateByOptionArgs = {
  option: GetEvaluateOptionInput;
};


export type QueryGetEvaluateByRegisIdArgs = {
  regisId: Scalars['String']['input'];
};


export type QueryGetMedicalFacilityByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMedicalFacilityInfoArgs = {
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetMedicalSpecialtiesByMedicalFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalSpecialtyByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalSpecialtySelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalStaffByFacilityIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalStaffByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetMedicalStaffByUserIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetPackageByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetProfileByCustomerIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileByCustomerKeyArgs = {
  customerKey: Scalars['String']['input'];
};


export type QueryGetProfileByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfilesArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRegisByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRegisHistoryArgs = {
  profileId: Scalars['String']['input'];
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTopMedicalFacilitiesArgs = {
  limit?: Scalars['Float']['input'];
  typeFacility: Scalars['String']['input'];
};


export type QueryGetTotalBlogsCountArgs = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalBlogsCountForClientArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalCustomersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalDoctorsCountArgs = {
  filter?: InputMaybe<FilterDoctorInput>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalDoctorsCountForClientArgs = {
  facilityId: Scalars['String']['input'];
  filter?: InputMaybe<FilterDoctorInput>;
};


export type QueryGetTotalFacilitiesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalFacilitiesCountForClientArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  searchField?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalFacilitiesHaveSrvCountForClientArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalMedicalSpecialtiesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalMedicalSpecialtiesCountForClientArgs = {
  facilityId: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalPackagesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalPackagesCountForClientArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalVaccinationsCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalVaccinationsCountForClientArgs = {
  facilityId: Scalars['String']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserDoctorPendingUpdateArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetUserFacilitySelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetUserSelectArgs = {
  roleInput: UserSelectInput;
};


export type QueryGetUserSelectedArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserStaffSelectArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetVaccineByIdArgs = {
  input: Scalars['String']['input'];
};


export type QueryTotalStaffsCountArgs = {
  facilityId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTotalUsersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RegisPendingInput = {
  cancel: Scalars['Boolean']['input'];
  doctorIds: Array<Scalars['String']['input']>;
  endTime: Scalars['String']['input'];
  packageIds: Array<Scalars['String']['input']>;
  specialtyIds: Array<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  typeOfService?: InputMaybe<ETypeOfService>;
  vaccineIds: Array<Scalars['String']['input']>;
};

export type Register = {
  __typename?: 'Register';
  cancel: Scalars['Boolean']['output'];
  createRegisBy?: Maybe<Customer>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  date: Scalars['DateTime']['output'];
  doctor?: Maybe<Doctor>;
  doctorId?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<LinkImage>>;
  id: Scalars['ID']['output'];
  note?: Maybe<Scalars['String']['output']>;
  package?: Maybe<Package>;
  packageId?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Profile>;
  profileId: Scalars['String']['output'];
  session: Session;
  specialty?: Maybe<MedicalSpecialties>;
  specialtyId?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  typeOfService: Scalars['String']['output'];
  vaccination?: Maybe<Vaccination>;
  vaccineId?: Maybe<Scalars['String']['output']>;
  warning?: Maybe<Scalars['Float']['output']>;
  warningThisMonth?: Maybe<Scalars['Float']['output']>;
};

export enum Role {
  Admin = 'Admin',
  Customer = 'Customer',
  Doctor = 'Doctor',
  Facility = 'Facility',
  Staff = 'Staff'
}

export type Schedule = {
  __typename?: 'Schedule';
  dayOfWeek: Scalars['String']['output'];
  sessions: Array<Session>;
};

export type ScheduleInput = {
  dayOfWeek: EDayOfWeed;
  sessions: Array<SessionInput>;
};

export type Session = {
  __typename?: 'Session';
  endTime: Scalars['String']['output'];
  exceptions?: Maybe<Array<Exception>>;
  startTime: Scalars['String']['output'];
};

export type SessionInput = {
  endTime: Scalars['String']['input'];
  exceptions?: InputMaybe<Array<ExceptionInput>>;
  startTime: Scalars['String']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  defaultLang: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  notifyCreated: Notification;
  registerCreated: Register;
  registerPendingCreated: Register;
};


export type SubscriptionNotifyCreatedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionRegisterCreatedArgs = {
  option: GetRegisterByOptionInput;
};


export type SubscriptionRegisterPendingCreatedArgs = {
  option: RegisPendingInput;
};

export type UpLoadFileRegisInput = {
  files?: InputMaybe<Array<LinkImageInput>>;
  id: Scalars['String']['input'];
};

export type UpdateBlogInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['Float']['input']>;
  deletedBy?: InputMaybe<UserSlimInput>;
  id: Scalars['ID']['input'];
  keywords?: InputMaybe<Scalars['String']['input']>;
  mainPhoto?: InputMaybe<LinkImageInput>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  shortContent: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EnumBlogStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<EnumBlogType>;
  updatedAt?: InputMaybe<Scalars['Float']['input']>;
  updatedBy?: InputMaybe<UserSlimInput>;
};

export type UpdateCustomerInput = {
  address: Scalars['String']['input'];
  dateOfBirth: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  ethnic: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
};

export type UpdateDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  workSchedule: WorkScheduleInput;
};

export type UpdateEvaluateInput = {
  comment: Scalars['String']['input'];
  id: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
};

export type UpdateMedicalFacilityInput = {
  address: Scalars['String']['input'];
  dateOff?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  discription: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  image: LinkImageInput;
  introduce: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  legalRepresentation: Scalars['String']['input'];
  lng?: InputMaybe<Scalars['Float']['input']>;
  logo: LinkImageInput;
  medicalFacilityName: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  operatingStatus: Scalars['String']['input'];
  schedule: Scalars['String']['input'];
  status: EStatusService;
  taxCode: Scalars['String']['input'];
  typeOfFacility: ETypeOfFacility;
  userId: Scalars['String']['input'];
};

export type UpdateMedicalSpecialtyInput = {
  discription: Scalars['String']['input'];
  id: Scalars['String']['input'];
  medicalFactilityId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  specialtyName: Scalars['String']['input'];
  workSchedule?: InputMaybe<WorkScheduleInput>;
};

export type UpdateMedicalStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotificationInput = {
  content: Scalars['String']['input'];
  detailPath: Scalars['String']['input'];
  id: Scalars['String']['input'];
  status: ETypeOfNotification;
  userId: Scalars['String']['input'];
};

export type UpdatePackageInput = {
  examinationDetails: Scalars['String']['input'];
  gender: EGenderPackage;
  id: Scalars['String']['input'];
  image: LinkImageInput;
  medicalFactilitiesId: Scalars['String']['input'];
  packageName: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  workSchedule: WorkScheduleInput;
};

export type UpdateProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dataOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  ethnic?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender: EGender;
  id: Scalars['String']['input'];
  identity?: InputMaybe<Scalars['String']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  medicalInsurance?: InputMaybe<Scalars['String']['input']>;
  numberPhone?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRegisterInput = {
  cancel: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
  state: EStateRegister;
};

export type UpdateRolesInput = {
  id: Scalars['String']['input'];
  roles: Array<Role>;
};

export type UpdateSettingInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserAndDoctorInput = {
  academicTitle?: InputMaybe<EAcademicTitle>;
  avatar: LinkImageInput;
  degree: EDegree;
  discription: Scalars['String']['input'];
  doctorName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  specialistId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type UpdateUserAndStaffInput = {
  email: Scalars['String']['input'];
  gender: EGender;
  id: Scalars['String']['input'];
  medicalFacilityId: Scalars['String']['input'];
  numberPhone: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  permissions: Array<EPermission>;
  specialtyId?: InputMaybe<Array<Scalars['String']['input']>>;
  staffName: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<LinkImageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserWithPassInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<LinkImageInput>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordNew: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UpdateVaccineInput = {
  countryOfOrigin: Scalars['String']['input'];
  id: Scalars['String']['input'];
  indication: Scalars['String']['input'];
  medicalFactilitiesId: Scalars['String']['input'];
  note: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  prophylactic: Scalars['String']['input'];
  vaccineName: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']['output']>;
  avatar?: Maybe<LinkImage>;
  customer?: Maybe<Customer>;
  doctor?: Maybe<Doctor>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFacilities?: Maybe<MedicalFacilities>;
  password: Scalars['String']['output'];
  roles?: Maybe<Array<Scalars['String']['output']>>;
  username: Scalars['String']['output'];
};

export type UserSelectInput = {
  role: Role;
};

export type UserSlimEntity = {
  __typename?: 'UserSlimEntity';
  role: Scalars['String']['output'];
  showName: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserSlimInput = {
  role: Scalars['String']['input'];
  showName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Vaccination = {
  __typename?: 'Vaccination';
  countryOfOrigin: Scalars['String']['output'];
  facility?: Maybe<MedicalFacilities>;
  id: Scalars['ID']['output'];
  indication: Scalars['String']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  note: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  prophylactic: Scalars['String']['output'];
  registerCount?: Maybe<Scalars['Float']['output']>;
  vaccineName: Scalars['String']['output'];
  workSchedule: WorkSchedule;
};


export type VaccinationRegisterCountArgs = {
  endTime: Scalars['String']['input'];
  isCancel?: InputMaybe<Scalars['Boolean']['input']>;
  isPending?: InputMaybe<Scalars['Boolean']['input']>;
  missed?: InputMaybe<Scalars['Boolean']['input']>;
  startTime: Scalars['String']['input'];
};

export type WorkSchedule = {
  __typename?: 'WorkSchedule';
  dayOff: Array<Scalars['DateTime']['output']>;
  numberSlot: Scalars['Float']['output'];
  schedule: Array<Schedule>;
  status: Scalars['String']['output'];
};

export type WorkScheduleInput = {
  dayOff: Array<Scalars['DateTime']['input']>;
  numberSlot: Scalars['Float']['input'];
  schedule: Array<ScheduleInput>;
  status: EStatusService;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, customerKey: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } };

export type UpdateUserWithPassMutationVariables = Exact<{
  input: UpdateUserWithPassInput;
}>;


export type UpdateUserWithPassMutation = { __typename?: 'Mutation', updateUserWithPass: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, customerKey: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } };

export type CreateCustomerByUserIdMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type CreateCustomerByUserIdMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'Customer', id: string, userId: string, customerKey: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dateOfBirth: any, ethnic: string } };

export type LoginCustomerMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginCustomerMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRespone', access_token: string, user: { __typename?: 'User', id: string, username: string, email: string, password: string, roles?: Array<string> | null, active?: boolean | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, customerKey: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } } };

export type UpdateCustomerMutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', id: string, userId: string, customerKey: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dateOfBirth: any, ethnic: string } };

export type CreateProfileMutationVariables = Exact<{
  input: CreateProfileInput;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile: { __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string } };

export type DeleteProfileMutationVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type DeleteProfileMutation = { __typename?: 'Mutation', deleteProfile: { __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string } };

export type SignupMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: string } };

export type CreateRegisterMedicalSpecialtyMutationVariables = Exact<{
  input: CreateRegisterSpecialtyInput;
}>;


export type CreateRegisterMedicalSpecialtyMutation = { __typename?: 'Mutation', createRegisterSpecialty: { __typename?: 'Register', id: string } };

export type CreateRegisterDoctorMutationVariables = Exact<{
  input: CreateRegisterDoctorInput;
}>;


export type CreateRegisterDoctorMutation = { __typename?: 'Mutation', createRegisterDoctor: { __typename?: 'Register', id: string } };

export type CreateRegisterPackageMutationVariables = Exact<{
  input: CreateRegisterPackageInput;
}>;


export type CreateRegisterPackageMutation = { __typename?: 'Mutation', createRegisterPackage: { __typename?: 'Register', id: string } };

export type CreateRegisterVaccinationMutationVariables = Exact<{
  input: CreateRegisterVaccineInput;
}>;


export type CreateRegisterVaccinationMutation = { __typename?: 'Mutation', createRegisterVaccine: { __typename?: 'Register', id: string } };

export type CancelRegisterMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CancelRegisterMutation = { __typename?: 'Mutation', cancelRegister: { __typename?: 'Register', id: string } };

export type SeenAllNotificationByUserIdMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type SeenAllNotificationByUserIdMutation = { __typename?: 'Mutation', seenAllNotification: string };

export type SeenNotificationByIdMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type SeenNotificationByIdMutation = { __typename?: 'Mutation', seenNotificationById: string };

export type CreateEvaluateMutationVariables = Exact<{
  input: CreateEvaluateInput;
}>;


export type CreateEvaluateMutation = { __typename?: 'Mutation', createEvaluate: { __typename?: 'Evaluate', id: string, userId: string, customerName: string, registerId: string, typeOfService: string, specialtyId?: string | null, doctorId?: string | null, packageId?: string | null, vaccineId?: string | null, comment: string, rating: number, createdAt: number } };

export type UpdateEvaluateMutationVariables = Exact<{
  input: UpdateEvaluateInput;
}>;


export type UpdateEvaluateMutation = { __typename?: 'Mutation', updateEvaluate: { __typename?: 'Evaluate', id: string, userId: string, registerId: string, customerName: string, typeOfService: string, specialtyId?: string | null, doctorId?: string | null, packageId?: string | null, vaccineId?: string | null, comment: string, rating: number, createdAt: number } };

export type ShareProfileMutationVariables = Exact<{
  profileId: Scalars['String']['input'];
  customerKey: Scalars['String']['input'];
}>;


export type ShareProfileMutation = { __typename?: 'Mutation', shareProfile: { __typename?: 'Profile', id: string } };

export type GetGeneralInforQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInforQuery = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, type: string, url: string }, logoHeader: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type CheckloginCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckloginCustomerQuery = { __typename?: 'Query', checkloginCustomer: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, avatar?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, customerKey: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } };

export type GetMedicalFacilityRegisInfoByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  isClient: Scalars['Boolean']['input'];
}>;


export type GetMedicalFacilityRegisInfoByIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, medicalFacilityName: string, address: string, typeOfFacility: string, status: string, dateOff?: Array<any> | null, schedule: string, numberPhone: string, email: string, discription: string, introduce: string, lat?: number | null, lng?: number | null, userId: string, taxCode: string, legalRepresentation: string, operatingStatus: string, totalDoctors?: number | null, totalPackages?: number | null, totalSpecialties?: number | null, totalVaccinations?: number | null, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type GetProfileByCustomerIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetProfileByCustomerIdQuery = { __typename?: 'Query', getProfileByCustomerId: Array<{ __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string, shares?: Array<string> | null }> };

export type GetProfileByCustomerKeyQueryVariables = Exact<{
  customerKey: Scalars['String']['input'];
}>;


export type GetProfileByCustomerKeyQuery = { __typename?: 'Query', getProfileByCustomerKey: Array<{ __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string, customer?: { __typename?: 'Customer', fullname: string } | null }> };

export type GetTopMedicalFacilitiesQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  typeFacility: Scalars['String']['input'];
}>;


export type GetTopMedicalFacilitiesQuery = { __typename?: 'Query', getTopMedicalFacilities: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetAllMedicalFacilityPaginationForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  searchField?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  typeOfFacility?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllMedicalFacilityPaginationForClientQuery = { __typename?: 'Query', getAllMedicalFacilityPaginationForClient: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetTotalFacilitiesCountForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  searchField?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalFacilitiesCountForClientQuery = { __typename?: 'Query', getTotalFacilitiesCountForClient: number };

export type GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  isClient: Scalars['Boolean']['input'];
}>;


export type GetListMedicalSpecialtyRegisInfoByFacilityIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, medicalSpecialties?: Array<{ __typename?: 'MedicalSpecialties', id: string, specialtyName: string, discription: string, price: number, medicalFactilityId: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null }> | null } };

export type GetListDoctorRegisInfoByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  isClient: Scalars['Boolean']['input'];
}>;


export type GetListDoctorRegisInfoByFacilityIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, doctors?: Array<{ __typename?: 'Doctor', id: string, medicalFactilitiesId: string, doctorName: string, gender: string, email: string, numberPhone: string, degree: string, academicTitle?: string | null, specialistId: string, userId: string, price: number, discription: string, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, specialty?: { __typename?: 'MedicalSpecialties', id: string, specialtyName: string, discription: string, price: number, medicalFactilityId: string } | null, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } }> | null } };

export type GetListPackageRegisInfoByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  isClient: Scalars['Boolean']['input'];
}>;


export type GetListPackageRegisInfoByFacilityIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, packages?: Array<{ __typename?: 'Package', id: string, packageName: string, gender: string, examinationDetails: string, price: number, medicalFactilitiesId: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } }> | null } };

export type GetListVaccinationRegisInfoByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  isClient: Scalars['Boolean']['input'];
}>;


export type GetListVaccinationRegisInfoByFacilityIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, vaccinations?: Array<{ __typename?: 'Vaccination', id: string, vaccineName: string, countryOfOrigin: string, indication: string, medicalFactilitiesId: string, price: number, note: string, prophylactic: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } }> | null } };

export type GetAllRegisOfServiceQueryVariables = Exact<{
  input: GetRegisterHaveInput;
}>;


export type GetAllRegisOfServiceQuery = { __typename?: 'Query', getAllRegisOfService: Array<{ __typename?: 'Register', id: string, date: any, doctorId?: string | null, cancel: boolean, packageId?: string | null, specialtyId?: string | null, vaccineId?: string | null, typeOfService: string, state: string, profileId: string, createdAt: any, session: { __typename?: 'Session', endTime: string, startTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null } }> };

export type GetProfileTicketByCustomerIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  cancel?: InputMaybe<Scalars['Boolean']['input']>;
  stateRegis?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProfileTicketByCustomerIdQuery = { __typename?: 'Query', getProfileByCustomerId: Array<{ __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string, register?: Array<{ __typename?: 'Register', id: string, date: any, createdAt: any, profileId: string, typeOfService: string, state: string, cancel: boolean, note?: string | null, doctorId?: string | null, vaccineId?: string | null, packageId?: string | null, specialtyId?: string | null, session: { __typename?: 'Session', endTime: string, startTime: string }, doctor?: { __typename?: 'Doctor', id: string, doctorName: string, price: number, specialty?: { __typename?: 'MedicalSpecialties', specialtyName: string } | null, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null, specialty?: { __typename?: 'MedicalSpecialties', specialtyName: string, price: number, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null, vaccination?: { __typename?: 'Vaccination', vaccineName: string, price: number, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null, package?: { __typename?: 'Package', packageName: string, price: number, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null }> | null }> };

export type GetProfileTicketByCustomerKeyQueryVariables = Exact<{
  customerKey: Scalars['String']['input'];
  cancel?: InputMaybe<Scalars['Boolean']['input']>;
  stateRegis?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetProfileTicketByCustomerKeyQuery = { __typename?: 'Query', getProfileByCustomerKey: Array<{ __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string, customer?: { __typename?: 'Customer', fullname: string } | null, register?: Array<{ __typename?: 'Register', id: string, date: any, createdAt: any, profileId: string, typeOfService: string, state: string, cancel: boolean, doctorId?: string | null, vaccineId?: string | null, packageId?: string | null, specialtyId?: string | null, session: { __typename?: 'Session', endTime: string, startTime: string }, doctor?: { __typename?: 'Doctor', id: string, doctorName: string, price: number, specialty?: { __typename?: 'MedicalSpecialties', specialtyName: string } | null, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null, specialty?: { __typename?: 'MedicalSpecialties', specialtyName: string, price: number, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null, vaccination?: { __typename?: 'Vaccination', vaccineName: string, price: number, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null, package?: { __typename?: 'Package', packageName: string, price: number, facility?: { __typename?: 'MedicalFacilities', medicalFacilityName: string, address: string } | null } | null }> | null }> };

export type GetAllDoctorPaginationOfFacilityForClientQueryVariables = Exact<{
  filter: FilterDoctorInput;
  page?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  facilityId: Scalars['String']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllDoctorPaginationOfFacilityForClientQuery = { __typename?: 'Query', getAllDoctorPaginationOfFacilityForClient: Array<{ __typename?: 'Doctor', id: string, medicalFactilitiesId: string, userId: string, doctorName: string, gender: string, email: string, numberPhone: string, specialistId: string, academicTitle?: string | null, degree: string, price: number, discription: string, specialty?: { __typename?: 'MedicalSpecialties', id: string, discription: string, medicalFactilityId: string, price: number, specialtyName: string } | null, avatar: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } }> };

export type GetTotalDoctorsCountForClientQueryVariables = Exact<{
  filter: FilterDoctorInput;
  facilityId: Scalars['String']['input'];
}>;


export type GetTotalDoctorsCountForClientQuery = { __typename?: 'Query', getTotalDoctorsCountForClient: number };

export type GetTotalPackagesCountForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['String']['input'];
}>;


export type GetTotalPackagesCountForClientQuery = { __typename?: 'Query', getTotalPackagesCountForClient: number };

export type GetAllPackagePaginationOfFacilityForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['String']['input'];
}>;


export type GetAllPackagePaginationOfFacilityForClientQuery = { __typename?: 'Query', getAllPackagePaginationOfFacilityForClient: Array<{ __typename?: 'Package', id: string, medicalFactilitiesId: string, packageName: string, gender: string, price: number, examinationDetails: string, image: { __typename?: 'LinkImage', filename: string, type: string, url: string }, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, status: string, numberSlot: number, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } }> };

export type GetTotalMedicalSpecialtiesCountForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['String']['input'];
}>;


export type GetTotalMedicalSpecialtiesCountForClientQuery = { __typename?: 'Query', getTotalMedicalSpecialtiesCountForClient: number };

export type GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['String']['input'];
}>;


export type GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery = { __typename?: 'Query', getAllMedicalSpecialtiesPaginationOfFacilityForClient: Array<{ __typename?: 'MedicalSpecialties', id: string, medicalFactilityId: string, specialtyName: string, price: number, discription: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } | null }> };

export type GetAllVaccinationPaginationOfFacilityForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['String']['input'];
}>;


export type GetAllVaccinationPaginationOfFacilityForClientQuery = { __typename?: 'Query', getAllVaccinationPaginationOfFacilityForClient: Array<{ __typename?: 'Vaccination', id: string, medicalFactilitiesId: string, vaccineName: string, price: number, countryOfOrigin: string, prophylactic: string, indication: string, note: string, workSchedule: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', startTime: string, endTime: string, exceptions?: Array<{ __typename?: 'Exception', dates: Array<any>, numbeSlot?: number | null, open: boolean }> | null }> }> } }> };

export type GetTotalVaccinationsCountForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  facilityId: Scalars['String']['input'];
}>;


export type GetTotalVaccinationsCountForClientQuery = { __typename?: 'Query', getTotalVaccinationsCountForClient: number };

export type GetAllMedicalFacilityHaveServicePaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllMedicalFacilityHaveServicePaginationQuery = { __typename?: 'Query', getAllMedicalFacilityHaveSrvPaginationForClient: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetTotalFacilitiesHaveSrvCountForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalFacilitiesHaveSrvCountForClientQuery = { __typename?: 'Query', getTotalFacilitiesHaveSrvCountForClient: number };

export type GetAllBlogPaginationForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllBlogPaginationForClientQuery = { __typename?: 'Query', getAllBlogPaginationForClient: Array<{ __typename?: 'Blog', id: string, slug: string, title: string, status: string, content: string, shortContent: string, priority: number, type: string, keywords: string, createdAt: number, updatedAt?: number | null, deletedAt?: number | null, mainPhoto: { __typename?: 'LinkImage', filename: string, type: string, url: string }, createdBy: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string }, updatedBy?: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string } | null, deletedBy?: { __typename?: 'UserSlimEntity', role: string, showName: string, username: string } | null }> };

export type GetTotalBlogsCountForClientQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalBlogsCountForClientQuery = { __typename?: 'Query', getTotalBlogsCountForClient: number };

export type GetBlogBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBlogBySlugQuery = { __typename?: 'Query', getBlogBySlug: { __typename?: 'Blog', id: string, slug: string, title: string, content: string, shortContent: string, priority: number, type: string, keywords: string, status: string, createdAt: number, updatedAt?: number | null, deletedAt?: number | null, mainPhoto: { __typename?: 'LinkImage', filename: string, type: string, url: string }, createdBy: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string }, updatedBy?: { __typename?: 'UserSlimEntity', username: string, showName: string, role: string } | null, deletedBy?: { __typename?: 'UserSlimEntity', role: string, showName: string, username: string } | null } };

export type GetAllNotificationByUserIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetAllNotificationByUserIdQuery = { __typename?: 'Query', getAllNotificationByUserId: Array<{ __typename?: 'Notification', id: string, content: string, detailPath: string, createdAt: number, status: ETypeOfNotification, userId: string }> };

export type GetRegisByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetRegisByIdQuery = { __typename?: 'Query', getRegisById: { __typename?: 'Register', id: string, cancel: boolean, createdAt: any, date: any, profileId: string, note?: string | null, typeOfService: string, doctorId?: string | null, packageId?: string | null, specialtyId?: string | null, vaccineId?: string | null, state: string, session: { __typename?: 'Session', startTime: string, endTime: string }, doctor?: { __typename?: 'Doctor', doctorName: string, price: number, facility?: { __typename?: 'MedicalFacilities', address: string, medicalFacilityName: string } | null } | null, specialty?: { __typename?: 'MedicalSpecialties', specialtyName: string, price: number, facility?: { __typename?: 'MedicalFacilities', address: string, medicalFacilityName: string } | null } | null, vaccination?: { __typename?: 'Vaccination', vaccineName: string, price: number, facility?: { __typename?: 'MedicalFacilities', address: string, medicalFacilityName: string } | null } | null, package?: { __typename?: 'Package', packageName: string, price: number, facility?: { __typename?: 'MedicalFacilities', address: string, medicalFacilityName: string } | null } | null, files?: Array<{ __typename?: 'LinkImage', filename: string, type: string, url: string }> | null, profile?: { __typename?: 'Profile', id: string, fullname: string, address: string, email: string, numberPhone: string, gender: string, ethnic: string, identity?: string | null, medicalInsurance?: string | null, job: string, relationship: string, dataOfBirth: any, customerId: string } | null } };

export type GetEvaluateByRegisIdQueryVariables = Exact<{
  regisId: Scalars['String']['input'];
}>;


export type GetEvaluateByRegisIdQuery = { __typename?: 'Query', getEvaluateByRegisId: { __typename?: 'Evaluate', id: string, userId: string, customerName: string, registerId: string, typeOfService: string, specialtyId?: string | null, doctorId?: string | null, packageId?: string | null, vaccineId?: string | null, comment: string, rating: number, createdAt: number, updatedAt?: number | null } };

export type GetEvaluateByOptionQueryVariables = Exact<{
  input: GetEvaluateOptionInput;
}>;


export type GetEvaluateByOptionQuery = { __typename?: 'Query', getEvaluateByOption: Array<{ __typename?: 'Evaluate', id: string, userId: string, customerName: string, registerId: string, typeOfService: string, specialtyId?: string | null, doctorId?: string | null, packageId?: string | null, vaccineId?: string | null, comment: string, rating: number, createdAt: number }> };

export type NotifyCreatedSubscriptionVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type NotifyCreatedSubscription = { __typename?: 'Subscription', notifyCreated: { __typename?: 'Notification', id: string, content: string, detailPath: string, createdAt: number, status: ETypeOfNotification, userId: string } };


export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateUser(updateUserInput: $input) {
    id
    avatar {
      filename
      type
      url
    }
    email
    username
    password
    roles
    customer {
      id
      customerKey
      fullname
      gender
      email
      numberPhone
      address
      dateOfBirth
      ethnic
      userId
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserWithPassDocument = gql`
    mutation updateUserWithPass($input: UpdateUserWithPassInput!) {
  updateUserWithPass(updateUserInput: $input) {
    id
    avatar {
      filename
      type
      url
    }
    email
    username
    password
    roles
    customer {
      id
      customerKey
      fullname
      gender
      email
      numberPhone
      address
      dateOfBirth
      ethnic
      userId
    }
  }
}
    `;
export type UpdateUserWithPassMutationFn = Apollo.MutationFunction<UpdateUserWithPassMutation, UpdateUserWithPassMutationVariables>;

/**
 * __useUpdateUserWithPassMutation__
 *
 * To run a mutation, you first call `useUpdateUserWithPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserWithPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserWithPassMutation, { data, loading, error }] = useUpdateUserWithPassMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserWithPassMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserWithPassMutation, UpdateUserWithPassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserWithPassMutation, UpdateUserWithPassMutationVariables>(UpdateUserWithPassDocument, options);
      }
export type UpdateUserWithPassMutationHookResult = ReturnType<typeof useUpdateUserWithPassMutation>;
export type UpdateUserWithPassMutationResult = Apollo.MutationResult<UpdateUserWithPassMutation>;
export type UpdateUserWithPassMutationOptions = Apollo.BaseMutationOptions<UpdateUserWithPassMutation, UpdateUserWithPassMutationVariables>;
export const CreateCustomerByUserIdDocument = gql`
    mutation createCustomerByUserId($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    userId
    customerKey
    fullname
    numberPhone
    email
    address
    gender
    dateOfBirth
    ethnic
  }
}
    `;
export type CreateCustomerByUserIdMutationFn = Apollo.MutationFunction<CreateCustomerByUserIdMutation, CreateCustomerByUserIdMutationVariables>;

/**
 * __useCreateCustomerByUserIdMutation__
 *
 * To run a mutation, you first call `useCreateCustomerByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerByUserIdMutation, { data, loading, error }] = useCreateCustomerByUserIdMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerByUserIdMutation, CreateCustomerByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerByUserIdMutation, CreateCustomerByUserIdMutationVariables>(CreateCustomerByUserIdDocument, options);
      }
export type CreateCustomerByUserIdMutationHookResult = ReturnType<typeof useCreateCustomerByUserIdMutation>;
export type CreateCustomerByUserIdMutationResult = Apollo.MutationResult<CreateCustomerByUserIdMutation>;
export type CreateCustomerByUserIdMutationOptions = Apollo.BaseMutationOptions<CreateCustomerByUserIdMutation, CreateCustomerByUserIdMutationVariables>;
export const LoginCustomerDocument = gql`
    mutation loginCustomer($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    access_token
    user {
      id
      username
      email
      password
      avatar {
        filename
        type
        url
      }
      roles
      active
      customer {
        id
        customerKey
        fullname
        gender
        email
        numberPhone
        address
        dateOfBirth
        ethnic
        userId
      }
    }
  }
}
    `;
export type LoginCustomerMutationFn = Apollo.MutationFunction<LoginCustomerMutation, LoginCustomerMutationVariables>;

/**
 * __useLoginCustomerMutation__
 *
 * To run a mutation, you first call `useLoginCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginCustomerMutation, { data, loading, error }] = useLoginCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginCustomerMutation(baseOptions?: Apollo.MutationHookOptions<LoginCustomerMutation, LoginCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginCustomerMutation, LoginCustomerMutationVariables>(LoginCustomerDocument, options);
      }
export type LoginCustomerMutationHookResult = ReturnType<typeof useLoginCustomerMutation>;
export type LoginCustomerMutationResult = Apollo.MutationResult<LoginCustomerMutation>;
export type LoginCustomerMutationOptions = Apollo.BaseMutationOptions<LoginCustomerMutation, LoginCustomerMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    id
    userId
    customerKey
    fullname
    numberPhone
    email
    address
    gender
    dateOfBirth
    ethnic
  }
}
    `;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, options);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const CreateProfileDocument = gql`
    mutation createProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
    id
    customerId
    fullname
    numberPhone
    email
    address
    gender
    dataOfBirth
    ethnic
    identity
    relationship
    job
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation updateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
    id
    customerId
    fullname
    numberPhone
    email
    address
    gender
    dataOfBirth
    ethnic
    identity
    relationship
    job
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const DeleteProfileDocument = gql`
    mutation deleteProfile($input: String!) {
  deleteProfile(id: $input) {
    id
    customerId
    fullname
    numberPhone
    email
    address
    gender
    dataOfBirth
    ethnic
    identity
    relationship
    job
  }
}
    `;
export type DeleteProfileMutationFn = Apollo.MutationFunction<DeleteProfileMutation, DeleteProfileMutationVariables>;

/**
 * __useDeleteProfileMutation__
 *
 * To run a mutation, you first call `useDeleteProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProfileMutation, { data, loading, error }] = useDeleteProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProfileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProfileMutation, DeleteProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProfileMutation, DeleteProfileMutationVariables>(DeleteProfileDocument, options);
      }
export type DeleteProfileMutationHookResult = ReturnType<typeof useDeleteProfileMutation>;
export type DeleteProfileMutationResult = Apollo.MutationResult<DeleteProfileMutation>;
export type DeleteProfileMutationOptions = Apollo.BaseMutationOptions<DeleteProfileMutation, DeleteProfileMutationVariables>;
export const SignupDocument = gql`
    mutation signup($input: CreateUserInput!) {
  signup(createUserInput: $input) {
    id
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const CreateRegisterMedicalSpecialtyDocument = gql`
    mutation createRegisterMedicalSpecialty($input: CreateRegisterSpecialtyInput!) {
  createRegisterSpecialty(input: $input) {
    id
  }
}
    `;
export type CreateRegisterMedicalSpecialtyMutationFn = Apollo.MutationFunction<CreateRegisterMedicalSpecialtyMutation, CreateRegisterMedicalSpecialtyMutationVariables>;

/**
 * __useCreateRegisterMedicalSpecialtyMutation__
 *
 * To run a mutation, you first call `useCreateRegisterMedicalSpecialtyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegisterMedicalSpecialtyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegisterMedicalSpecialtyMutation, { data, loading, error }] = useCreateRegisterMedicalSpecialtyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRegisterMedicalSpecialtyMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegisterMedicalSpecialtyMutation, CreateRegisterMedicalSpecialtyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegisterMedicalSpecialtyMutation, CreateRegisterMedicalSpecialtyMutationVariables>(CreateRegisterMedicalSpecialtyDocument, options);
      }
export type CreateRegisterMedicalSpecialtyMutationHookResult = ReturnType<typeof useCreateRegisterMedicalSpecialtyMutation>;
export type CreateRegisterMedicalSpecialtyMutationResult = Apollo.MutationResult<CreateRegisterMedicalSpecialtyMutation>;
export type CreateRegisterMedicalSpecialtyMutationOptions = Apollo.BaseMutationOptions<CreateRegisterMedicalSpecialtyMutation, CreateRegisterMedicalSpecialtyMutationVariables>;
export const CreateRegisterDoctorDocument = gql`
    mutation createRegisterDoctor($input: CreateRegisterDoctorInput!) {
  createRegisterDoctor(input: $input) {
    id
  }
}
    `;
export type CreateRegisterDoctorMutationFn = Apollo.MutationFunction<CreateRegisterDoctorMutation, CreateRegisterDoctorMutationVariables>;

/**
 * __useCreateRegisterDoctorMutation__
 *
 * To run a mutation, you first call `useCreateRegisterDoctorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegisterDoctorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegisterDoctorMutation, { data, loading, error }] = useCreateRegisterDoctorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRegisterDoctorMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegisterDoctorMutation, CreateRegisterDoctorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegisterDoctorMutation, CreateRegisterDoctorMutationVariables>(CreateRegisterDoctorDocument, options);
      }
export type CreateRegisterDoctorMutationHookResult = ReturnType<typeof useCreateRegisterDoctorMutation>;
export type CreateRegisterDoctorMutationResult = Apollo.MutationResult<CreateRegisterDoctorMutation>;
export type CreateRegisterDoctorMutationOptions = Apollo.BaseMutationOptions<CreateRegisterDoctorMutation, CreateRegisterDoctorMutationVariables>;
export const CreateRegisterPackageDocument = gql`
    mutation createRegisterPackage($input: CreateRegisterPackageInput!) {
  createRegisterPackage(input: $input) {
    id
  }
}
    `;
export type CreateRegisterPackageMutationFn = Apollo.MutationFunction<CreateRegisterPackageMutation, CreateRegisterPackageMutationVariables>;

/**
 * __useCreateRegisterPackageMutation__
 *
 * To run a mutation, you first call `useCreateRegisterPackageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegisterPackageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegisterPackageMutation, { data, loading, error }] = useCreateRegisterPackageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRegisterPackageMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegisterPackageMutation, CreateRegisterPackageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegisterPackageMutation, CreateRegisterPackageMutationVariables>(CreateRegisterPackageDocument, options);
      }
export type CreateRegisterPackageMutationHookResult = ReturnType<typeof useCreateRegisterPackageMutation>;
export type CreateRegisterPackageMutationResult = Apollo.MutationResult<CreateRegisterPackageMutation>;
export type CreateRegisterPackageMutationOptions = Apollo.BaseMutationOptions<CreateRegisterPackageMutation, CreateRegisterPackageMutationVariables>;
export const CreateRegisterVaccinationDocument = gql`
    mutation createRegisterVaccination($input: CreateRegisterVaccineInput!) {
  createRegisterVaccine(input: $input) {
    id
  }
}
    `;
export type CreateRegisterVaccinationMutationFn = Apollo.MutationFunction<CreateRegisterVaccinationMutation, CreateRegisterVaccinationMutationVariables>;

/**
 * __useCreateRegisterVaccinationMutation__
 *
 * To run a mutation, you first call `useCreateRegisterVaccinationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRegisterVaccinationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRegisterVaccinationMutation, { data, loading, error }] = useCreateRegisterVaccinationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRegisterVaccinationMutation(baseOptions?: Apollo.MutationHookOptions<CreateRegisterVaccinationMutation, CreateRegisterVaccinationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRegisterVaccinationMutation, CreateRegisterVaccinationMutationVariables>(CreateRegisterVaccinationDocument, options);
      }
export type CreateRegisterVaccinationMutationHookResult = ReturnType<typeof useCreateRegisterVaccinationMutation>;
export type CreateRegisterVaccinationMutationResult = Apollo.MutationResult<CreateRegisterVaccinationMutation>;
export type CreateRegisterVaccinationMutationOptions = Apollo.BaseMutationOptions<CreateRegisterVaccinationMutation, CreateRegisterVaccinationMutationVariables>;
export const CancelRegisterDocument = gql`
    mutation cancelRegister($id: String!) {
  cancelRegister(id: $id) {
    id
  }
}
    `;
export type CancelRegisterMutationFn = Apollo.MutationFunction<CancelRegisterMutation, CancelRegisterMutationVariables>;

/**
 * __useCancelRegisterMutation__
 *
 * To run a mutation, you first call `useCancelRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelRegisterMutation, { data, loading, error }] = useCancelRegisterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelRegisterMutation(baseOptions?: Apollo.MutationHookOptions<CancelRegisterMutation, CancelRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelRegisterMutation, CancelRegisterMutationVariables>(CancelRegisterDocument, options);
      }
export type CancelRegisterMutationHookResult = ReturnType<typeof useCancelRegisterMutation>;
export type CancelRegisterMutationResult = Apollo.MutationResult<CancelRegisterMutation>;
export type CancelRegisterMutationOptions = Apollo.BaseMutationOptions<CancelRegisterMutation, CancelRegisterMutationVariables>;
export const SeenAllNotificationByUserIdDocument = gql`
    mutation seenAllNotificationByUserId($userId: String!) {
  seenAllNotification(userId: $userId)
}
    `;
export type SeenAllNotificationByUserIdMutationFn = Apollo.MutationFunction<SeenAllNotificationByUserIdMutation, SeenAllNotificationByUserIdMutationVariables>;

/**
 * __useSeenAllNotificationByUserIdMutation__
 *
 * To run a mutation, you first call `useSeenAllNotificationByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeenAllNotificationByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seenAllNotificationByUserIdMutation, { data, loading, error }] = useSeenAllNotificationByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSeenAllNotificationByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<SeenAllNotificationByUserIdMutation, SeenAllNotificationByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SeenAllNotificationByUserIdMutation, SeenAllNotificationByUserIdMutationVariables>(SeenAllNotificationByUserIdDocument, options);
      }
export type SeenAllNotificationByUserIdMutationHookResult = ReturnType<typeof useSeenAllNotificationByUserIdMutation>;
export type SeenAllNotificationByUserIdMutationResult = Apollo.MutationResult<SeenAllNotificationByUserIdMutation>;
export type SeenAllNotificationByUserIdMutationOptions = Apollo.BaseMutationOptions<SeenAllNotificationByUserIdMutation, SeenAllNotificationByUserIdMutationVariables>;
export const SeenNotificationByIdDocument = gql`
    mutation seenNotificationById($id: String!) {
  seenNotificationById(id: $id)
}
    `;
export type SeenNotificationByIdMutationFn = Apollo.MutationFunction<SeenNotificationByIdMutation, SeenNotificationByIdMutationVariables>;

/**
 * __useSeenNotificationByIdMutation__
 *
 * To run a mutation, you first call `useSeenNotificationByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeenNotificationByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seenNotificationByIdMutation, { data, loading, error }] = useSeenNotificationByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSeenNotificationByIdMutation(baseOptions?: Apollo.MutationHookOptions<SeenNotificationByIdMutation, SeenNotificationByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SeenNotificationByIdMutation, SeenNotificationByIdMutationVariables>(SeenNotificationByIdDocument, options);
      }
export type SeenNotificationByIdMutationHookResult = ReturnType<typeof useSeenNotificationByIdMutation>;
export type SeenNotificationByIdMutationResult = Apollo.MutationResult<SeenNotificationByIdMutation>;
export type SeenNotificationByIdMutationOptions = Apollo.BaseMutationOptions<SeenNotificationByIdMutation, SeenNotificationByIdMutationVariables>;
export const CreateEvaluateDocument = gql`
    mutation createEvaluate($input: CreateEvaluateInput!) {
  createEvaluate(input: $input) {
    id
    userId
    customerName
    registerId
    typeOfService
    specialtyId
    doctorId
    packageId
    vaccineId
    comment
    rating
    createdAt
  }
}
    `;
export type CreateEvaluateMutationFn = Apollo.MutationFunction<CreateEvaluateMutation, CreateEvaluateMutationVariables>;

/**
 * __useCreateEvaluateMutation__
 *
 * To run a mutation, you first call `useCreateEvaluateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEvaluateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEvaluateMutation, { data, loading, error }] = useCreateEvaluateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEvaluateMutation(baseOptions?: Apollo.MutationHookOptions<CreateEvaluateMutation, CreateEvaluateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEvaluateMutation, CreateEvaluateMutationVariables>(CreateEvaluateDocument, options);
      }
export type CreateEvaluateMutationHookResult = ReturnType<typeof useCreateEvaluateMutation>;
export type CreateEvaluateMutationResult = Apollo.MutationResult<CreateEvaluateMutation>;
export type CreateEvaluateMutationOptions = Apollo.BaseMutationOptions<CreateEvaluateMutation, CreateEvaluateMutationVariables>;
export const UpdateEvaluateDocument = gql`
    mutation updateEvaluate($input: UpdateEvaluateInput!) {
  updateEvaluate(input: $input) {
    id
    userId
    registerId
    customerName
    typeOfService
    specialtyId
    doctorId
    packageId
    vaccineId
    comment
    rating
    createdAt
  }
}
    `;
export type UpdateEvaluateMutationFn = Apollo.MutationFunction<UpdateEvaluateMutation, UpdateEvaluateMutationVariables>;

/**
 * __useUpdateEvaluateMutation__
 *
 * To run a mutation, you first call `useUpdateEvaluateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEvaluateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEvaluateMutation, { data, loading, error }] = useUpdateEvaluateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEvaluateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEvaluateMutation, UpdateEvaluateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEvaluateMutation, UpdateEvaluateMutationVariables>(UpdateEvaluateDocument, options);
      }
export type UpdateEvaluateMutationHookResult = ReturnType<typeof useUpdateEvaluateMutation>;
export type UpdateEvaluateMutationResult = Apollo.MutationResult<UpdateEvaluateMutation>;
export type UpdateEvaluateMutationOptions = Apollo.BaseMutationOptions<UpdateEvaluateMutation, UpdateEvaluateMutationVariables>;
export const ShareProfileDocument = gql`
    mutation shareProfile($profileId: String!, $customerKey: String!) {
  shareProfile(profileId: $profileId, customerKey: $customerKey) {
    id
  }
}
    `;
export type ShareProfileMutationFn = Apollo.MutationFunction<ShareProfileMutation, ShareProfileMutationVariables>;

/**
 * __useShareProfileMutation__
 *
 * To run a mutation, you first call `useShareProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareProfileMutation, { data, loading, error }] = useShareProfileMutation({
 *   variables: {
 *      profileId: // value for 'profileId'
 *      customerKey: // value for 'customerKey'
 *   },
 * });
 */
export function useShareProfileMutation(baseOptions?: Apollo.MutationHookOptions<ShareProfileMutation, ShareProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShareProfileMutation, ShareProfileMutationVariables>(ShareProfileDocument, options);
      }
export type ShareProfileMutationHookResult = ReturnType<typeof useShareProfileMutation>;
export type ShareProfileMutationResult = Apollo.MutationResult<ShareProfileMutation>;
export type ShareProfileMutationOptions = Apollo.BaseMutationOptions<ShareProfileMutation, ShareProfileMutationVariables>;
export const GetGeneralInforDocument = gql`
    query GetGeneralInfor {
  getGeneralInfor {
    company
    address
    copyrigth
    email
    hotline
    liscenceBusiness
    liscenceOparating
    ID
    logoFooter {
      filename
      type
      url
    }
    logoHeader {
      filename
      type
      url
    }
  }
}
    `;

/**
 * __useGetGeneralInforQuery__
 *
 * To run a query within a React component, call `useGetGeneralInforQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGeneralInforQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGeneralInforQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGeneralInforQuery(baseOptions?: Apollo.QueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
      }
export function useGetGeneralInforLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
        }
export function useGetGeneralInforSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGeneralInforQuery, GetGeneralInforQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGeneralInforQuery, GetGeneralInforQueryVariables>(GetGeneralInforDocument, options);
        }
export type GetGeneralInforQueryHookResult = ReturnType<typeof useGetGeneralInforQuery>;
export type GetGeneralInforLazyQueryHookResult = ReturnType<typeof useGetGeneralInforLazyQuery>;
export type GetGeneralInforSuspenseQueryHookResult = ReturnType<typeof useGetGeneralInforSuspenseQuery>;
export type GetGeneralInforQueryResult = Apollo.QueryResult<GetGeneralInforQuery, GetGeneralInforQueryVariables>;
export const CheckloginCustomerDocument = gql`
    query checkloginCustomer {
  checkloginCustomer {
    id
    avatar {
      filename
      type
      url
    }
    email
    username
    password
    roles
    customer {
      id
      customerKey
      fullname
      gender
      email
      numberPhone
      address
      dateOfBirth
      ethnic
      userId
    }
  }
}
    `;

/**
 * __useCheckloginCustomerQuery__
 *
 * To run a query within a React component, call `useCheckloginCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckloginCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckloginCustomerQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckloginCustomerQuery(baseOptions?: Apollo.QueryHookOptions<CheckloginCustomerQuery, CheckloginCustomerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckloginCustomerQuery, CheckloginCustomerQueryVariables>(CheckloginCustomerDocument, options);
      }
export function useCheckloginCustomerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckloginCustomerQuery, CheckloginCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckloginCustomerQuery, CheckloginCustomerQueryVariables>(CheckloginCustomerDocument, options);
        }
export function useCheckloginCustomerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CheckloginCustomerQuery, CheckloginCustomerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckloginCustomerQuery, CheckloginCustomerQueryVariables>(CheckloginCustomerDocument, options);
        }
export type CheckloginCustomerQueryHookResult = ReturnType<typeof useCheckloginCustomerQuery>;
export type CheckloginCustomerLazyQueryHookResult = ReturnType<typeof useCheckloginCustomerLazyQuery>;
export type CheckloginCustomerSuspenseQueryHookResult = ReturnType<typeof useCheckloginCustomerSuspenseQuery>;
export type CheckloginCustomerQueryResult = Apollo.QueryResult<CheckloginCustomerQuery, CheckloginCustomerQueryVariables>;
export const GetMedicalFacilityRegisInfoByIdDocument = gql`
    query getMedicalFacilityRegisInfoById($input: String!, $isClient: Boolean!) {
  getMedicalFacilityById(id: $input) {
    id
    medicalFacilityName
    address
    typeOfFacility
    status
    dateOff
    schedule
    image {
      filename
      type
      url
    }
    numberPhone
    email
    discription
    introduce
    lat
    lng
    userId
    taxCode
    legalRepresentation
    logo {
      filename
      type
      url
    }
    typeOfFacility
    operatingStatus
    totalDoctors(isClient: $isClient)
    totalPackages(isClient: $isClient)
    totalSpecialties(isClient: $isClient)
    totalVaccinations(isClient: $isClient)
  }
}
    `;

/**
 * __useGetMedicalFacilityRegisInfoByIdQuery__
 *
 * To run a query within a React component, call `useGetMedicalFacilityRegisInfoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalFacilityRegisInfoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalFacilityRegisInfoByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *      isClient: // value for 'isClient'
 *   },
 * });
 */
export function useGetMedicalFacilityRegisInfoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMedicalFacilityRegisInfoByIdQuery, GetMedicalFacilityRegisInfoByIdQueryVariables> & ({ variables: GetMedicalFacilityRegisInfoByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalFacilityRegisInfoByIdQuery, GetMedicalFacilityRegisInfoByIdQueryVariables>(GetMedicalFacilityRegisInfoByIdDocument, options);
      }
export function useGetMedicalFacilityRegisInfoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalFacilityRegisInfoByIdQuery, GetMedicalFacilityRegisInfoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalFacilityRegisInfoByIdQuery, GetMedicalFacilityRegisInfoByIdQueryVariables>(GetMedicalFacilityRegisInfoByIdDocument, options);
        }
export function useGetMedicalFacilityRegisInfoByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMedicalFacilityRegisInfoByIdQuery, GetMedicalFacilityRegisInfoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalFacilityRegisInfoByIdQuery, GetMedicalFacilityRegisInfoByIdQueryVariables>(GetMedicalFacilityRegisInfoByIdDocument, options);
        }
export type GetMedicalFacilityRegisInfoByIdQueryHookResult = ReturnType<typeof useGetMedicalFacilityRegisInfoByIdQuery>;
export type GetMedicalFacilityRegisInfoByIdLazyQueryHookResult = ReturnType<typeof useGetMedicalFacilityRegisInfoByIdLazyQuery>;
export type GetMedicalFacilityRegisInfoByIdSuspenseQueryHookResult = ReturnType<typeof useGetMedicalFacilityRegisInfoByIdSuspenseQuery>;
export type GetMedicalFacilityRegisInfoByIdQueryResult = Apollo.QueryResult<GetMedicalFacilityRegisInfoByIdQuery, GetMedicalFacilityRegisInfoByIdQueryVariables>;
export const GetProfileByCustomerIdDocument = gql`
    query getProfileByCustomerId($input: String!) {
  getProfileByCustomerId(id: $input) {
    id
    customerId
    fullname
    numberPhone
    email
    address
    gender
    dataOfBirth
    ethnic
    identity
    relationship
    job
    shares
  }
}
    `;

/**
 * __useGetProfileByCustomerIdQuery__
 *
 * To run a query within a React component, call `useGetProfileByCustomerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByCustomerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByCustomerIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetProfileByCustomerIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByCustomerIdQuery, GetProfileByCustomerIdQueryVariables> & ({ variables: GetProfileByCustomerIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByCustomerIdQuery, GetProfileByCustomerIdQueryVariables>(GetProfileByCustomerIdDocument, options);
      }
export function useGetProfileByCustomerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByCustomerIdQuery, GetProfileByCustomerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByCustomerIdQuery, GetProfileByCustomerIdQueryVariables>(GetProfileByCustomerIdDocument, options);
        }
export function useGetProfileByCustomerIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileByCustomerIdQuery, GetProfileByCustomerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByCustomerIdQuery, GetProfileByCustomerIdQueryVariables>(GetProfileByCustomerIdDocument, options);
        }
export type GetProfileByCustomerIdQueryHookResult = ReturnType<typeof useGetProfileByCustomerIdQuery>;
export type GetProfileByCustomerIdLazyQueryHookResult = ReturnType<typeof useGetProfileByCustomerIdLazyQuery>;
export type GetProfileByCustomerIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileByCustomerIdSuspenseQuery>;
export type GetProfileByCustomerIdQueryResult = Apollo.QueryResult<GetProfileByCustomerIdQuery, GetProfileByCustomerIdQueryVariables>;
export const GetProfileByCustomerKeyDocument = gql`
    query getProfileByCustomerKey($customerKey: String!) {
  getProfileByCustomerKey(customerKey: $customerKey) {
    id
    customerId
    fullname
    numberPhone
    email
    address
    gender
    dataOfBirth
    ethnic
    identity
    relationship
    job
    customer {
      fullname
    }
  }
}
    `;

/**
 * __useGetProfileByCustomerKeyQuery__
 *
 * To run a query within a React component, call `useGetProfileByCustomerKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByCustomerKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByCustomerKeyQuery({
 *   variables: {
 *      customerKey: // value for 'customerKey'
 *   },
 * });
 */
export function useGetProfileByCustomerKeyQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByCustomerKeyQuery, GetProfileByCustomerKeyQueryVariables> & ({ variables: GetProfileByCustomerKeyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByCustomerKeyQuery, GetProfileByCustomerKeyQueryVariables>(GetProfileByCustomerKeyDocument, options);
      }
export function useGetProfileByCustomerKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByCustomerKeyQuery, GetProfileByCustomerKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByCustomerKeyQuery, GetProfileByCustomerKeyQueryVariables>(GetProfileByCustomerKeyDocument, options);
        }
export function useGetProfileByCustomerKeySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileByCustomerKeyQuery, GetProfileByCustomerKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByCustomerKeyQuery, GetProfileByCustomerKeyQueryVariables>(GetProfileByCustomerKeyDocument, options);
        }
export type GetProfileByCustomerKeyQueryHookResult = ReturnType<typeof useGetProfileByCustomerKeyQuery>;
export type GetProfileByCustomerKeyLazyQueryHookResult = ReturnType<typeof useGetProfileByCustomerKeyLazyQuery>;
export type GetProfileByCustomerKeySuspenseQueryHookResult = ReturnType<typeof useGetProfileByCustomerKeySuspenseQuery>;
export type GetProfileByCustomerKeyQueryResult = Apollo.QueryResult<GetProfileByCustomerKeyQuery, GetProfileByCustomerKeyQueryVariables>;
export const GetTopMedicalFacilitiesDocument = gql`
    query getTopMedicalFacilities($limit: Float!, $typeFacility: String!) {
  getTopMedicalFacilities(limit: $limit, typeFacility: $typeFacility) {
    id
    userId
    medicalFacilityName
    address
    numberPhone
    email
    logo {
      filename
      type
      url
    }
    image {
      filename
      type
      url
    }
    lat
    lng
    discription
    introduce
    typeOfFacility
    operatingStatus
    legalRepresentation
    taxCode
    status
    dateOff
    schedule
    typeOfFacility
  }
}
    `;

/**
 * __useGetTopMedicalFacilitiesQuery__
 *
 * To run a query within a React component, call `useGetTopMedicalFacilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopMedicalFacilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopMedicalFacilitiesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      typeFacility: // value for 'typeFacility'
 *   },
 * });
 */
export function useGetTopMedicalFacilitiesQuery(baseOptions: Apollo.QueryHookOptions<GetTopMedicalFacilitiesQuery, GetTopMedicalFacilitiesQueryVariables> & ({ variables: GetTopMedicalFacilitiesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopMedicalFacilitiesQuery, GetTopMedicalFacilitiesQueryVariables>(GetTopMedicalFacilitiesDocument, options);
      }
export function useGetTopMedicalFacilitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopMedicalFacilitiesQuery, GetTopMedicalFacilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopMedicalFacilitiesQuery, GetTopMedicalFacilitiesQueryVariables>(GetTopMedicalFacilitiesDocument, options);
        }
export function useGetTopMedicalFacilitiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTopMedicalFacilitiesQuery, GetTopMedicalFacilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTopMedicalFacilitiesQuery, GetTopMedicalFacilitiesQueryVariables>(GetTopMedicalFacilitiesDocument, options);
        }
export type GetTopMedicalFacilitiesQueryHookResult = ReturnType<typeof useGetTopMedicalFacilitiesQuery>;
export type GetTopMedicalFacilitiesLazyQueryHookResult = ReturnType<typeof useGetTopMedicalFacilitiesLazyQuery>;
export type GetTopMedicalFacilitiesSuspenseQueryHookResult = ReturnType<typeof useGetTopMedicalFacilitiesSuspenseQuery>;
export type GetTopMedicalFacilitiesQueryResult = Apollo.QueryResult<GetTopMedicalFacilitiesQuery, GetTopMedicalFacilitiesQueryVariables>;
export const GetAllMedicalFacilityPaginationForClientDocument = gql`
    query getAllMedicalFacilityPaginationForClient($search: String, $searchField: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $typeOfFacility: String) {
  getAllMedicalFacilityPaginationForClient(
    search: $search
    searchField: $searchField
    page: $page
    limit: $limit
    sortField: $sortField
    sortOrder: $sortOrder
    type: $typeOfFacility
  ) {
    id
    userId
    medicalFacilityName
    address
    numberPhone
    email
    logo {
      filename
      type
      url
    }
    image {
      filename
      type
      url
    }
    lat
    lng
    discription
    introduce
    typeOfFacility
    operatingStatus
    legalRepresentation
    taxCode
    status
    dateOff
    schedule
  }
}
    `;

/**
 * __useGetAllMedicalFacilityPaginationForClientQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalFacilityPaginationForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalFacilityPaginationForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalFacilityPaginationForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      searchField: // value for 'searchField'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      typeOfFacility: // value for 'typeOfFacility'
 *   },
 * });
 */
export function useGetAllMedicalFacilityPaginationForClientQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalFacilityPaginationForClientQuery, GetAllMedicalFacilityPaginationForClientQueryVariables> & ({ variables: GetAllMedicalFacilityPaginationForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalFacilityPaginationForClientQuery, GetAllMedicalFacilityPaginationForClientQueryVariables>(GetAllMedicalFacilityPaginationForClientDocument, options);
      }
export function useGetAllMedicalFacilityPaginationForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalFacilityPaginationForClientQuery, GetAllMedicalFacilityPaginationForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalFacilityPaginationForClientQuery, GetAllMedicalFacilityPaginationForClientQueryVariables>(GetAllMedicalFacilityPaginationForClientDocument, options);
        }
export function useGetAllMedicalFacilityPaginationForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalFacilityPaginationForClientQuery, GetAllMedicalFacilityPaginationForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalFacilityPaginationForClientQuery, GetAllMedicalFacilityPaginationForClientQueryVariables>(GetAllMedicalFacilityPaginationForClientDocument, options);
        }
export type GetAllMedicalFacilityPaginationForClientQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationForClientQuery>;
export type GetAllMedicalFacilityPaginationForClientLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationForClientLazyQuery>;
export type GetAllMedicalFacilityPaginationForClientSuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationForClientSuspenseQuery>;
export type GetAllMedicalFacilityPaginationForClientQueryResult = Apollo.QueryResult<GetAllMedicalFacilityPaginationForClientQuery, GetAllMedicalFacilityPaginationForClientQueryVariables>;
export const GetTotalFacilitiesCountForClientDocument = gql`
    query getTotalFacilitiesCountForClient($search: String, $searchField: String, $type: String) {
  getTotalFacilitiesCountForClient(
    search: $search
    searchField: $searchField
    type: $type
  )
}
    `;

/**
 * __useGetTotalFacilitiesCountForClientQuery__
 *
 * To run a query within a React component, call `useGetTotalFacilitiesCountForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalFacilitiesCountForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalFacilitiesCountForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      searchField: // value for 'searchField'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetTotalFacilitiesCountForClientQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalFacilitiesCountForClientQuery, GetTotalFacilitiesCountForClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalFacilitiesCountForClientQuery, GetTotalFacilitiesCountForClientQueryVariables>(GetTotalFacilitiesCountForClientDocument, options);
      }
export function useGetTotalFacilitiesCountForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalFacilitiesCountForClientQuery, GetTotalFacilitiesCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalFacilitiesCountForClientQuery, GetTotalFacilitiesCountForClientQueryVariables>(GetTotalFacilitiesCountForClientDocument, options);
        }
export function useGetTotalFacilitiesCountForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalFacilitiesCountForClientQuery, GetTotalFacilitiesCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalFacilitiesCountForClientQuery, GetTotalFacilitiesCountForClientQueryVariables>(GetTotalFacilitiesCountForClientDocument, options);
        }
export type GetTotalFacilitiesCountForClientQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountForClientQuery>;
export type GetTotalFacilitiesCountForClientLazyQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountForClientLazyQuery>;
export type GetTotalFacilitiesCountForClientSuspenseQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountForClientSuspenseQuery>;
export type GetTotalFacilitiesCountForClientQueryResult = Apollo.QueryResult<GetTotalFacilitiesCountForClientQuery, GetTotalFacilitiesCountForClientQueryVariables>;
export const GetListMedicalSpecialtyRegisInfoByFacilityIdDocument = gql`
    query getListMedicalSpecialtyRegisInfoByFacilityId($input: String!, $isClient: Boolean!) {
  getMedicalFacilityById(id: $input) {
    id
    medicalSpecialties(isClient: $isClient) {
      id
      specialtyName
      discription
      price
      medicalFactilityId
      workSchedule {
        dayOff
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            endTime
            startTime
          }
        }
        status
      }
    }
  }
}
    `;

/**
 * __useGetListMedicalSpecialtyRegisInfoByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetListMedicalSpecialtyRegisInfoByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListMedicalSpecialtyRegisInfoByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListMedicalSpecialtyRegisInfoByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *      isClient: // value for 'isClient'
 *   },
 * });
 */
export function useGetListMedicalSpecialtyRegisInfoByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetListMedicalSpecialtyRegisInfoByFacilityIdQuery, GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables> & ({ variables: GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListMedicalSpecialtyRegisInfoByFacilityIdQuery, GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables>(GetListMedicalSpecialtyRegisInfoByFacilityIdDocument, options);
      }
export function useGetListMedicalSpecialtyRegisInfoByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListMedicalSpecialtyRegisInfoByFacilityIdQuery, GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListMedicalSpecialtyRegisInfoByFacilityIdQuery, GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables>(GetListMedicalSpecialtyRegisInfoByFacilityIdDocument, options);
        }
export function useGetListMedicalSpecialtyRegisInfoByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListMedicalSpecialtyRegisInfoByFacilityIdQuery, GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListMedicalSpecialtyRegisInfoByFacilityIdQuery, GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables>(GetListMedicalSpecialtyRegisInfoByFacilityIdDocument, options);
        }
export type GetListMedicalSpecialtyRegisInfoByFacilityIdQueryHookResult = ReturnType<typeof useGetListMedicalSpecialtyRegisInfoByFacilityIdQuery>;
export type GetListMedicalSpecialtyRegisInfoByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetListMedicalSpecialtyRegisInfoByFacilityIdLazyQuery>;
export type GetListMedicalSpecialtyRegisInfoByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetListMedicalSpecialtyRegisInfoByFacilityIdSuspenseQuery>;
export type GetListMedicalSpecialtyRegisInfoByFacilityIdQueryResult = Apollo.QueryResult<GetListMedicalSpecialtyRegisInfoByFacilityIdQuery, GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables>;
export const GetListDoctorRegisInfoByFacilityIdDocument = gql`
    query getListDoctorRegisInfoByFacilityId($input: String!, $isClient: Boolean!) {
  getMedicalFacilityById(id: $input) {
    id
    doctors(isClient: $isClient) {
      id
      medicalFactilitiesId
      doctorName
      gender
      email
      numberPhone
      degree
      academicTitle
      specialistId
      avatar {
        filename
        type
        url
      }
      specialty {
        id
        specialtyName
        discription
        price
        medicalFactilityId
      }
      userId
      price
      discription
      workSchedule {
        dayOff
        status
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            endTime
            startTime
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetListDoctorRegisInfoByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetListDoctorRegisInfoByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListDoctorRegisInfoByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListDoctorRegisInfoByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *      isClient: // value for 'isClient'
 *   },
 * });
 */
export function useGetListDoctorRegisInfoByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetListDoctorRegisInfoByFacilityIdQuery, GetListDoctorRegisInfoByFacilityIdQueryVariables> & ({ variables: GetListDoctorRegisInfoByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListDoctorRegisInfoByFacilityIdQuery, GetListDoctorRegisInfoByFacilityIdQueryVariables>(GetListDoctorRegisInfoByFacilityIdDocument, options);
      }
export function useGetListDoctorRegisInfoByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListDoctorRegisInfoByFacilityIdQuery, GetListDoctorRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListDoctorRegisInfoByFacilityIdQuery, GetListDoctorRegisInfoByFacilityIdQueryVariables>(GetListDoctorRegisInfoByFacilityIdDocument, options);
        }
export function useGetListDoctorRegisInfoByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListDoctorRegisInfoByFacilityIdQuery, GetListDoctorRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListDoctorRegisInfoByFacilityIdQuery, GetListDoctorRegisInfoByFacilityIdQueryVariables>(GetListDoctorRegisInfoByFacilityIdDocument, options);
        }
export type GetListDoctorRegisInfoByFacilityIdQueryHookResult = ReturnType<typeof useGetListDoctorRegisInfoByFacilityIdQuery>;
export type GetListDoctorRegisInfoByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetListDoctorRegisInfoByFacilityIdLazyQuery>;
export type GetListDoctorRegisInfoByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetListDoctorRegisInfoByFacilityIdSuspenseQuery>;
export type GetListDoctorRegisInfoByFacilityIdQueryResult = Apollo.QueryResult<GetListDoctorRegisInfoByFacilityIdQuery, GetListDoctorRegisInfoByFacilityIdQueryVariables>;
export const GetListPackageRegisInfoByFacilityIdDocument = gql`
    query getListPackageRegisInfoByFacilityId($input: String!, $isClient: Boolean!) {
  getMedicalFacilityById(id: $input) {
    id
    packages(isClient: $isClient) {
      id
      packageName
      gender
      examinationDetails
      price
      medicalFactilitiesId
      image {
        filename
        type
        url
      }
      workSchedule {
        dayOff
        status
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            endTime
            startTime
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetListPackageRegisInfoByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetListPackageRegisInfoByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListPackageRegisInfoByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListPackageRegisInfoByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *      isClient: // value for 'isClient'
 *   },
 * });
 */
export function useGetListPackageRegisInfoByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetListPackageRegisInfoByFacilityIdQuery, GetListPackageRegisInfoByFacilityIdQueryVariables> & ({ variables: GetListPackageRegisInfoByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListPackageRegisInfoByFacilityIdQuery, GetListPackageRegisInfoByFacilityIdQueryVariables>(GetListPackageRegisInfoByFacilityIdDocument, options);
      }
export function useGetListPackageRegisInfoByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListPackageRegisInfoByFacilityIdQuery, GetListPackageRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListPackageRegisInfoByFacilityIdQuery, GetListPackageRegisInfoByFacilityIdQueryVariables>(GetListPackageRegisInfoByFacilityIdDocument, options);
        }
export function useGetListPackageRegisInfoByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListPackageRegisInfoByFacilityIdQuery, GetListPackageRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListPackageRegisInfoByFacilityIdQuery, GetListPackageRegisInfoByFacilityIdQueryVariables>(GetListPackageRegisInfoByFacilityIdDocument, options);
        }
export type GetListPackageRegisInfoByFacilityIdQueryHookResult = ReturnType<typeof useGetListPackageRegisInfoByFacilityIdQuery>;
export type GetListPackageRegisInfoByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetListPackageRegisInfoByFacilityIdLazyQuery>;
export type GetListPackageRegisInfoByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetListPackageRegisInfoByFacilityIdSuspenseQuery>;
export type GetListPackageRegisInfoByFacilityIdQueryResult = Apollo.QueryResult<GetListPackageRegisInfoByFacilityIdQuery, GetListPackageRegisInfoByFacilityIdQueryVariables>;
export const GetListVaccinationRegisInfoByFacilityIdDocument = gql`
    query getListVaccinationRegisInfoByFacilityId($input: String!, $isClient: Boolean!) {
  getMedicalFacilityById(id: $input) {
    id
    vaccinations(isClient: $isClient) {
      id
      vaccineName
      countryOfOrigin
      indication
      medicalFactilitiesId
      price
      note
      prophylactic
      workSchedule {
        dayOff
        status
        numberSlot
        schedule {
          dayOfWeek
          sessions {
            endTime
            startTime
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetListVaccinationRegisInfoByFacilityIdQuery__
 *
 * To run a query within a React component, call `useGetListVaccinationRegisInfoByFacilityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListVaccinationRegisInfoByFacilityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListVaccinationRegisInfoByFacilityIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *      isClient: // value for 'isClient'
 *   },
 * });
 */
export function useGetListVaccinationRegisInfoByFacilityIdQuery(baseOptions: Apollo.QueryHookOptions<GetListVaccinationRegisInfoByFacilityIdQuery, GetListVaccinationRegisInfoByFacilityIdQueryVariables> & ({ variables: GetListVaccinationRegisInfoByFacilityIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListVaccinationRegisInfoByFacilityIdQuery, GetListVaccinationRegisInfoByFacilityIdQueryVariables>(GetListVaccinationRegisInfoByFacilityIdDocument, options);
      }
export function useGetListVaccinationRegisInfoByFacilityIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListVaccinationRegisInfoByFacilityIdQuery, GetListVaccinationRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListVaccinationRegisInfoByFacilityIdQuery, GetListVaccinationRegisInfoByFacilityIdQueryVariables>(GetListVaccinationRegisInfoByFacilityIdDocument, options);
        }
export function useGetListVaccinationRegisInfoByFacilityIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListVaccinationRegisInfoByFacilityIdQuery, GetListVaccinationRegisInfoByFacilityIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListVaccinationRegisInfoByFacilityIdQuery, GetListVaccinationRegisInfoByFacilityIdQueryVariables>(GetListVaccinationRegisInfoByFacilityIdDocument, options);
        }
export type GetListVaccinationRegisInfoByFacilityIdQueryHookResult = ReturnType<typeof useGetListVaccinationRegisInfoByFacilityIdQuery>;
export type GetListVaccinationRegisInfoByFacilityIdLazyQueryHookResult = ReturnType<typeof useGetListVaccinationRegisInfoByFacilityIdLazyQuery>;
export type GetListVaccinationRegisInfoByFacilityIdSuspenseQueryHookResult = ReturnType<typeof useGetListVaccinationRegisInfoByFacilityIdSuspenseQuery>;
export type GetListVaccinationRegisInfoByFacilityIdQueryResult = Apollo.QueryResult<GetListVaccinationRegisInfoByFacilityIdQuery, GetListVaccinationRegisInfoByFacilityIdQueryVariables>;
export const GetAllRegisOfServiceDocument = gql`
    query getAllRegisOfService($input: GetRegisterHaveInput!) {
  getAllRegisOfService(input: $input) {
    id
    date
    doctorId
    session {
      endTime
      startTime
      exceptions {
        dates
        numbeSlot
        open
      }
    }
    cancel
    packageId
    specialtyId
    vaccineId
    typeOfService
    packageId
    state
    profileId
    createdAt
  }
}
    `;

/**
 * __useGetAllRegisOfServiceQuery__
 *
 * To run a query within a React component, call `useGetAllRegisOfServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRegisOfServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRegisOfServiceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllRegisOfServiceQuery(baseOptions: Apollo.QueryHookOptions<GetAllRegisOfServiceQuery, GetAllRegisOfServiceQueryVariables> & ({ variables: GetAllRegisOfServiceQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRegisOfServiceQuery, GetAllRegisOfServiceQueryVariables>(GetAllRegisOfServiceDocument, options);
      }
export function useGetAllRegisOfServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRegisOfServiceQuery, GetAllRegisOfServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRegisOfServiceQuery, GetAllRegisOfServiceQueryVariables>(GetAllRegisOfServiceDocument, options);
        }
export function useGetAllRegisOfServiceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllRegisOfServiceQuery, GetAllRegisOfServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllRegisOfServiceQuery, GetAllRegisOfServiceQueryVariables>(GetAllRegisOfServiceDocument, options);
        }
export type GetAllRegisOfServiceQueryHookResult = ReturnType<typeof useGetAllRegisOfServiceQuery>;
export type GetAllRegisOfServiceLazyQueryHookResult = ReturnType<typeof useGetAllRegisOfServiceLazyQuery>;
export type GetAllRegisOfServiceSuspenseQueryHookResult = ReturnType<typeof useGetAllRegisOfServiceSuspenseQuery>;
export type GetAllRegisOfServiceQueryResult = Apollo.QueryResult<GetAllRegisOfServiceQuery, GetAllRegisOfServiceQueryVariables>;
export const GetProfileTicketByCustomerIdDocument = gql`
    query getProfileTicketByCustomerId($input: String!, $cancel: Boolean, $stateRegis: String) {
  getProfileByCustomerId(id: $input) {
    id
    customerId
    fullname
    numberPhone
    email
    address
    gender
    dataOfBirth
    ethnic
    identity
    relationship
    job
    register(cancel: $cancel, stateRegis: $stateRegis) {
      id
      date
      createdAt
      profileId
      typeOfService
      state
      cancel
      note
      session {
        endTime
        startTime
      }
      doctorId
      vaccineId
      packageId
      specialtyId
      doctor {
        id
        doctorName
        specialty {
          specialtyName
        }
        price
        facility {
          medicalFacilityName
          address
        }
      }
      specialty {
        specialtyName
        price
        facility {
          medicalFacilityName
          address
        }
      }
      vaccination {
        vaccineName
        price
        facility {
          medicalFacilityName
          address
        }
      }
      package {
        packageName
        price
        facility {
          medicalFacilityName
          address
        }
      }
    }
  }
}
    `;

/**
 * __useGetProfileTicketByCustomerIdQuery__
 *
 * To run a query within a React component, call `useGetProfileTicketByCustomerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileTicketByCustomerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileTicketByCustomerIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *      cancel: // value for 'cancel'
 *      stateRegis: // value for 'stateRegis'
 *   },
 * });
 */
export function useGetProfileTicketByCustomerIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfileTicketByCustomerIdQuery, GetProfileTicketByCustomerIdQueryVariables> & ({ variables: GetProfileTicketByCustomerIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileTicketByCustomerIdQuery, GetProfileTicketByCustomerIdQueryVariables>(GetProfileTicketByCustomerIdDocument, options);
      }
export function useGetProfileTicketByCustomerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileTicketByCustomerIdQuery, GetProfileTicketByCustomerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileTicketByCustomerIdQuery, GetProfileTicketByCustomerIdQueryVariables>(GetProfileTicketByCustomerIdDocument, options);
        }
export function useGetProfileTicketByCustomerIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileTicketByCustomerIdQuery, GetProfileTicketByCustomerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileTicketByCustomerIdQuery, GetProfileTicketByCustomerIdQueryVariables>(GetProfileTicketByCustomerIdDocument, options);
        }
export type GetProfileTicketByCustomerIdQueryHookResult = ReturnType<typeof useGetProfileTicketByCustomerIdQuery>;
export type GetProfileTicketByCustomerIdLazyQueryHookResult = ReturnType<typeof useGetProfileTicketByCustomerIdLazyQuery>;
export type GetProfileTicketByCustomerIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileTicketByCustomerIdSuspenseQuery>;
export type GetProfileTicketByCustomerIdQueryResult = Apollo.QueryResult<GetProfileTicketByCustomerIdQuery, GetProfileTicketByCustomerIdQueryVariables>;
export const GetProfileTicketByCustomerKeyDocument = gql`
    query getProfileTicketByCustomerKey($customerKey: String!, $cancel: Boolean, $stateRegis: String) {
  getProfileByCustomerKey(customerKey: $customerKey) {
    id
    customerId
    fullname
    numberPhone
    email
    address
    gender
    dataOfBirth
    ethnic
    identity
    relationship
    job
    customer {
      fullname
    }
    register(cancel: $cancel, stateRegis: $stateRegis) {
      id
      date
      createdAt
      profileId
      typeOfService
      state
      cancel
      session {
        endTime
        startTime
      }
      doctorId
      vaccineId
      packageId
      specialtyId
      doctor {
        id
        doctorName
        specialty {
          specialtyName
        }
        price
        facility {
          medicalFacilityName
          address
        }
      }
      specialty {
        specialtyName
        price
        facility {
          medicalFacilityName
          address
        }
      }
      vaccination {
        vaccineName
        price
        facility {
          medicalFacilityName
          address
        }
      }
      package {
        packageName
        price
        facility {
          medicalFacilityName
          address
        }
      }
    }
  }
}
    `;

/**
 * __useGetProfileTicketByCustomerKeyQuery__
 *
 * To run a query within a React component, call `useGetProfileTicketByCustomerKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileTicketByCustomerKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileTicketByCustomerKeyQuery({
 *   variables: {
 *      customerKey: // value for 'customerKey'
 *      cancel: // value for 'cancel'
 *      stateRegis: // value for 'stateRegis'
 *   },
 * });
 */
export function useGetProfileTicketByCustomerKeyQuery(baseOptions: Apollo.QueryHookOptions<GetProfileTicketByCustomerKeyQuery, GetProfileTicketByCustomerKeyQueryVariables> & ({ variables: GetProfileTicketByCustomerKeyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileTicketByCustomerKeyQuery, GetProfileTicketByCustomerKeyQueryVariables>(GetProfileTicketByCustomerKeyDocument, options);
      }
export function useGetProfileTicketByCustomerKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileTicketByCustomerKeyQuery, GetProfileTicketByCustomerKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileTicketByCustomerKeyQuery, GetProfileTicketByCustomerKeyQueryVariables>(GetProfileTicketByCustomerKeyDocument, options);
        }
export function useGetProfileTicketByCustomerKeySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileTicketByCustomerKeyQuery, GetProfileTicketByCustomerKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileTicketByCustomerKeyQuery, GetProfileTicketByCustomerKeyQueryVariables>(GetProfileTicketByCustomerKeyDocument, options);
        }
export type GetProfileTicketByCustomerKeyQueryHookResult = ReturnType<typeof useGetProfileTicketByCustomerKeyQuery>;
export type GetProfileTicketByCustomerKeyLazyQueryHookResult = ReturnType<typeof useGetProfileTicketByCustomerKeyLazyQuery>;
export type GetProfileTicketByCustomerKeySuspenseQueryHookResult = ReturnType<typeof useGetProfileTicketByCustomerKeySuspenseQuery>;
export type GetProfileTicketByCustomerKeyQueryResult = Apollo.QueryResult<GetProfileTicketByCustomerKeyQuery, GetProfileTicketByCustomerKeyQueryVariables>;
export const GetAllDoctorPaginationOfFacilityForClientDocument = gql`
    query getAllDoctorPaginationOfFacilityForClient($filter: FilterDoctorInput!, $page: Float, $limit: Float, $facilityId: String!, $sortField: String, $sortOrder: String) {
  getAllDoctorPaginationOfFacilityForClient(
    filter: $filter
    page: $page
    limit: $limit
    facilityId: $facilityId
    sortField: $sortField
    sortOrder: $sortOrder
  ) {
    id
    medicalFactilitiesId
    userId
    doctorName
    gender
    email
    numberPhone
    specialistId
    academicTitle
    degree
    price
    specialty {
      id
      discription
      medicalFactilityId
      price
      specialtyName
    }
    discription
    avatar {
      filename
      type
      url
    }
    workSchedule {
      dayOff
      numberSlot
      status
      schedule {
        dayOfWeek
        sessions {
          endTime
          startTime
          exceptions {
            dates
            numbeSlot
            open
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllDoctorPaginationOfFacilityForClientQuery__
 *
 * To run a query within a React component, call `useGetAllDoctorPaginationOfFacilityForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDoctorPaginationOfFacilityForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDoctorPaginationOfFacilityForClientQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      facilityId: // value for 'facilityId'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetAllDoctorPaginationOfFacilityForClientQuery(baseOptions: Apollo.QueryHookOptions<GetAllDoctorPaginationOfFacilityForClientQuery, GetAllDoctorPaginationOfFacilityForClientQueryVariables> & ({ variables: GetAllDoctorPaginationOfFacilityForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDoctorPaginationOfFacilityForClientQuery, GetAllDoctorPaginationOfFacilityForClientQueryVariables>(GetAllDoctorPaginationOfFacilityForClientDocument, options);
      }
export function useGetAllDoctorPaginationOfFacilityForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDoctorPaginationOfFacilityForClientQuery, GetAllDoctorPaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDoctorPaginationOfFacilityForClientQuery, GetAllDoctorPaginationOfFacilityForClientQueryVariables>(GetAllDoctorPaginationOfFacilityForClientDocument, options);
        }
export function useGetAllDoctorPaginationOfFacilityForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllDoctorPaginationOfFacilityForClientQuery, GetAllDoctorPaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllDoctorPaginationOfFacilityForClientQuery, GetAllDoctorPaginationOfFacilityForClientQueryVariables>(GetAllDoctorPaginationOfFacilityForClientDocument, options);
        }
export type GetAllDoctorPaginationOfFacilityForClientQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilityForClientQuery>;
export type GetAllDoctorPaginationOfFacilityForClientLazyQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilityForClientLazyQuery>;
export type GetAllDoctorPaginationOfFacilityForClientSuspenseQueryHookResult = ReturnType<typeof useGetAllDoctorPaginationOfFacilityForClientSuspenseQuery>;
export type GetAllDoctorPaginationOfFacilityForClientQueryResult = Apollo.QueryResult<GetAllDoctorPaginationOfFacilityForClientQuery, GetAllDoctorPaginationOfFacilityForClientQueryVariables>;
export const GetTotalDoctorsCountForClientDocument = gql`
    query getTotalDoctorsCountForClient($filter: FilterDoctorInput!, $facilityId: String!) {
  getTotalDoctorsCountForClient(filter: $filter, facilityId: $facilityId)
}
    `;

/**
 * __useGetTotalDoctorsCountForClientQuery__
 *
 * To run a query within a React component, call `useGetTotalDoctorsCountForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalDoctorsCountForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalDoctorsCountForClientQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetTotalDoctorsCountForClientQuery(baseOptions: Apollo.QueryHookOptions<GetTotalDoctorsCountForClientQuery, GetTotalDoctorsCountForClientQueryVariables> & ({ variables: GetTotalDoctorsCountForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalDoctorsCountForClientQuery, GetTotalDoctorsCountForClientQueryVariables>(GetTotalDoctorsCountForClientDocument, options);
      }
export function useGetTotalDoctorsCountForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalDoctorsCountForClientQuery, GetTotalDoctorsCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalDoctorsCountForClientQuery, GetTotalDoctorsCountForClientQueryVariables>(GetTotalDoctorsCountForClientDocument, options);
        }
export function useGetTotalDoctorsCountForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalDoctorsCountForClientQuery, GetTotalDoctorsCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalDoctorsCountForClientQuery, GetTotalDoctorsCountForClientQueryVariables>(GetTotalDoctorsCountForClientDocument, options);
        }
export type GetTotalDoctorsCountForClientQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountForClientQuery>;
export type GetTotalDoctorsCountForClientLazyQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountForClientLazyQuery>;
export type GetTotalDoctorsCountForClientSuspenseQueryHookResult = ReturnType<typeof useGetTotalDoctorsCountForClientSuspenseQuery>;
export type GetTotalDoctorsCountForClientQueryResult = Apollo.QueryResult<GetTotalDoctorsCountForClientQuery, GetTotalDoctorsCountForClientQueryVariables>;
export const GetTotalPackagesCountForClientDocument = gql`
    query getTotalPackagesCountForClient($search: String, $facilityId: String!) {
  getTotalPackagesCountForClient(search: $search, facilityId: $facilityId)
}
    `;

/**
 * __useGetTotalPackagesCountForClientQuery__
 *
 * To run a query within a React component, call `useGetTotalPackagesCountForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalPackagesCountForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalPackagesCountForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetTotalPackagesCountForClientQuery(baseOptions: Apollo.QueryHookOptions<GetTotalPackagesCountForClientQuery, GetTotalPackagesCountForClientQueryVariables> & ({ variables: GetTotalPackagesCountForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalPackagesCountForClientQuery, GetTotalPackagesCountForClientQueryVariables>(GetTotalPackagesCountForClientDocument, options);
      }
export function useGetTotalPackagesCountForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalPackagesCountForClientQuery, GetTotalPackagesCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalPackagesCountForClientQuery, GetTotalPackagesCountForClientQueryVariables>(GetTotalPackagesCountForClientDocument, options);
        }
export function useGetTotalPackagesCountForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalPackagesCountForClientQuery, GetTotalPackagesCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalPackagesCountForClientQuery, GetTotalPackagesCountForClientQueryVariables>(GetTotalPackagesCountForClientDocument, options);
        }
export type GetTotalPackagesCountForClientQueryHookResult = ReturnType<typeof useGetTotalPackagesCountForClientQuery>;
export type GetTotalPackagesCountForClientLazyQueryHookResult = ReturnType<typeof useGetTotalPackagesCountForClientLazyQuery>;
export type GetTotalPackagesCountForClientSuspenseQueryHookResult = ReturnType<typeof useGetTotalPackagesCountForClientSuspenseQuery>;
export type GetTotalPackagesCountForClientQueryResult = Apollo.QueryResult<GetTotalPackagesCountForClientQuery, GetTotalPackagesCountForClientQueryVariables>;
export const GetAllPackagePaginationOfFacilityForClientDocument = gql`
    query getAllPackagePaginationOfFacilityForClient($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $facilityId: String!) {
  getAllPackagePaginationOfFacilityForClient(
    search: $search
    page: $page
    limit: $limit
    sortField: $sortField
    sortOrder: $sortOrder
    facilityId: $facilityId
  ) {
    id
    medicalFactilitiesId
    packageName
    gender
    price
    image {
      filename
      type
      url
    }
    examinationDetails
    workSchedule {
      dayOff
      status
      numberSlot
      schedule {
        dayOfWeek
        sessions {
          startTime
          endTime
          exceptions {
            dates
            numbeSlot
            open
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllPackagePaginationOfFacilityForClientQuery__
 *
 * To run a query within a React component, call `useGetAllPackagePaginationOfFacilityForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPackagePaginationOfFacilityForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPackagePaginationOfFacilityForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetAllPackagePaginationOfFacilityForClientQuery(baseOptions: Apollo.QueryHookOptions<GetAllPackagePaginationOfFacilityForClientQuery, GetAllPackagePaginationOfFacilityForClientQueryVariables> & ({ variables: GetAllPackagePaginationOfFacilityForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPackagePaginationOfFacilityForClientQuery, GetAllPackagePaginationOfFacilityForClientQueryVariables>(GetAllPackagePaginationOfFacilityForClientDocument, options);
      }
export function useGetAllPackagePaginationOfFacilityForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPackagePaginationOfFacilityForClientQuery, GetAllPackagePaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPackagePaginationOfFacilityForClientQuery, GetAllPackagePaginationOfFacilityForClientQueryVariables>(GetAllPackagePaginationOfFacilityForClientDocument, options);
        }
export function useGetAllPackagePaginationOfFacilityForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPackagePaginationOfFacilityForClientQuery, GetAllPackagePaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPackagePaginationOfFacilityForClientQuery, GetAllPackagePaginationOfFacilityForClientQueryVariables>(GetAllPackagePaginationOfFacilityForClientDocument, options);
        }
export type GetAllPackagePaginationOfFacilityForClientQueryHookResult = ReturnType<typeof useGetAllPackagePaginationOfFacilityForClientQuery>;
export type GetAllPackagePaginationOfFacilityForClientLazyQueryHookResult = ReturnType<typeof useGetAllPackagePaginationOfFacilityForClientLazyQuery>;
export type GetAllPackagePaginationOfFacilityForClientSuspenseQueryHookResult = ReturnType<typeof useGetAllPackagePaginationOfFacilityForClientSuspenseQuery>;
export type GetAllPackagePaginationOfFacilityForClientQueryResult = Apollo.QueryResult<GetAllPackagePaginationOfFacilityForClientQuery, GetAllPackagePaginationOfFacilityForClientQueryVariables>;
export const GetTotalMedicalSpecialtiesCountForClientDocument = gql`
    query getTotalMedicalSpecialtiesCountForClient($search: String, $facilityId: String!) {
  getTotalMedicalSpecialtiesCountForClient(
    search: $search
    facilityId: $facilityId
  )
}
    `;

/**
 * __useGetTotalMedicalSpecialtiesCountForClientQuery__
 *
 * To run a query within a React component, call `useGetTotalMedicalSpecialtiesCountForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalMedicalSpecialtiesCountForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalMedicalSpecialtiesCountForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetTotalMedicalSpecialtiesCountForClientQuery(baseOptions: Apollo.QueryHookOptions<GetTotalMedicalSpecialtiesCountForClientQuery, GetTotalMedicalSpecialtiesCountForClientQueryVariables> & ({ variables: GetTotalMedicalSpecialtiesCountForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalMedicalSpecialtiesCountForClientQuery, GetTotalMedicalSpecialtiesCountForClientQueryVariables>(GetTotalMedicalSpecialtiesCountForClientDocument, options);
      }
export function useGetTotalMedicalSpecialtiesCountForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalMedicalSpecialtiesCountForClientQuery, GetTotalMedicalSpecialtiesCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalMedicalSpecialtiesCountForClientQuery, GetTotalMedicalSpecialtiesCountForClientQueryVariables>(GetTotalMedicalSpecialtiesCountForClientDocument, options);
        }
export function useGetTotalMedicalSpecialtiesCountForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalMedicalSpecialtiesCountForClientQuery, GetTotalMedicalSpecialtiesCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalMedicalSpecialtiesCountForClientQuery, GetTotalMedicalSpecialtiesCountForClientQueryVariables>(GetTotalMedicalSpecialtiesCountForClientDocument, options);
        }
export type GetTotalMedicalSpecialtiesCountForClientQueryHookResult = ReturnType<typeof useGetTotalMedicalSpecialtiesCountForClientQuery>;
export type GetTotalMedicalSpecialtiesCountForClientLazyQueryHookResult = ReturnType<typeof useGetTotalMedicalSpecialtiesCountForClientLazyQuery>;
export type GetTotalMedicalSpecialtiesCountForClientSuspenseQueryHookResult = ReturnType<typeof useGetTotalMedicalSpecialtiesCountForClientSuspenseQuery>;
export type GetTotalMedicalSpecialtiesCountForClientQueryResult = Apollo.QueryResult<GetTotalMedicalSpecialtiesCountForClientQuery, GetTotalMedicalSpecialtiesCountForClientQueryVariables>;
export const GetAllMedicalSpecialtiesPaginationOfFacilityForClientDocument = gql`
    query getAllMedicalSpecialtiesPaginationOfFacilityForClient($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $facilityId: String!) {
  getAllMedicalSpecialtiesPaginationOfFacilityForClient(
    search: $search
    page: $page
    limit: $limit
    sortField: $sortField
    sortOrder: $sortOrder
    facilityId: $facilityId
  ) {
    id
    medicalFactilityId
    specialtyName
    price
    discription
    workSchedule {
      dayOff
      numberSlot
      status
      schedule {
        dayOfWeek
        sessions {
          endTime
          startTime
          exceptions {
            dates
            numbeSlot
            open
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery, GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables> & ({ variables: GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery, GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables>(GetAllMedicalSpecialtiesPaginationOfFacilityForClientDocument, options);
      }
export function useGetAllMedicalSpecialtiesPaginationOfFacilityForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery, GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery, GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables>(GetAllMedicalSpecialtiesPaginationOfFacilityForClientDocument, options);
        }
export function useGetAllMedicalSpecialtiesPaginationOfFacilityForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery, GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery, GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables>(GetAllMedicalSpecialtiesPaginationOfFacilityForClientDocument, options);
        }
export type GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery>;
export type GetAllMedicalSpecialtiesPaginationOfFacilityForClientLazyQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationOfFacilityForClientLazyQuery>;
export type GetAllMedicalSpecialtiesPaginationOfFacilityForClientSuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalSpecialtiesPaginationOfFacilityForClientSuspenseQuery>;
export type GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryResult = Apollo.QueryResult<GetAllMedicalSpecialtiesPaginationOfFacilityForClientQuery, GetAllMedicalSpecialtiesPaginationOfFacilityForClientQueryVariables>;
export const GetAllVaccinationPaginationOfFacilityForClientDocument = gql`
    query getAllVaccinationPaginationOfFacilityForClient($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $facilityId: String!) {
  getAllVaccinationPaginationOfFacilityForClient(
    search: $search
    page: $page
    limit: $limit
    sortField: $sortField
    sortOrder: $sortOrder
    facilityId: $facilityId
  ) {
    id
    medicalFactilitiesId
    vaccineName
    price
    countryOfOrigin
    prophylactic
    indication
    note
    workSchedule {
      dayOff
      numberSlot
      schedule {
        dayOfWeek
        sessions {
          startTime
          endTime
          exceptions {
            dates
            numbeSlot
            open
          }
        }
      }
      status
    }
  }
}
    `;

/**
 * __useGetAllVaccinationPaginationOfFacilityForClientQuery__
 *
 * To run a query within a React component, call `useGetAllVaccinationPaginationOfFacilityForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVaccinationPaginationOfFacilityForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVaccinationPaginationOfFacilityForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetAllVaccinationPaginationOfFacilityForClientQuery(baseOptions: Apollo.QueryHookOptions<GetAllVaccinationPaginationOfFacilityForClientQuery, GetAllVaccinationPaginationOfFacilityForClientQueryVariables> & ({ variables: GetAllVaccinationPaginationOfFacilityForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVaccinationPaginationOfFacilityForClientQuery, GetAllVaccinationPaginationOfFacilityForClientQueryVariables>(GetAllVaccinationPaginationOfFacilityForClientDocument, options);
      }
export function useGetAllVaccinationPaginationOfFacilityForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVaccinationPaginationOfFacilityForClientQuery, GetAllVaccinationPaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVaccinationPaginationOfFacilityForClientQuery, GetAllVaccinationPaginationOfFacilityForClientQueryVariables>(GetAllVaccinationPaginationOfFacilityForClientDocument, options);
        }
export function useGetAllVaccinationPaginationOfFacilityForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllVaccinationPaginationOfFacilityForClientQuery, GetAllVaccinationPaginationOfFacilityForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllVaccinationPaginationOfFacilityForClientQuery, GetAllVaccinationPaginationOfFacilityForClientQueryVariables>(GetAllVaccinationPaginationOfFacilityForClientDocument, options);
        }
export type GetAllVaccinationPaginationOfFacilityForClientQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationOfFacilityForClientQuery>;
export type GetAllVaccinationPaginationOfFacilityForClientLazyQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationOfFacilityForClientLazyQuery>;
export type GetAllVaccinationPaginationOfFacilityForClientSuspenseQueryHookResult = ReturnType<typeof useGetAllVaccinationPaginationOfFacilityForClientSuspenseQuery>;
export type GetAllVaccinationPaginationOfFacilityForClientQueryResult = Apollo.QueryResult<GetAllVaccinationPaginationOfFacilityForClientQuery, GetAllVaccinationPaginationOfFacilityForClientQueryVariables>;
export const GetTotalVaccinationsCountForClientDocument = gql`
    query getTotalVaccinationsCountForClient($search: String, $facilityId: String!) {
  getTotalVaccinationsCountForClient(search: $search, facilityId: $facilityId)
}
    `;

/**
 * __useGetTotalVaccinationsCountForClientQuery__
 *
 * To run a query within a React component, call `useGetTotalVaccinationsCountForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalVaccinationsCountForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalVaccinationsCountForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      facilityId: // value for 'facilityId'
 *   },
 * });
 */
export function useGetTotalVaccinationsCountForClientQuery(baseOptions: Apollo.QueryHookOptions<GetTotalVaccinationsCountForClientQuery, GetTotalVaccinationsCountForClientQueryVariables> & ({ variables: GetTotalVaccinationsCountForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalVaccinationsCountForClientQuery, GetTotalVaccinationsCountForClientQueryVariables>(GetTotalVaccinationsCountForClientDocument, options);
      }
export function useGetTotalVaccinationsCountForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalVaccinationsCountForClientQuery, GetTotalVaccinationsCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalVaccinationsCountForClientQuery, GetTotalVaccinationsCountForClientQueryVariables>(GetTotalVaccinationsCountForClientDocument, options);
        }
export function useGetTotalVaccinationsCountForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalVaccinationsCountForClientQuery, GetTotalVaccinationsCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalVaccinationsCountForClientQuery, GetTotalVaccinationsCountForClientQueryVariables>(GetTotalVaccinationsCountForClientDocument, options);
        }
export type GetTotalVaccinationsCountForClientQueryHookResult = ReturnType<typeof useGetTotalVaccinationsCountForClientQuery>;
export type GetTotalVaccinationsCountForClientLazyQueryHookResult = ReturnType<typeof useGetTotalVaccinationsCountForClientLazyQuery>;
export type GetTotalVaccinationsCountForClientSuspenseQueryHookResult = ReturnType<typeof useGetTotalVaccinationsCountForClientSuspenseQuery>;
export type GetTotalVaccinationsCountForClientQueryResult = Apollo.QueryResult<GetTotalVaccinationsCountForClientQuery, GetTotalVaccinationsCountForClientQueryVariables>;
export const GetAllMedicalFacilityHaveServicePaginationDocument = gql`
    query getAllMedicalFacilityHaveServicePagination($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $type: String) {
  getAllMedicalFacilityHaveSrvPaginationForClient(
    search: $search
    page: $page
    limit: $limit
    sortField: $sortField
    sortOrder: $sortOrder
    type: $type
  ) {
    id
    userId
    medicalFacilityName
    address
    numberPhone
    email
    logo {
      filename
      type
      url
    }
    image {
      filename
      type
      url
    }
    lat
    lng
    discription
    introduce
    typeOfFacility
    operatingStatus
    legalRepresentation
    taxCode
    status
    dateOff
    schedule
  }
}
    `;

/**
 * __useGetAllMedicalFacilityHaveServicePaginationQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalFacilityHaveServicePaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalFacilityHaveServicePaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalFacilityHaveServicePaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetAllMedicalFacilityHaveServicePaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalFacilityHaveServicePaginationQuery, GetAllMedicalFacilityHaveServicePaginationQueryVariables> & ({ variables: GetAllMedicalFacilityHaveServicePaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalFacilityHaveServicePaginationQuery, GetAllMedicalFacilityHaveServicePaginationQueryVariables>(GetAllMedicalFacilityHaveServicePaginationDocument, options);
      }
export function useGetAllMedicalFacilityHaveServicePaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalFacilityHaveServicePaginationQuery, GetAllMedicalFacilityHaveServicePaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalFacilityHaveServicePaginationQuery, GetAllMedicalFacilityHaveServicePaginationQueryVariables>(GetAllMedicalFacilityHaveServicePaginationDocument, options);
        }
export function useGetAllMedicalFacilityHaveServicePaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalFacilityHaveServicePaginationQuery, GetAllMedicalFacilityHaveServicePaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalFacilityHaveServicePaginationQuery, GetAllMedicalFacilityHaveServicePaginationQueryVariables>(GetAllMedicalFacilityHaveServicePaginationDocument, options);
        }
export type GetAllMedicalFacilityHaveServicePaginationQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityHaveServicePaginationQuery>;
export type GetAllMedicalFacilityHaveServicePaginationLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityHaveServicePaginationLazyQuery>;
export type GetAllMedicalFacilityHaveServicePaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityHaveServicePaginationSuspenseQuery>;
export type GetAllMedicalFacilityHaveServicePaginationQueryResult = Apollo.QueryResult<GetAllMedicalFacilityHaveServicePaginationQuery, GetAllMedicalFacilityHaveServicePaginationQueryVariables>;
export const GetTotalFacilitiesHaveSrvCountForClientDocument = gql`
    query getTotalFacilitiesHaveSrvCountForClient($search: String, $type: String) {
  getTotalFacilitiesHaveSrvCountForClient(search: $search, type: $type)
}
    `;

/**
 * __useGetTotalFacilitiesHaveSrvCountForClientQuery__
 *
 * To run a query within a React component, call `useGetTotalFacilitiesHaveSrvCountForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalFacilitiesHaveSrvCountForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalFacilitiesHaveSrvCountForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetTotalFacilitiesHaveSrvCountForClientQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalFacilitiesHaveSrvCountForClientQuery, GetTotalFacilitiesHaveSrvCountForClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalFacilitiesHaveSrvCountForClientQuery, GetTotalFacilitiesHaveSrvCountForClientQueryVariables>(GetTotalFacilitiesHaveSrvCountForClientDocument, options);
      }
export function useGetTotalFacilitiesHaveSrvCountForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalFacilitiesHaveSrvCountForClientQuery, GetTotalFacilitiesHaveSrvCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalFacilitiesHaveSrvCountForClientQuery, GetTotalFacilitiesHaveSrvCountForClientQueryVariables>(GetTotalFacilitiesHaveSrvCountForClientDocument, options);
        }
export function useGetTotalFacilitiesHaveSrvCountForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalFacilitiesHaveSrvCountForClientQuery, GetTotalFacilitiesHaveSrvCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalFacilitiesHaveSrvCountForClientQuery, GetTotalFacilitiesHaveSrvCountForClientQueryVariables>(GetTotalFacilitiesHaveSrvCountForClientDocument, options);
        }
export type GetTotalFacilitiesHaveSrvCountForClientQueryHookResult = ReturnType<typeof useGetTotalFacilitiesHaveSrvCountForClientQuery>;
export type GetTotalFacilitiesHaveSrvCountForClientLazyQueryHookResult = ReturnType<typeof useGetTotalFacilitiesHaveSrvCountForClientLazyQuery>;
export type GetTotalFacilitiesHaveSrvCountForClientSuspenseQueryHookResult = ReturnType<typeof useGetTotalFacilitiesHaveSrvCountForClientSuspenseQuery>;
export type GetTotalFacilitiesHaveSrvCountForClientQueryResult = Apollo.QueryResult<GetTotalFacilitiesHaveSrvCountForClientQuery, GetTotalFacilitiesHaveSrvCountForClientQueryVariables>;
export const GetAllBlogPaginationForClientDocument = gql`
    query getAllBlogPaginationForClient($search: String, $page: Float!, $limit: Float!, $sortOrder: String, $type: String) {
  getAllBlogPaginationForClient(
    search: $search
    page: $page
    limit: $limit
    sortOrder: $sortOrder
    type: $type
  ) {
    id
    slug
    title
    status
    content
    shortContent
    priority
    type
    keywords
    mainPhoto {
      filename
      type
      url
    }
    createdAt
    createdBy {
      username
      showName
      role
    }
    updatedAt
    updatedBy {
      username
      showName
      role
    }
    deletedAt
    deletedBy {
      role
      showName
      username
    }
  }
}
    `;

/**
 * __useGetAllBlogPaginationForClientQuery__
 *
 * To run a query within a React component, call `useGetAllBlogPaginationForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogPaginationForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogPaginationForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortOrder: // value for 'sortOrder'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetAllBlogPaginationForClientQuery(baseOptions: Apollo.QueryHookOptions<GetAllBlogPaginationForClientQuery, GetAllBlogPaginationForClientQueryVariables> & ({ variables: GetAllBlogPaginationForClientQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogPaginationForClientQuery, GetAllBlogPaginationForClientQueryVariables>(GetAllBlogPaginationForClientDocument, options);
      }
export function useGetAllBlogPaginationForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogPaginationForClientQuery, GetAllBlogPaginationForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogPaginationForClientQuery, GetAllBlogPaginationForClientQueryVariables>(GetAllBlogPaginationForClientDocument, options);
        }
export function useGetAllBlogPaginationForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBlogPaginationForClientQuery, GetAllBlogPaginationForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogPaginationForClientQuery, GetAllBlogPaginationForClientQueryVariables>(GetAllBlogPaginationForClientDocument, options);
        }
export type GetAllBlogPaginationForClientQueryHookResult = ReturnType<typeof useGetAllBlogPaginationForClientQuery>;
export type GetAllBlogPaginationForClientLazyQueryHookResult = ReturnType<typeof useGetAllBlogPaginationForClientLazyQuery>;
export type GetAllBlogPaginationForClientSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogPaginationForClientSuspenseQuery>;
export type GetAllBlogPaginationForClientQueryResult = Apollo.QueryResult<GetAllBlogPaginationForClientQuery, GetAllBlogPaginationForClientQueryVariables>;
export const GetTotalBlogsCountForClientDocument = gql`
    query getTotalBlogsCountForClient($search: String, $type: String) {
  getTotalBlogsCountForClient(search: $search, type: $type)
}
    `;

/**
 * __useGetTotalBlogsCountForClientQuery__
 *
 * To run a query within a React component, call `useGetTotalBlogsCountForClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalBlogsCountForClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalBlogsCountForClientQuery({
 *   variables: {
 *      search: // value for 'search'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetTotalBlogsCountForClientQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalBlogsCountForClientQuery, GetTotalBlogsCountForClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalBlogsCountForClientQuery, GetTotalBlogsCountForClientQueryVariables>(GetTotalBlogsCountForClientDocument, options);
      }
export function useGetTotalBlogsCountForClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalBlogsCountForClientQuery, GetTotalBlogsCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalBlogsCountForClientQuery, GetTotalBlogsCountForClientQueryVariables>(GetTotalBlogsCountForClientDocument, options);
        }
export function useGetTotalBlogsCountForClientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalBlogsCountForClientQuery, GetTotalBlogsCountForClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalBlogsCountForClientQuery, GetTotalBlogsCountForClientQueryVariables>(GetTotalBlogsCountForClientDocument, options);
        }
export type GetTotalBlogsCountForClientQueryHookResult = ReturnType<typeof useGetTotalBlogsCountForClientQuery>;
export type GetTotalBlogsCountForClientLazyQueryHookResult = ReturnType<typeof useGetTotalBlogsCountForClientLazyQuery>;
export type GetTotalBlogsCountForClientSuspenseQueryHookResult = ReturnType<typeof useGetTotalBlogsCountForClientSuspenseQuery>;
export type GetTotalBlogsCountForClientQueryResult = Apollo.QueryResult<GetTotalBlogsCountForClientQuery, GetTotalBlogsCountForClientQueryVariables>;
export const GetBlogBySlugDocument = gql`
    query getBlogBySlug($slug: String!) {
  getBlogBySlug(slug: $slug) {
    id
    slug
    title
    content
    shortContent
    priority
    type
    keywords
    mainPhoto {
      filename
      type
      url
    }
    status
    createdAt
    createdBy {
      username
      showName
      role
    }
    updatedAt
    updatedBy {
      username
      showName
      role
    }
    deletedAt
    deletedBy {
      role
      showName
      username
    }
  }
}
    `;

/**
 * __useGetBlogBySlugQuery__
 *
 * To run a query within a React component, call `useGetBlogBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables> & ({ variables: GetBlogBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
      }
export function useGetBlogBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
        }
export function useGetBlogBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>(GetBlogBySlugDocument, options);
        }
export type GetBlogBySlugQueryHookResult = ReturnType<typeof useGetBlogBySlugQuery>;
export type GetBlogBySlugLazyQueryHookResult = ReturnType<typeof useGetBlogBySlugLazyQuery>;
export type GetBlogBySlugSuspenseQueryHookResult = ReturnType<typeof useGetBlogBySlugSuspenseQuery>;
export type GetBlogBySlugQueryResult = Apollo.QueryResult<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>;
export const GetAllNotificationByUserIdDocument = gql`
    query getAllNotificationByUserId($input: String!) {
  getAllNotificationByUserId(userId: $input) {
    id
    content
    detailPath
    createdAt
    status
    userId
  }
}
    `;

/**
 * __useGetAllNotificationByUserIdQuery__
 *
 * To run a query within a React component, call `useGetAllNotificationByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllNotificationByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllNotificationByUserIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllNotificationByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetAllNotificationByUserIdQuery, GetAllNotificationByUserIdQueryVariables> & ({ variables: GetAllNotificationByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllNotificationByUserIdQuery, GetAllNotificationByUserIdQueryVariables>(GetAllNotificationByUserIdDocument, options);
      }
export function useGetAllNotificationByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllNotificationByUserIdQuery, GetAllNotificationByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllNotificationByUserIdQuery, GetAllNotificationByUserIdQueryVariables>(GetAllNotificationByUserIdDocument, options);
        }
export function useGetAllNotificationByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllNotificationByUserIdQuery, GetAllNotificationByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllNotificationByUserIdQuery, GetAllNotificationByUserIdQueryVariables>(GetAllNotificationByUserIdDocument, options);
        }
export type GetAllNotificationByUserIdQueryHookResult = ReturnType<typeof useGetAllNotificationByUserIdQuery>;
export type GetAllNotificationByUserIdLazyQueryHookResult = ReturnType<typeof useGetAllNotificationByUserIdLazyQuery>;
export type GetAllNotificationByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetAllNotificationByUserIdSuspenseQuery>;
export type GetAllNotificationByUserIdQueryResult = Apollo.QueryResult<GetAllNotificationByUserIdQuery, GetAllNotificationByUserIdQueryVariables>;
export const GetRegisByIdDocument = gql`
    query getRegisById($id: String!) {
  getRegisById(id: $id) {
    id
    cancel
    createdAt
    date
    profileId
    note
    session {
      startTime
      endTime
    }
    doctor {
      doctorName
      price
      facility {
        address
        medicalFacilityName
      }
    }
    specialty {
      specialtyName
      price
      facility {
        address
        medicalFacilityName
      }
    }
    vaccination {
      vaccineName
      price
      facility {
        address
        medicalFacilityName
      }
    }
    package {
      packageName
      price
      facility {
        address
        medicalFacilityName
      }
    }
    typeOfService
    doctorId
    packageId
    specialtyId
    vaccineId
    state
    files {
      filename
      type
      url
    }
    profile {
      id
      fullname
      address
      email
      numberPhone
      gender
      ethnic
      identity
      medicalInsurance
      job
      relationship
      dataOfBirth
      customerId
    }
  }
}
    `;

/**
 * __useGetRegisByIdQuery__
 *
 * To run a query within a React component, call `useGetRegisByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegisByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegisByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRegisByIdQuery(baseOptions: Apollo.QueryHookOptions<GetRegisByIdQuery, GetRegisByIdQueryVariables> & ({ variables: GetRegisByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegisByIdQuery, GetRegisByIdQueryVariables>(GetRegisByIdDocument, options);
      }
export function useGetRegisByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegisByIdQuery, GetRegisByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegisByIdQuery, GetRegisByIdQueryVariables>(GetRegisByIdDocument, options);
        }
export function useGetRegisByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRegisByIdQuery, GetRegisByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRegisByIdQuery, GetRegisByIdQueryVariables>(GetRegisByIdDocument, options);
        }
export type GetRegisByIdQueryHookResult = ReturnType<typeof useGetRegisByIdQuery>;
export type GetRegisByIdLazyQueryHookResult = ReturnType<typeof useGetRegisByIdLazyQuery>;
export type GetRegisByIdSuspenseQueryHookResult = ReturnType<typeof useGetRegisByIdSuspenseQuery>;
export type GetRegisByIdQueryResult = Apollo.QueryResult<GetRegisByIdQuery, GetRegisByIdQueryVariables>;
export const GetEvaluateByRegisIdDocument = gql`
    query getEvaluateByRegisId($regisId: String!) {
  getEvaluateByRegisId(regisId: $regisId) {
    id
    userId
    customerName
    registerId
    typeOfService
    specialtyId
    doctorId
    packageId
    vaccineId
    comment
    rating
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetEvaluateByRegisIdQuery__
 *
 * To run a query within a React component, call `useGetEvaluateByRegisIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEvaluateByRegisIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEvaluateByRegisIdQuery({
 *   variables: {
 *      regisId: // value for 'regisId'
 *   },
 * });
 */
export function useGetEvaluateByRegisIdQuery(baseOptions: Apollo.QueryHookOptions<GetEvaluateByRegisIdQuery, GetEvaluateByRegisIdQueryVariables> & ({ variables: GetEvaluateByRegisIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEvaluateByRegisIdQuery, GetEvaluateByRegisIdQueryVariables>(GetEvaluateByRegisIdDocument, options);
      }
export function useGetEvaluateByRegisIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEvaluateByRegisIdQuery, GetEvaluateByRegisIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEvaluateByRegisIdQuery, GetEvaluateByRegisIdQueryVariables>(GetEvaluateByRegisIdDocument, options);
        }
export function useGetEvaluateByRegisIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEvaluateByRegisIdQuery, GetEvaluateByRegisIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEvaluateByRegisIdQuery, GetEvaluateByRegisIdQueryVariables>(GetEvaluateByRegisIdDocument, options);
        }
export type GetEvaluateByRegisIdQueryHookResult = ReturnType<typeof useGetEvaluateByRegisIdQuery>;
export type GetEvaluateByRegisIdLazyQueryHookResult = ReturnType<typeof useGetEvaluateByRegisIdLazyQuery>;
export type GetEvaluateByRegisIdSuspenseQueryHookResult = ReturnType<typeof useGetEvaluateByRegisIdSuspenseQuery>;
export type GetEvaluateByRegisIdQueryResult = Apollo.QueryResult<GetEvaluateByRegisIdQuery, GetEvaluateByRegisIdQueryVariables>;
export const GetEvaluateByOptionDocument = gql`
    query getEvaluateByOption($input: GetEvaluateOptionInput!) {
  getEvaluateByOption(option: $input) {
    id
    userId
    customerName
    registerId
    typeOfService
    specialtyId
    doctorId
    packageId
    vaccineId
    comment
    rating
    createdAt
  }
}
    `;

/**
 * __useGetEvaluateByOptionQuery__
 *
 * To run a query within a React component, call `useGetEvaluateByOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEvaluateByOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEvaluateByOptionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetEvaluateByOptionQuery(baseOptions: Apollo.QueryHookOptions<GetEvaluateByOptionQuery, GetEvaluateByOptionQueryVariables> & ({ variables: GetEvaluateByOptionQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEvaluateByOptionQuery, GetEvaluateByOptionQueryVariables>(GetEvaluateByOptionDocument, options);
      }
export function useGetEvaluateByOptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEvaluateByOptionQuery, GetEvaluateByOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEvaluateByOptionQuery, GetEvaluateByOptionQueryVariables>(GetEvaluateByOptionDocument, options);
        }
export function useGetEvaluateByOptionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEvaluateByOptionQuery, GetEvaluateByOptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEvaluateByOptionQuery, GetEvaluateByOptionQueryVariables>(GetEvaluateByOptionDocument, options);
        }
export type GetEvaluateByOptionQueryHookResult = ReturnType<typeof useGetEvaluateByOptionQuery>;
export type GetEvaluateByOptionLazyQueryHookResult = ReturnType<typeof useGetEvaluateByOptionLazyQuery>;
export type GetEvaluateByOptionSuspenseQueryHookResult = ReturnType<typeof useGetEvaluateByOptionSuspenseQuery>;
export type GetEvaluateByOptionQueryResult = Apollo.QueryResult<GetEvaluateByOptionQuery, GetEvaluateByOptionQueryVariables>;
export const NotifyCreatedDocument = gql`
    subscription notifyCreated($userId: String!) {
  notifyCreated(userId: $userId) {
    id
    content
    detailPath
    createdAt
    status
    userId
  }
}
    `;

/**
 * __useNotifyCreatedSubscription__
 *
 * To run a query within a React component, call `useNotifyCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNotifyCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotifyCreatedSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useNotifyCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<NotifyCreatedSubscription, NotifyCreatedSubscriptionVariables> & ({ variables: NotifyCreatedSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NotifyCreatedSubscription, NotifyCreatedSubscriptionVariables>(NotifyCreatedDocument, options);
      }
export type NotifyCreatedSubscriptionHookResult = ReturnType<typeof useNotifyCreatedSubscription>;
export type NotifyCreatedSubscriptionResult = Apollo.SubscriptionResult<NotifyCreatedSubscription>;
export type BlocksKeySpecifier = ('content' | 'customerId' | 'seen' | BlocksKeySpecifier)[];
export type BlocksFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	customerId?: FieldPolicy<any> | FieldReadFunction<any>,
	seen?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlogKeySpecifier = ('content' | 'createdAt' | 'createdBy' | 'deletedAt' | 'deletedBy' | 'id' | 'keywords' | 'mainPhoto' | 'priority' | 'shortContent' | 'slug' | 'status' | 'title' | 'type' | 'updatedAt' | 'updatedBy' | BlogKeySpecifier)[];
export type BlogFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	mainPhoto?: FieldPolicy<any> | FieldReadFunction<any>,
	priority?: FieldPolicy<any> | FieldReadFunction<any>,
	shortContent?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('address' | 'customerKey' | 'dateOfBirth' | 'email' | 'ethnic' | 'fullname' | 'gender' | 'id' | 'numberPhone' | 'profileShares' | 'profiles' | 'userId' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	customerKey?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	ethnic?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	numberPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	profileShares?: FieldPolicy<any> | FieldReadFunction<any>,
	profiles?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DoctorKeySpecifier = ('academicTitle' | 'avatar' | 'degree' | 'discription' | 'doctorName' | 'email' | 'facility' | 'gender' | 'id' | 'medicalFactilitiesId' | 'numberPhone' | 'price' | 'registerCount' | 'specialistId' | 'specialty' | 'userId' | 'workSchedule' | DoctorKeySpecifier)[];
export type DoctorFieldPolicy = {
	academicTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	degree?: FieldPolicy<any> | FieldReadFunction<any>,
	discription?: FieldPolicy<any> | FieldReadFunction<any>,
	doctorName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	facility?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilitiesId?: FieldPolicy<any> | FieldReadFunction<any>,
	numberPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	registerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	specialistId?: FieldPolicy<any> | FieldReadFunction<any>,
	specialty?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	workSchedule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvaluateKeySpecifier = ('comment' | 'createdAt' | 'customerName' | 'doctorId' | 'id' | 'packageId' | 'rating' | 'registerId' | 'specialtyId' | 'typeOfService' | 'updatedAt' | 'userId' | 'vaccineId' | EvaluateKeySpecifier)[];
export type EvaluateFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	customerName?: FieldPolicy<any> | FieldReadFunction<any>,
	doctorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	packageId?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	registerId?: FieldPolicy<any> | FieldReadFunction<any>,
	specialtyId?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOfService?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	vaccineId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExceptionKeySpecifier = ('dates' | 'numbeSlot' | 'open' | ExceptionKeySpecifier)[];
export type ExceptionFieldPolicy = {
	dates?: FieldPolicy<any> | FieldReadFunction<any>,
	numbeSlot?: FieldPolicy<any> | FieldReadFunction<any>,
	open?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneralInforKeySpecifier = ('ID' | 'address' | 'company' | 'copyrigth' | 'email' | 'hotline' | 'liscenceBusiness' | 'liscenceOparating' | 'logoFooter' | 'logoHeader' | GeneralInforKeySpecifier)[];
export type GeneralInforFieldPolicy = {
	ID?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	copyrigth?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	hotline?: FieldPolicy<any> | FieldReadFunction<any>,
	liscenceBusiness?: FieldPolicy<any> | FieldReadFunction<any>,
	liscenceOparating?: FieldPolicy<any> | FieldReadFunction<any>,
	logoFooter?: FieldPolicy<any> | FieldReadFunction<any>,
	logoHeader?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkImageKeySpecifier = ('filename' | 'type' | 'url' | LinkImageKeySpecifier)[];
export type LinkImageFieldPolicy = {
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginResponeKeySpecifier = ('access_token' | 'user' | LoginResponeKeySpecifier)[];
export type LoginResponeFieldPolicy = {
	access_token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogoutUserKeySpecifier = ('logout' | LogoutUserKeySpecifier)[];
export type LogoutUserFieldPolicy = {
	logout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MedicalFacilitiesKeySpecifier = ('address' | 'blocks' | 'dateOff' | 'discription' | 'doctors' | 'email' | 'id' | 'image' | 'introduce' | 'lat' | 'legalRepresentation' | 'lng' | 'logo' | 'medicalFacilityName' | 'medicalSpecialties' | 'medicalStaffs' | 'numberPhone' | 'operatingStatus' | 'packages' | 'schedule' | 'status' | 'taxCode' | 'totalDoctors' | 'totalPackages' | 'totalSpecialties' | 'totalVaccinations' | 'typeOfFacility' | 'userId' | 'vaccinations' | MedicalFacilitiesKeySpecifier)[];
export type MedicalFacilitiesFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	blocks?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOff?: FieldPolicy<any> | FieldReadFunction<any>,
	discription?: FieldPolicy<any> | FieldReadFunction<any>,
	doctors?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	introduce?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	legalRepresentation?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFacilityName?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalSpecialties?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalStaffs?: FieldPolicy<any> | FieldReadFunction<any>,
	numberPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	operatingStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	packages?: FieldPolicy<any> | FieldReadFunction<any>,
	schedule?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	taxCode?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDoctors?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPackages?: FieldPolicy<any> | FieldReadFunction<any>,
	totalSpecialties?: FieldPolicy<any> | FieldReadFunction<any>,
	totalVaccinations?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	vaccinations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MedicalSpecialtiesKeySpecifier = ('discription' | 'facility' | 'id' | 'medicalFactilityId' | 'price' | 'registerCount' | 'specialtyName' | 'workSchedule' | MedicalSpecialtiesKeySpecifier)[];
export type MedicalSpecialtiesFieldPolicy = {
	discription?: FieldPolicy<any> | FieldReadFunction<any>,
	facility?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	registerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	specialtyName?: FieldPolicy<any> | FieldReadFunction<any>,
	workSchedule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MedicalStaffKeySpecifier = ('email' | 'gender' | 'id' | 'medicalFacilityId' | 'numberPhone' | 'permissions' | 'specialties' | 'specialtyId' | 'staffName' | 'userId' | MedicalStaffKeySpecifier)[];
export type MedicalStaffFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	numberPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	specialties?: FieldPolicy<any> | FieldReadFunction<any>,
	specialtyId?: FieldPolicy<any> | FieldReadFunction<any>,
	staffName?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('activeUser' | 'addBlockCustomerByProfileId' | 'cancelRegister' | 'cancelRegisterByAdmin' | 'confirmRegister' | 'confirmRegisters' | 'createBlog' | 'createCustomer' | 'createDoctor' | 'createEvaluate' | 'createMedicalFacility' | 'createMedicalSpecialty' | 'createMedicalStaff' | 'createNotification' | 'createPackage' | 'createProfile' | 'createRegisterDoctor' | 'createRegisterPackage' | 'createRegisterSpecialty' | 'createRegisterVaccine' | 'createUserAndStaff' | 'createVaccination' | 'deleteDoctor' | 'deleteEvaluate' | 'deleteMecialSpecialty' | 'deleteMedicalFacility' | 'deleteMedicalStaff' | 'deleteNotification' | 'deletePackage' | 'deleteProfile' | 'deleteUnDeleteBlog' | 'deleteUser' | 'deleteUserAndDoctor' | 'deleteVaccination' | 'generateExcel' | 'generateExcelRegisByOption' | 'login' | 'logout' | 'seenAllNotification' | 'seenNotificationById' | 'shareProfile' | 'signup' | 'signupAndCreateDoctor' | 'signupUser' | 'updateBlog' | 'updateCustomer' | 'updateDoctor' | 'updateEvaluate' | 'updateGeneralInfor' | 'updateMedicalFacility' | 'updateMedicalSpecialty' | 'updateMedicalStaff' | 'updateNotification' | 'updatePackage' | 'updateProfile' | 'updateRegister' | 'updateRoles' | 'updateSetting' | 'updateUser' | 'updateUserAndDoctor' | 'updateUserAndStaff' | 'updateUserWithPass' | 'updateVaccination' | 'uploadFileRegister' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	activeUser?: FieldPolicy<any> | FieldReadFunction<any>,
	addBlockCustomerByProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelRegisterByAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmRegisters?: FieldPolicy<any> | FieldReadFunction<any>,
	createBlog?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	createDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	createEvaluate?: FieldPolicy<any> | FieldReadFunction<any>,
	createMedicalFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	createMedicalSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	createMedicalStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	createNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	createPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	createProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterVaccine?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserAndStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	createVaccination?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEvaluate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMecialSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMedicalFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMedicalStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePackage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUnDeleteBlog?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUserAndDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteVaccination?: FieldPolicy<any> | FieldReadFunction<any>,
	generateExcel?: FieldPolicy<any> | FieldReadFunction<any>,
	generateExcelRegisByOption?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	seenAllNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	seenNotificationById?: FieldPolicy<any> | FieldReadFunction<any>,
	shareProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	signupAndCreateDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	signupUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBlog?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEvaluate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGeneralInfor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMedicalFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMedicalSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMedicalStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePackage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserAndDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserAndStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserWithPass?: FieldPolicy<any> | FieldReadFunction<any>,
	updateVaccination?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadFileRegister?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationKeySpecifier = ('content' | 'createdAt' | 'detailPath' | 'id' | 'status' | 'userId' | NotificationKeySpecifier)[];
export type NotificationFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	detailPath?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageKeySpecifier = ('examinationDetails' | 'facility' | 'gender' | 'id' | 'image' | 'medicalFactilitiesId' | 'packageName' | 'price' | 'registerCount' | 'workSchedule' | PackageKeySpecifier)[];
export type PackageFieldPolicy = {
	examinationDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	facility?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilitiesId?: FieldPolicy<any> | FieldReadFunction<any>,
	packageName?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	registerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	workSchedule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('address' | 'customer' | 'customerId' | 'dataOfBirth' | 'email' | 'ethnic' | 'fullname' | 'gender' | 'id' | 'identity' | 'job' | 'medicalInsurance' | 'numberPhone' | 'register' | 'relationship' | 'shares' | ProfileKeySpecifier)[];
export type ProfileFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerId?: FieldPolicy<any> | FieldReadFunction<any>,
	dataOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	ethnic?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	identity?: FieldPolicy<any> | FieldReadFunction<any>,
	job?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalInsurance?: FieldPolicy<any> | FieldReadFunction<any>,
	numberPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>,
	relationship?: FieldPolicy<any> | FieldReadFunction<any>,
	shares?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('checklogin' | 'checkloginCustomer' | 'getAllBlogOfFacilityPagination' | 'getAllBlogPagination' | 'getAllBlogPaginationForClient' | 'getAllCustomer' | 'getAllCustomerFromRegis' | 'getAllCustomerFromRegisCount' | 'getAllCustomerPagination' | 'getAllDoctor' | 'getAllDoctorByFacilityId' | 'getAllDoctorOfFacility' | 'getAllDoctorPagination' | 'getAllDoctorPaginationOfFacility' | 'getAllDoctorPaginationOfFacilityForClient' | 'getAllDoctorPending' | 'getAllEvaluate' | 'getAllMecialSpecialty' | 'getAllMedicalFacility' | 'getAllMedicalFacilityHaveSrvPaginationForClient' | 'getAllMedicalFacilityPagination' | 'getAllMedicalFacilityPaginationForClient' | 'getAllMedicalSpecialtiesOfFacility' | 'getAllMedicalSpecialtiesPaginationByStaff' | 'getAllMedicalSpecialtiesPaginationOfFacility' | 'getAllMedicalSpecialtiesPaginationOfFacilityForClient' | 'getAllMedicalStaff' | 'getAllMedicalStaffPaginationOfFacility' | 'getAllNotification' | 'getAllNotificationByUserId' | 'getAllPackage' | 'getAllPackageByFacilityId' | 'getAllPackageOfFacility' | 'getAllPackagePaginationByStaff' | 'getAllPackagePaginationOfFacility' | 'getAllPackagePaginationOfFacilityForClient' | 'getAllPackageSelect' | 'getAllProfile' | 'getAllRegisCountByOption' | 'getAllRegisOfService' | 'getAllRegisPending' | 'getAllRegisPendingCount' | 'getAllRegisterByOption' | 'getAllStaffPagination' | 'getAllUsersPagination' | 'getAllVacation' | 'getAllVaccinationByFacilityId' | 'getAllVaccinationOfFacility' | 'getAllVaccinationPaginationByStaff' | 'getAllVaccinationPaginationOfFacility' | 'getAllVaccinationPaginationOfFacilityForClient' | 'getAllVaccinationSelect' | 'getBlogBySlug' | 'getDoctorbyId' | 'getDoctorbyUserId' | 'getEvaluateById' | 'getEvaluateByOption' | 'getEvaluateByRegisId' | 'getGeneralInfor' | 'getMedicalFacilityById' | 'getMedicalFacilityInfo' | 'getMedicalSpecialtiesByMedicalFacilityId' | 'getMedicalSpecialtyById' | 'getMedicalSpecialtySelect' | 'getMedicalStaffByFacilityId' | 'getMedicalStaffById' | 'getMedicalStaffByUserId' | 'getPackageById' | 'getProfileByCustomerId' | 'getProfileByCustomerKey' | 'getProfileById' | 'getProfiles' | 'getRegisById' | 'getRegisHistory' | 'getSetting' | 'getTopMedicalFacilities' | 'getTotalBlogsCount' | 'getTotalBlogsCountForClient' | 'getTotalCustomersCount' | 'getTotalDoctorsCount' | 'getTotalDoctorsCountForClient' | 'getTotalFacilitiesCount' | 'getTotalFacilitiesCountForClient' | 'getTotalFacilitiesHaveSrvCountForClient' | 'getTotalMedicalSpecialtiesCount' | 'getTotalMedicalSpecialtiesCountForClient' | 'getTotalPackagesCount' | 'getTotalPackagesCountForClient' | 'getTotalVaccinationsCount' | 'getTotalVaccinationsCountForClient' | 'getUser' | 'getUserDoctorPending' | 'getUserDoctorPendingUpdate' | 'getUserFacilitySelect' | 'getUserMedicalNon' | 'getUserSelect' | 'getUserSelected' | 'getUserStaffSelect' | 'getVaccineById' | 'totalStaffsCount' | 'totalUsersCount' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	checklogin?: FieldPolicy<any> | FieldReadFunction<any>,
	checkloginCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllBlogOfFacilityPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllBlogPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllBlogPaginationForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCustomerFromRegis?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCustomerFromRegisCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCustomerPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorByFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorPaginationOfFacilityForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorPending?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllEvaluate?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMecialSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalFacilityHaveSrvPaginationForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalFacilityPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalFacilityPaginationForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalSpecialtiesOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalSpecialtiesPaginationByStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalSpecialtiesPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalSpecialtiesPaginationOfFacilityForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalStaffPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllNotificationByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackageByFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackageOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackagePaginationByStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackagePaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackagePaginationOfFacilityForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackageSelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllRegisCountByOption?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllRegisOfService?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllRegisPending?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllRegisPendingCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllRegisterByOption?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllStaffPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllUsersPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVacation?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationByFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationPaginationByStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationPaginationOfFacilityForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationSelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getBlogBySlug?: FieldPolicy<any> | FieldReadFunction<any>,
	getDoctorbyId?: FieldPolicy<any> | FieldReadFunction<any>,
	getDoctorbyUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getEvaluateById?: FieldPolicy<any> | FieldReadFunction<any>,
	getEvaluateByOption?: FieldPolicy<any> | FieldReadFunction<any>,
	getEvaluateByRegisId?: FieldPolicy<any> | FieldReadFunction<any>,
	getGeneralInfor?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalFacilityById?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalFacilityInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalSpecialtiesByMedicalFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalSpecialtyById?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalSpecialtySelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalStaffByFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalStaffById?: FieldPolicy<any> | FieldReadFunction<any>,
	getMedicalStaffByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getPackageById?: FieldPolicy<any> | FieldReadFunction<any>,
	getProfileByCustomerId?: FieldPolicy<any> | FieldReadFunction<any>,
	getProfileByCustomerKey?: FieldPolicy<any> | FieldReadFunction<any>,
	getProfileById?: FieldPolicy<any> | FieldReadFunction<any>,
	getProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	getRegisById?: FieldPolicy<any> | FieldReadFunction<any>,
	getRegisHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	getSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	getTopMedicalFacilities?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalBlogsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalBlogsCountForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalCustomersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalDoctorsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalDoctorsCountForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalFacilitiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalFacilitiesCountForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalFacilitiesHaveSrvCountForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalMedicalSpecialtiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalMedicalSpecialtiesCountForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalPackagesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalPackagesCountForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalVaccinationsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalVaccinationsCountForClient?: FieldPolicy<any> | FieldReadFunction<any>,
	getUser?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserDoctorPending?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserDoctorPendingUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserFacilitySelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserMedicalNon?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserSelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserSelected?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserStaffSelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getVaccineById?: FieldPolicy<any> | FieldReadFunction<any>,
	totalStaffsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalUsersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterKeySpecifier = ('cancel' | 'createRegisBy' | 'createdAt' | 'createdBy' | 'date' | 'doctor' | 'doctorId' | 'files' | 'id' | 'note' | 'package' | 'packageId' | 'profile' | 'profileId' | 'session' | 'specialty' | 'specialtyId' | 'state' | 'typeOfService' | 'vaccination' | 'vaccineId' | 'warning' | 'warningThisMonth' | RegisterKeySpecifier)[];
export type RegisterFieldPolicy = {
	cancel?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisBy?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	doctor?: FieldPolicy<any> | FieldReadFunction<any>,
	doctorId?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	package?: FieldPolicy<any> | FieldReadFunction<any>,
	packageId?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	specialty?: FieldPolicy<any> | FieldReadFunction<any>,
	specialtyId?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOfService?: FieldPolicy<any> | FieldReadFunction<any>,
	vaccination?: FieldPolicy<any> | FieldReadFunction<any>,
	vaccineId?: FieldPolicy<any> | FieldReadFunction<any>,
	warning?: FieldPolicy<any> | FieldReadFunction<any>,
	warningThisMonth?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduleKeySpecifier = ('dayOfWeek' | 'sessions' | ScheduleKeySpecifier)[];
export type ScheduleFieldPolicy = {
	dayOfWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionKeySpecifier = ('endTime' | 'exceptions' | 'startTime' | SessionKeySpecifier)[];
export type SessionFieldPolicy = {
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	exceptions?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingKeySpecifier = ('defaultLang' | SettingKeySpecifier)[];
export type SettingFieldPolicy = {
	defaultLang?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('notifyCreated' | 'registerCreated' | 'registerPendingCreated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	notifyCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	registerCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	registerPendingCreated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('active' | 'avatar' | 'customer' | 'doctor' | 'email' | 'id' | 'medicalFacilities' | 'password' | 'roles' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	doctor?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFacilities?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSlimEntityKeySpecifier = ('role' | 'showName' | 'username' | UserSlimEntityKeySpecifier)[];
export type UserSlimEntityFieldPolicy = {
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	showName?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VaccinationKeySpecifier = ('countryOfOrigin' | 'facility' | 'id' | 'indication' | 'medicalFactilitiesId' | 'note' | 'price' | 'prophylactic' | 'registerCount' | 'vaccineName' | 'workSchedule' | VaccinationKeySpecifier)[];
export type VaccinationFieldPolicy = {
	countryOfOrigin?: FieldPolicy<any> | FieldReadFunction<any>,
	facility?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indication?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilitiesId?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	prophylactic?: FieldPolicy<any> | FieldReadFunction<any>,
	registerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	vaccineName?: FieldPolicy<any> | FieldReadFunction<any>,
	workSchedule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkScheduleKeySpecifier = ('dayOff' | 'numberSlot' | 'schedule' | 'status' | WorkScheduleKeySpecifier)[];
export type WorkScheduleFieldPolicy = {
	dayOff?: FieldPolicy<any> | FieldReadFunction<any>,
	numberSlot?: FieldPolicy<any> | FieldReadFunction<any>,
	schedule?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Blocks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlocksKeySpecifier | (() => undefined | BlocksKeySpecifier),
		fields?: BlocksFieldPolicy,
	},
	Blog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlogKeySpecifier | (() => undefined | BlogKeySpecifier),
		fields?: BlogFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	Doctor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DoctorKeySpecifier | (() => undefined | DoctorKeySpecifier),
		fields?: DoctorFieldPolicy,
	},
	Evaluate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EvaluateKeySpecifier | (() => undefined | EvaluateKeySpecifier),
		fields?: EvaluateFieldPolicy,
	},
	Exception?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExceptionKeySpecifier | (() => undefined | ExceptionKeySpecifier),
		fields?: ExceptionFieldPolicy,
	},
	GeneralInfor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneralInforKeySpecifier | (() => undefined | GeneralInforKeySpecifier),
		fields?: GeneralInforFieldPolicy,
	},
	LinkImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkImageKeySpecifier | (() => undefined | LinkImageKeySpecifier),
		fields?: LinkImageFieldPolicy,
	},
	LoginRespone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginResponeKeySpecifier | (() => undefined | LoginResponeKeySpecifier),
		fields?: LoginResponeFieldPolicy,
	},
	LogoutUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogoutUserKeySpecifier | (() => undefined | LogoutUserKeySpecifier),
		fields?: LogoutUserFieldPolicy,
	},
	MedicalFacilities?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MedicalFacilitiesKeySpecifier | (() => undefined | MedicalFacilitiesKeySpecifier),
		fields?: MedicalFacilitiesFieldPolicy,
	},
	MedicalSpecialties?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MedicalSpecialtiesKeySpecifier | (() => undefined | MedicalSpecialtiesKeySpecifier),
		fields?: MedicalSpecialtiesFieldPolicy,
	},
	MedicalStaff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MedicalStaffKeySpecifier | (() => undefined | MedicalStaffKeySpecifier),
		fields?: MedicalStaffFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Notification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationKeySpecifier | (() => undefined | NotificationKeySpecifier),
		fields?: NotificationFieldPolicy,
	},
	Package?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PackageKeySpecifier | (() => undefined | PackageKeySpecifier),
		fields?: PackageFieldPolicy,
	},
	Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProfileKeySpecifier | (() => undefined | ProfileKeySpecifier),
		fields?: ProfileFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Register?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterKeySpecifier | (() => undefined | RegisterKeySpecifier),
		fields?: RegisterFieldPolicy,
	},
	Schedule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduleKeySpecifier | (() => undefined | ScheduleKeySpecifier),
		fields?: ScheduleFieldPolicy,
	},
	Session?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SessionKeySpecifier | (() => undefined | SessionKeySpecifier),
		fields?: SessionFieldPolicy,
	},
	Setting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingKeySpecifier | (() => undefined | SettingKeySpecifier),
		fields?: SettingFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserSlimEntity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSlimEntityKeySpecifier | (() => undefined | UserSlimEntityKeySpecifier),
		fields?: UserSlimEntityFieldPolicy,
	},
	Vaccination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VaccinationKeySpecifier | (() => undefined | VaccinationKeySpecifier),
		fields?: VaccinationFieldPolicy,
	},
	WorkSchedule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkScheduleKeySpecifier | (() => undefined | WorkScheduleKeySpecifier),
		fields?: WorkScheduleFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;