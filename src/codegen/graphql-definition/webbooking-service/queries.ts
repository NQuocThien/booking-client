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
