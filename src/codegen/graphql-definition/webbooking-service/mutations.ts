import { gql } from "@apollo/client";
const updateUser = gql`
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

const updateUserWithPass = gql`
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
const createCustomerByUserId = gql`
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
const loginCustomer = gql`
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
const updateCustomer = gql`
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
const createProfile = gql`
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
const updateProfileInput = gql`
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
const deleteProfileInput = gql`
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
const signUp = gql`
  mutation signup($input: CreateUserInput!) {
    signup(createUserInput: $input) {
      id
    }
  }
`;
const createRegisterSpecialt = gql`
  mutation createRegisterMedicalSpecialty(
    $input: CreateRegisterSpecialtyInput!
  ) {
    createRegisterSpecialty(input: $input) {
      id
    }
  }
`;
const createRegisDoctor = gql`
  mutation createRegisterDoctor($input: CreateRegisterDoctorInput!) {
    createRegisterDoctor(input: $input) {
      id
    }
  }
`;
const createRegisterPackage = gql`
  mutation createRegisterPackage($input: CreateRegisterPackageInput!) {
    createRegisterPackage(input: $input) {
      id
    }
  }
`;
const createRegisterVaccination = gql`
  mutation createRegisterVaccination($input: CreateRegisterVaccineInput!) {
    createRegisterVaccine(input: $input) {
      id
    }
  }
`;
const cancelRegister = gql`
  mutation cancelRegister($id: String!) {
    cancelRegister(id: $id) {
      id
    }
  }
`;
const seenAllNotificationByUserId = gql`
  mutation seenAllNotificationByUserId($userId: String!) {
    seenAllNotification(userId: $userId)
  }
`;
const seenNotificationById = gql`
  mutation seenNotificationById($id: String!) {
    seenNotificationById(id: $id)
  }
`;
const createEvaluate = gql`
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

const updateEvaluate = gql`
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
const shareProfile = gql`
  mutation shareProfile($profileId: String!, $customerKey: String!) {
    shareProfile(profileId: $profileId, customerKey: $customerKey) {
      id
    }
  }
`;
