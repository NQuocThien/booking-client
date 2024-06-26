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
      shares
    }
  }
`;
const getProfileByCustomerKey = gql`
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
  query getAllMedicalFacilityPaginationForClient(
    $search: String
    $searchField: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $typeOfFacility: String
  ) {
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
const getTotalFacilities = gql`
  query getTotalFacilitiesCountForClient(
    $search: String
    $searchField: String
    $type: String
  ) {
    getTotalFacilitiesCountForClient(
      search: $search
      searchField: $searchField
      type: $type
    )
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
const getProfileTicketByCustomerId = gql`
  query getProfileTicketByCustomerId(
    $input: String!
    $cancel: Boolean
    $stateRegis: String
  ) {
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
const getProfileTicketByCustomerKey = gql`
  query getProfileTicketByCustomerKey(
    $customerKey: String!
    $cancel: Boolean
    $stateRegis: String
  ) {
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

const getTotalDoctorsCountForClient = gql`
  query getTotalDoctorsCountForClient(
    $filter: FilterDoctorInput!
    $facilityId: String!
  ) {
    getTotalDoctorsCountForClient(filter: $filter, facilityId: $facilityId)
  }
`;

const getTotalPackagesCountForClient = gql`
  query getTotalPackagesCountForClient($search: String, $facilityId: String!) {
    getTotalPackagesCountForClient(search: $search, facilityId: $facilityId)
  }
`;
const getAllPackagePaginationOfFacilityForClient = gql`
  query getAllPackagePaginationOfFacilityForClient(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $facilityId: String!
  ) {
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
const getTotalMedicalSpecialtiesCountForClient = gql`
  query getTotalMedicalSpecialtiesCountForClient(
    $search: String
    $facilityId: String!
  ) {
    getTotalMedicalSpecialtiesCountForClient(
      search: $search
      facilityId: $facilityId
    )
  }
`;
const getAllMedicalSpecialtiesPaginationOfFacilityForClient = gql`
  query getAllMedicalSpecialtiesPaginationOfFacilityForClient(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $facilityId: String!
  ) {
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

const getAllVaccinationPaginationOfFacilityForClient = gql`
  query getAllVaccinationPaginationOfFacilityForClient(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $facilityId: String!
  ) {
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

const getTotalVaccinationsCountForClient = gql`
  query getTotalVaccinationsCountForClient(
    $search: String
    $facilityId: String!
  ) {
    getTotalVaccinationsCountForClient(search: $search, facilityId: $facilityId)
  }
`;

const getAllMedicalFacilityHaveSrvPaginationForClient = gql`
  query getAllMedicalFacilityHaveServicePagination(
    $search: String
    $page: Float!
    $limit: Float!
    $sortField: String
    $sortOrder: String
    $type: String
  ) {
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

const getTotalFacilitiesHaveSrvCountForClient = gql`
  query getTotalFacilitiesHaveSrvCountForClient(
    $search: String
    $type: String
  ) {
    getTotalFacilitiesHaveSrvCountForClient(search: $search, type: $type)
  }
`;
const getAllBlogPaginationForClient = gql`
  # Write your query or mutation here
  query getAllBlogPaginationForClient(
    $search: String
    $page: Float!
    $limit: Float!
    $sortOrder: String
    $type: String
  ) {
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
const getTotalBlogsCountForClient = gql`
  query getTotalBlogsCountForClient($search: String, $type: String) {
    getTotalBlogsCountForClient(search: $search, type: $type)
  }
`;

const getBlogBySlug = gql`
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

const getAllNotificationByUserId = gql`
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
const getRegisById = gql`
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
const getEvaluateByRegisId = gql`
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
const getEvaluateByOption = gql`
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
