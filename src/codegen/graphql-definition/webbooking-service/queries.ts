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
