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
        name
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
