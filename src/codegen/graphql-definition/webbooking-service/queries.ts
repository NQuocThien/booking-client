import { gql } from "@apollo/client";

export const GetGeneralInfor = gql`
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
const checkLoginUser = gql`
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
const getMedicalFacilityRegisInfoById = gql`
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
const getProfileByCustomerId = gql`
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

const getTopMedicalFacilities = gql`
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
const getAllMedicalFacility = gql`
  query getAllMedicalFacilityPagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $typeOfFacility: String
  ) {
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
const getTotalFacilities = gql`
  query getTotalFacilitiesCount($search: String, $type: String) {
    getTotalFacilitiesCount(search: $search, type: $type)
  }
`;
const getListMedicalSpecialtyRegisInfoByFacilityId = gql`
  query getListMedicalSpecialtyRegisInfoByFacilityId(
    $input: String!
    $isClient: Boolean!
  ) {
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
const getListDoctorRegisInfoByFacilityId = gql`
  query getListDoctorRegisInfoByFacilityId(
    $input: String!
    $isClient: Boolean!
  ) {
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
const getListPackageRegisInfoByFacilityId = gql`
  query getListPackageRegisInfoByFacilityId(
    $input: String!
    $isClient: Boolean!
  ) {
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
const getListVaccinationRegisInfoByFacilityId = gql`
  query getListVaccinationRegisInfoByFacilityId(
    $input: String!
    $isClient: Boolean!
  ) {
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
const getAllRegisPending = gql`
  query getAllRegisPending($input: GetRegisterByOptionInput!) {
    getAllRegisPending(input: $input) {
      id
      date
      doctorId
      session {
        endTime
        startTime
      }
      cancel
      packageId
      specialtyId
      vaccineId
      typeOfService
      packageId
      state
      profileId
    }
  }
`;
const getProfileTicketByCustomerId = gql`
  query getProfileTicketByCustomerId($input: String!) {
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
      register {
        id
        date
        typeOfService
        state
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
const getAllDoctorPaginationOfFacilityForClient = gql`
  query getAllDoctorPaginationOfFacilityForClient(
    $filter: FilterDoctorInput!
    $page: Float
    $limit: Float
    $facilityId: String!
    $sortField: String
    $sortOrder: String
  ) {
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
          }
        }
      }
    }
  }
`;

const getTotalDoctorsCountForClient = gql`
  query getTotalDoctorsCountForClient(
    $filter: FilterDoctorInput!
    $facilityId: String!
  ) {
    getTotalDoctorsCountForClient(filter: $filter, facilityId: $facilityId)
  }
`;
