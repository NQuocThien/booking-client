import { gql } from "@apollo/client";
const notifyCreated = gql`
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
