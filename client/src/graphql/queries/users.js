import gql from "graphql-tag";

export const GET_USER = gql`
  query GetUser({$id: ID!}) {
    user(id: $id) {
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

export const GET_USERS = gql`
  query {
    users {
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
