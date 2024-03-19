import { gql } from "@apollo/client";
const updateUser = gql`
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

const updateUserWithPass = gql`
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
const createCustomerByUserId = gql`
  mutation createCustomerByUserId($input: CreateCustomerInput!) {
    createCustomer(input: $input) {
      id
      userId
      name
      numberPhone
      email
      address
      gender
      dateOfBirth
      ethnic
    }
  }
`;
const loginCustomer = gql`
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
  }
`;
const updateCustomer = gql`
  mutation updateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      id
      userId
      name
      numberPhone
      email
      address
      gender
      dateOfBirth
      ethnic
    }
  }
`;
