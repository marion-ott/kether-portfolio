import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: Int!
    $address: String
    $city: String
    $zipCode: String
    $bio: String
  ) {
    createUser(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        address: $address
        city: $city
        zipCode: $zipCode
        bio: $bio
      }
    ) {
      id
      firstName
      lastName
      email
      phone
      address
      city
      zipCode
      bio
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $phone: Int
    $address: String
    $city: String
    $zipCode: String
    $bio: String
  ) {
    updateUser(
      id: $id
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        address: $address
        city: $city
        zipCode: $zipCode
        bio: $bio
      }
    ) {
      id
      firstName
      lastName
      email
      phone
      address
      city
      zipCode
      bio
    }
  }
`;
