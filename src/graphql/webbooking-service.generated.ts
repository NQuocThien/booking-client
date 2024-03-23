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

export type ConfirmRegisterInput = {
  registerId: Scalars['String']['input'];
  state: EStateRegister;
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
  rating: Scalars['Float']['input'];
  registerId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
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
  status: Scalars['String']['input'];
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
  status: ETypeOfNotification;
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
  date: Scalars['DateTime']['input'];
  doctorId: Scalars['String']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
};

export type CreateRegisterPackageInput = {
  date: Scalars['DateTime']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
  packageId: Scalars['String']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
};

export type CreateRegisterSpecialtyInput = {
  date: Scalars['DateTime']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
  profileId: Scalars['String']['input'];
  session: SessionInput;
  specialtyId: Scalars['String']['input'];
};

export type CreateRegisterVaccineInput = {
  date: Scalars['DateTime']['input'];
  isHealthInsurance: Scalars['Boolean']['input'];
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
  dateOfBirth: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  ethnic: Scalars['String']['output'];
  fullname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  numberPhone: Scalars['String']['output'];
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
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  numberPhone: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  specialistId: Scalars['String']['output'];
  specialty?: Maybe<MedicalSpecialties>;
  userId: Scalars['String']['output'];
  workSchedule: WorkSchedule;
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
  MagagerBlog = 'MagagerBlog',
  MagagerPackage = 'MagagerPackage',
  MagagerVaccine = 'MagagerVaccine',
  ManagerSpecialty = 'ManagerSpecialty'
}

export enum EStateRegister {
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

export type Evaluate = {
  __typename?: 'Evaluate';
  comment: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Float']['output'];
  registerId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
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

export type GetRegisterByOptionInput = {
  date: Scalars['DateTime']['input'];
  doctorId?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['String']['input']>;
  specialtyId?: InputMaybe<Scalars['String']['input']>;
  vaccineId?: InputMaybe<Scalars['String']['input']>;
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
  id: Scalars['ID']['output'];
  medicalFactilityId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  specialtyName: Scalars['String']['output'];
  workSchedule?: Maybe<WorkSchedule>;
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
  confirmRegister: Register;
  createCustomer: Customer;
  createDoctor: Doctor;
  createEvaluate: Evaluate;
  createMedicalFacility: MedicalFacilities;
  createMedicalSpecialty: MedicalSpecialties;
  createMedicalStaff: MedicalStaff;
  createNotifition: Notification;
  createPackage: Package;
  createProfile: Profile;
  createRegisterDoctor: Register;
  createRegisterPackage: Register;
  createRegisterSpecialty: Register;
  createRegisterVaccine: Register;
  createVaccination: Vaccination;
  deleteDoctor: Doctor;
  deleteEvaluate: Evaluate;
  deleteMecialSpecialty: MedicalSpecialties;
  deleteMedicalFacility: MedicalFacilities;
  deleteMedicalStaff: MedicalStaff;
  deleteNotification: Notification;
  deletePackage: Package;
  deleteProfile: Profile;
  deleteUser: User;
  deleteVaccination: Vaccination;
  login: LoginRespone;
  logout: LogoutUser;
  signup: User;
  signupUser: User;
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
  updateUserWithPass: User;
  updateVaccination: Vaccination;
};


export type MutationActiveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationConfirmRegisterArgs = {
  input: ConfirmRegisterInput;
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


export type MutationCreateNotifitionArgs = {
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


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteVaccinationArgs = {
  input: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSignupUserArgs = {
  createUserInput: CreateUserByAdminInput;
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


export type MutationUpdateUserWithPassArgs = {
  updateUserInput: UpdateUserWithPassInput;
};


export type MutationUpdateVaccinationArgs = {
  input: UpdateVaccineInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String']['output'];
  detailPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: ETypeOfNotification;
  userId: Scalars['String']['output'];
};

export type Package = {
  __typename?: 'Package';
  examinationDetails: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: LinkImage;
  medicalFactilitiesId: Scalars['String']['output'];
  packageName: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  workSchedule: WorkSchedule;
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
};

export type Query = {
  __typename?: 'Query';
  checklogin: User;
  checkloginCustomer: User;
  getAllCustomer: Array<Customer>;
  getAllCustomerPagination: Array<Customer>;
  getAllDoctor: Array<Doctor>;
  getAllDoctorByFacilityId: Array<Doctor>;
  getAllDoctorPagination: Array<Doctor>;
  getAllDoctorPaginationOfFacility: Array<Doctor>;
  getAllDoctorPending: Array<Doctor>;
  getAllEvaluate: Array<Evaluate>;
  getAllMecialSpecialty: Array<MedicalSpecialties>;
  getAllMedicalFacility: Array<MedicalFacilities>;
  getAllMedicalFacilityPagination: Array<MedicalFacilities>;
  getAllMedicalSpecialtiesPaginationByStaff: Array<MedicalSpecialties>;
  getAllMedicalSpecialtiesPaginationOfFacility: Array<MedicalSpecialties>;
  getAllMedicalStaff: Array<MedicalStaff>;
  getAllMedicalStaffPaginationOfFacility: Array<MedicalStaff>;
  getAllNotification: Array<Notification>;
  getAllPackage: Array<Package>;
  getAllPackageByFacilityId: Array<Package>;
  getAllPackagePaginationByStaff: Array<Package>;
  getAllPackagePaginationOfFacility: Array<Package>;
  getAllPackageSelect: Array<Package>;
  getAllProfile: Array<Profile>;
  getAllRegisterByOption: Array<Register>;
  getAllStaffPagination: Array<MedicalStaff>;
  getAllUsersPagination: Array<User>;
  getAllVacation: Array<Vaccination>;
  getAllVaccinationByFacilityId: Array<Vaccination>;
  getAllVaccinationPaginationByStaff: Array<Vaccination>;
  getAllVaccinationPaginationOfFacility: Array<Vaccination>;
  getAllVaccinationSelect: Array<Vaccination>;
  getDoctorbyId: Doctor;
  getDoctorbyUserId: Doctor;
  getEvaluateById: Evaluate;
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
  getSetting: Setting;
  getTopMedicalFacilities: Array<MedicalFacilities>;
  getTotalCustomersCount: Scalars['Float']['output'];
  getTotalDoctorsCount: Scalars['Float']['output'];
  getTotalFacilitiesCount: Scalars['Float']['output'];
  getTotalMedicalSpecialtiesCount: Scalars['Float']['output'];
  getTotalPackagesCount: Scalars['Float']['output'];
  getTotalVaccinationsCount: Scalars['Float']['output'];
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


export type QueryGetAllMedicalFacilityPaginationArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
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


export type QueryGetAllMedicalStaffPaginationOfFacilityArgs = {
  limit?: Scalars['Float']['input'];
  page?: Scalars['Float']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPackageByFacilityIdArgs = {
  input: Scalars['String']['input'];
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


export type QueryGetAllPackageSelectArgs = {
  input: Scalars['String']['input'];
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
  search?: InputMaybe<Scalars['String']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllVaccinationByFacilityIdArgs = {
  input: Scalars['String']['input'];
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


export type QueryGetAllVaccinationSelectArgs = {
  input: Scalars['String']['input'];
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


export type QueryGetTopMedicalFacilitiesArgs = {
  limit?: Scalars['Float']['input'];
  typeFacility: Scalars['String']['input'];
};


export type QueryGetTotalCustomersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalDoctorsCountArgs = {
  filter?: InputMaybe<FilterDoctorInput>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalFacilitiesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalMedicalSpecialtiesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalPackagesCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetTotalVaccinationsCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  staffId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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
  search?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTotalUsersCountArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Register = {
  __typename?: 'Register';
  date: Scalars['DateTime']['output'];
  doctorId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isHealthInsurance: Scalars['Boolean']['output'];
  packageId?: Maybe<Scalars['String']['output']>;
  profile: Profile;
  profileId: Scalars['String']['output'];
  session: Session;
  specialtyId?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  typeOfService: Scalars['String']['output'];
  vaccineId?: Maybe<Scalars['String']['output']>;
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
  startTime: Scalars['String']['output'];
};

export type SessionInput = {
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  defaultLang: Scalars['String']['output'];
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
  userId: Scalars['String']['input'];
  workSchedule: WorkScheduleInput;
};

export type UpdateEvaluateInput = {
  comment: Scalars['String']['input'];
  id: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  registerId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
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
  status: Scalars['String']['input'];
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
  userId: Scalars['String']['input'];
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

export type UpdateUserInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserWithPassInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  linkImage?: InputMaybe<LinkImageInput>;
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
  customer?: Maybe<Customer>;
  doctor?: Maybe<Doctor>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkImage?: Maybe<LinkImage>;
  medicalFacilities?: Maybe<MedicalFacilities>;
  password: Scalars['String']['output'];
  roles?: Maybe<Array<Scalars['String']['output']>>;
  username: Scalars['String']['output'];
};

export type UserSelectInput = {
  role: Role;
};

export type Vaccination = {
  __typename?: 'Vaccination';
  countryOfOrigin: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  indication: Scalars['String']['output'];
  medicalFactilitiesId: Scalars['String']['output'];
  note: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  prophylactic: Scalars['String']['output'];
  vaccineName: Scalars['String']['output'];
  workSchedule: WorkSchedule;
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


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } };

export type UpdateUserWithPassMutationVariables = Exact<{
  input: UpdateUserWithPassInput;
}>;


export type UpdateUserWithPassMutation = { __typename?: 'Mutation', updateUserWithPass: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } };

export type CreateCustomerByUserIdMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type CreateCustomerByUserIdMutation = { __typename?: 'Mutation', createCustomer: { __typename?: 'Customer', id: string, userId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dateOfBirth: any, ethnic: string } };

export type LoginCustomerMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginCustomerMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginRespone', access_token: string, user: { __typename?: 'User', id: string, username: string, email: string, password: string, roles?: Array<string> | null, active?: boolean | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } } };

export type UpdateCustomerMutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerMutation = { __typename?: 'Mutation', updateCustomer: { __typename?: 'Customer', id: string, userId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dateOfBirth: any, ethnic: string } };

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

export type GetGeneralInforQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGeneralInforQuery = { __typename?: 'Query', getGeneralInfor: { __typename?: 'GeneralInfor', company: string, address: string, copyrigth: string, email: string, hotline: string, liscenceBusiness: string, liscenceOparating: string, ID?: string | null, logoFooter: { __typename?: 'LinkImage', filename: string, type: string, url: string }, logoHeader: { __typename?: 'LinkImage', filename: string, type: string, url: string } } };

export type CheckloginCustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckloginCustomerQuery = { __typename?: 'Query', checkloginCustomer: { __typename?: 'User', id: string, email: string, username: string, password: string, roles?: Array<string> | null, linkImage?: { __typename?: 'LinkImage', filename: string, type: string, url: string } | null, customer?: { __typename?: 'Customer', id: string, fullname: string, gender: string, email: string, numberPhone: string, address: string, dateOfBirth: any, ethnic: string, userId: string } | null } };

export type GetMedicalFacilityRegisInfoByIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  isClient: Scalars['Boolean']['input'];
}>;


export type GetMedicalFacilityRegisInfoByIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, medicalFacilityName: string, address: string, typeOfFacility: string, status: string, dateOff?: Array<any> | null, schedule: string, totalDoctors?: number | null, totalPackages?: number | null, totalSpecialties?: number | null, totalVaccinations?: number | null } };

export type GetProfileByCustomerIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type GetProfileByCustomerIdQuery = { __typename?: 'Query', getProfileByCustomerId: Array<{ __typename?: 'Profile', id: string, customerId: string, fullname: string, numberPhone: string, email: string, address: string, gender: string, dataOfBirth: any, ethnic: string, identity?: string | null, relationship: string, job: string }> };

export type GetTopMedicalFacilitiesQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
  typeFacility: Scalars['String']['input'];
}>;


export type GetTopMedicalFacilitiesQuery = { __typename?: 'Query', getTopMedicalFacilities: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetAllMedicalFacilityPaginationQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Float']['input'];
  limit: Scalars['Float']['input'];
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  typeOfFacility?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllMedicalFacilityPaginationQuery = { __typename?: 'Query', getAllMedicalFacilityPagination: Array<{ __typename?: 'MedicalFacilities', id: string, userId: string, medicalFacilityName: string, address: string, numberPhone: string, email: string, lat?: number | null, lng?: number | null, discription: string, introduce: string, typeOfFacility: string, operatingStatus: string, legalRepresentation: string, taxCode: string, status: string, dateOff?: Array<any> | null, schedule: string, logo: { __typename?: 'LinkImage', filename: string, type: string, url: string }, image: { __typename?: 'LinkImage', filename: string, type: string, url: string } }> };

export type GetTotalFacilitiesCountQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTotalFacilitiesCountQuery = { __typename?: 'Query', getTotalFacilitiesCount: number };

export type GetListMedicalSpecialtyRegisInfoByFacilityIdQueryVariables = Exact<{
  input: Scalars['String']['input'];
  isClient: Scalars['Boolean']['input'];
}>;


export type GetListMedicalSpecialtyRegisInfoByFacilityIdQuery = { __typename?: 'Query', getMedicalFacilityById: { __typename?: 'MedicalFacilities', id: string, medicalSpecialties?: Array<{ __typename?: 'MedicalSpecialties', id: string, specialtyName: string, discription: string, price: number, medicalFactilityId: string, workSchedule?: { __typename?: 'WorkSchedule', dayOff: Array<any>, numberSlot: number, status: string, schedule: Array<{ __typename?: 'Schedule', dayOfWeek: string, sessions: Array<{ __typename?: 'Session', endTime: string, startTime: string }> }> } | null }> | null } };


export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateUser(updateUserInput: $input) {
    id
    linkImage {
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
    linkImage {
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
      linkImage {
        filename
        type
        url
      }
      roles
      active
      customer {
        id
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
    linkImage {
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
    totalDoctors(isClient: $isClient)
    totalPackages(isClient: $isClient)
    totalSpecialties
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
export const GetAllMedicalFacilityPaginationDocument = gql`
    query getAllMedicalFacilityPagination($search: String, $page: Float!, $limit: Float!, $sortField: String, $sortOrder: String, $typeOfFacility: String) {
  getAllMedicalFacilityPagination(
    search: $search
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
 * __useGetAllMedicalFacilityPaginationQuery__
 *
 * To run a query within a React component, call `useGetAllMedicalFacilityPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMedicalFacilityPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMedicalFacilityPaginationQuery({
 *   variables: {
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *      typeOfFacility: // value for 'typeOfFacility'
 *   },
 * });
 */
export function useGetAllMedicalFacilityPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables> & ({ variables: GetAllMedicalFacilityPaginationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
      }
export function useGetAllMedicalFacilityPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
        }
export function useGetAllMedicalFacilityPaginationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>(GetAllMedicalFacilityPaginationDocument, options);
        }
export type GetAllMedicalFacilityPaginationQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationQuery>;
export type GetAllMedicalFacilityPaginationLazyQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationLazyQuery>;
export type GetAllMedicalFacilityPaginationSuspenseQueryHookResult = ReturnType<typeof useGetAllMedicalFacilityPaginationSuspenseQuery>;
export type GetAllMedicalFacilityPaginationQueryResult = Apollo.QueryResult<GetAllMedicalFacilityPaginationQuery, GetAllMedicalFacilityPaginationQueryVariables>;
export const GetTotalFacilitiesCountDocument = gql`
    query getTotalFacilitiesCount($search: String, $type: String) {
  getTotalFacilitiesCount(search: $search, type: $type)
}
    `;

/**
 * __useGetTotalFacilitiesCountQuery__
 *
 * To run a query within a React component, call `useGetTotalFacilitiesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalFacilitiesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalFacilitiesCountQuery({
 *   variables: {
 *      search: // value for 'search'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetTotalFacilitiesCountQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>(GetTotalFacilitiesCountDocument, options);
      }
export function useGetTotalFacilitiesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>(GetTotalFacilitiesCountDocument, options);
        }
export function useGetTotalFacilitiesCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>(GetTotalFacilitiesCountDocument, options);
        }
export type GetTotalFacilitiesCountQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountQuery>;
export type GetTotalFacilitiesCountLazyQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountLazyQuery>;
export type GetTotalFacilitiesCountSuspenseQueryHookResult = ReturnType<typeof useGetTotalFacilitiesCountSuspenseQuery>;
export type GetTotalFacilitiesCountQueryResult = Apollo.QueryResult<GetTotalFacilitiesCountQuery, GetTotalFacilitiesCountQueryVariables>;
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
export type CustomerKeySpecifier = ('address' | 'dateOfBirth' | 'email' | 'ethnic' | 'fullname' | 'gender' | 'id' | 'numberPhone' | 'profiles' | 'userId' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	ethnic?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	numberPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	profiles?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DoctorKeySpecifier = ('academicTitle' | 'avatar' | 'degree' | 'discription' | 'doctorName' | 'email' | 'gender' | 'id' | 'medicalFactilitiesId' | 'numberPhone' | 'price' | 'specialistId' | 'specialty' | 'userId' | 'workSchedule' | DoctorKeySpecifier)[];
export type DoctorFieldPolicy = {
	academicTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	degree?: FieldPolicy<any> | FieldReadFunction<any>,
	discription?: FieldPolicy<any> | FieldReadFunction<any>,
	doctorName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilitiesId?: FieldPolicy<any> | FieldReadFunction<any>,
	numberPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	specialistId?: FieldPolicy<any> | FieldReadFunction<any>,
	specialty?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	workSchedule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvaluateKeySpecifier = ('comment' | 'id' | 'rating' | 'registerId' | 'userId' | EvaluateKeySpecifier)[];
export type EvaluateFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	registerId?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
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
export type MedicalFacilitiesKeySpecifier = ('address' | 'dateOff' | 'discription' | 'doctors' | 'email' | 'id' | 'image' | 'introduce' | 'lat' | 'legalRepresentation' | 'lng' | 'logo' | 'medicalFacilityName' | 'medicalSpecialties' | 'medicalStaffs' | 'numberPhone' | 'operatingStatus' | 'packages' | 'schedule' | 'status' | 'taxCode' | 'totalDoctors' | 'totalPackages' | 'totalSpecialties' | 'totalVaccinations' | 'typeOfFacility' | 'userId' | 'vaccinations' | MedicalFacilitiesKeySpecifier)[];
export type MedicalFacilitiesFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type MedicalSpecialtiesKeySpecifier = ('discription' | 'id' | 'medicalFactilityId' | 'price' | 'specialtyName' | 'workSchedule' | MedicalSpecialtiesKeySpecifier)[];
export type MedicalSpecialtiesFieldPolicy = {
	discription?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type MutationKeySpecifier = ('activeUser' | 'confirmRegister' | 'createCustomer' | 'createDoctor' | 'createEvaluate' | 'createMedicalFacility' | 'createMedicalSpecialty' | 'createMedicalStaff' | 'createNotifition' | 'createPackage' | 'createProfile' | 'createRegisterDoctor' | 'createRegisterPackage' | 'createRegisterSpecialty' | 'createRegisterVaccine' | 'createVaccination' | 'deleteDoctor' | 'deleteEvaluate' | 'deleteMecialSpecialty' | 'deleteMedicalFacility' | 'deleteMedicalStaff' | 'deleteNotification' | 'deletePackage' | 'deleteProfile' | 'deleteUser' | 'deleteVaccination' | 'login' | 'logout' | 'signup' | 'signupUser' | 'updateCustomer' | 'updateDoctor' | 'updateEvaluate' | 'updateGeneralInfor' | 'updateMedicalFacility' | 'updateMedicalSpecialty' | 'updateMedicalStaff' | 'updateNotification' | 'updatePackage' | 'updateProfile' | 'updateRegister' | 'updateRoles' | 'updateSetting' | 'updateUser' | 'updateUserWithPass' | 'updateVaccination' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	activeUser?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmRegister?: FieldPolicy<any> | FieldReadFunction<any>,
	createCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	createDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	createEvaluate?: FieldPolicy<any> | FieldReadFunction<any>,
	createMedicalFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	createMedicalSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	createMedicalStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	createNotifition?: FieldPolicy<any> | FieldReadFunction<any>,
	createPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	createProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegisterVaccine?: FieldPolicy<any> | FieldReadFunction<any>,
	createVaccination?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEvaluate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMecialSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMedicalFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMedicalStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePackage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteVaccination?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	signupUser?: FieldPolicy<any> | FieldReadFunction<any>,
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
	updateUserWithPass?: FieldPolicy<any> | FieldReadFunction<any>,
	updateVaccination?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationKeySpecifier = ('content' | 'detailPath' | 'id' | 'status' | 'userId' | NotificationKeySpecifier)[];
export type NotificationFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	detailPath?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PackageKeySpecifier = ('examinationDetails' | 'gender' | 'id' | 'image' | 'medicalFactilitiesId' | 'packageName' | 'price' | 'workSchedule' | PackageKeySpecifier)[];
export type PackageFieldPolicy = {
	examinationDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	gender?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilitiesId?: FieldPolicy<any> | FieldReadFunction<any>,
	packageName?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	workSchedule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProfileKeySpecifier = ('address' | 'customer' | 'customerId' | 'dataOfBirth' | 'email' | 'ethnic' | 'fullname' | 'gender' | 'id' | 'identity' | 'job' | 'medicalInsurance' | 'numberPhone' | 'register' | 'relationship' | ProfileKeySpecifier)[];
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
	relationship?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('checklogin' | 'checkloginCustomer' | 'getAllCustomer' | 'getAllCustomerPagination' | 'getAllDoctor' | 'getAllDoctorByFacilityId' | 'getAllDoctorPagination' | 'getAllDoctorPaginationOfFacility' | 'getAllDoctorPending' | 'getAllEvaluate' | 'getAllMecialSpecialty' | 'getAllMedicalFacility' | 'getAllMedicalFacilityPagination' | 'getAllMedicalSpecialtiesPaginationByStaff' | 'getAllMedicalSpecialtiesPaginationOfFacility' | 'getAllMedicalStaff' | 'getAllMedicalStaffPaginationOfFacility' | 'getAllNotification' | 'getAllPackage' | 'getAllPackageByFacilityId' | 'getAllPackagePaginationByStaff' | 'getAllPackagePaginationOfFacility' | 'getAllPackageSelect' | 'getAllProfile' | 'getAllRegisterByOption' | 'getAllStaffPagination' | 'getAllUsersPagination' | 'getAllVacation' | 'getAllVaccinationByFacilityId' | 'getAllVaccinationPaginationByStaff' | 'getAllVaccinationPaginationOfFacility' | 'getAllVaccinationSelect' | 'getDoctorbyId' | 'getDoctorbyUserId' | 'getEvaluateById' | 'getGeneralInfor' | 'getMedicalFacilityById' | 'getMedicalFacilityInfo' | 'getMedicalSpecialtiesByMedicalFacilityId' | 'getMedicalSpecialtyById' | 'getMedicalSpecialtySelect' | 'getMedicalStaffByFacilityId' | 'getMedicalStaffById' | 'getMedicalStaffByUserId' | 'getPackageById' | 'getProfileByCustomerId' | 'getSetting' | 'getTopMedicalFacilities' | 'getTotalCustomersCount' | 'getTotalDoctorsCount' | 'getTotalFacilitiesCount' | 'getTotalMedicalSpecialtiesCount' | 'getTotalPackagesCount' | 'getTotalVaccinationsCount' | 'getUser' | 'getUserDoctorPending' | 'getUserDoctorPendingUpdate' | 'getUserFacilitySelect' | 'getUserMedicalNon' | 'getUserSelect' | 'getUserSelected' | 'getUserStaffSelect' | 'getVaccineById' | 'totalStaffsCount' | 'totalUsersCount' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	checklogin?: FieldPolicy<any> | FieldReadFunction<any>,
	checkloginCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCustomer?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCustomerPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctor?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorByFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllDoctorPending?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllEvaluate?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMecialSpecialty?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalFacilityPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalSpecialtiesPaginationByStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalSpecialtiesPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMedicalStaffPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackage?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackageByFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackagePaginationByStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackagePaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPackageSelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllRegisterByOption?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllStaffPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllUsersPagination?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVacation?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationByFacilityId?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationPaginationByStaff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationPaginationOfFacility?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllVaccinationSelect?: FieldPolicy<any> | FieldReadFunction<any>,
	getDoctorbyId?: FieldPolicy<any> | FieldReadFunction<any>,
	getDoctorbyUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getEvaluateById?: FieldPolicy<any> | FieldReadFunction<any>,
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
	getSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	getTopMedicalFacilities?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalCustomersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalDoctorsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalFacilitiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalMedicalSpecialtiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalPackagesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	getTotalVaccinationsCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type RegisterKeySpecifier = ('date' | 'doctorId' | 'id' | 'isHealthInsurance' | 'packageId' | 'profile' | 'profileId' | 'session' | 'specialtyId' | 'state' | 'typeOfService' | 'vaccineId' | RegisterKeySpecifier)[];
export type RegisterFieldPolicy = {
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	doctorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isHealthInsurance?: FieldPolicy<any> | FieldReadFunction<any>,
	packageId?: FieldPolicy<any> | FieldReadFunction<any>,
	profile?: FieldPolicy<any> | FieldReadFunction<any>,
	profileId?: FieldPolicy<any> | FieldReadFunction<any>,
	session?: FieldPolicy<any> | FieldReadFunction<any>,
	specialtyId?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOfService?: FieldPolicy<any> | FieldReadFunction<any>,
	vaccineId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduleKeySpecifier = ('dayOfWeek' | 'sessions' | ScheduleKeySpecifier)[];
export type ScheduleFieldPolicy = {
	dayOfWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	sessions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SessionKeySpecifier = ('endTime' | 'startTime' | SessionKeySpecifier)[];
export type SessionFieldPolicy = {
	endTime?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingKeySpecifier = ('defaultLang' | SettingKeySpecifier)[];
export type SettingFieldPolicy = {
	defaultLang?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('active' | 'customer' | 'doctor' | 'email' | 'id' | 'linkImage' | 'medicalFacilities' | 'password' | 'roles' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	doctor?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	linkImage?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFacilities?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VaccinationKeySpecifier = ('countryOfOrigin' | 'id' | 'indication' | 'medicalFactilitiesId' | 'note' | 'price' | 'prophylactic' | 'vaccineName' | 'workSchedule' | VaccinationKeySpecifier)[];
export type VaccinationFieldPolicy = {
	countryOfOrigin?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	indication?: FieldPolicy<any> | FieldReadFunction<any>,
	medicalFactilitiesId?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	prophylactic?: FieldPolicy<any> | FieldReadFunction<any>,
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
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
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