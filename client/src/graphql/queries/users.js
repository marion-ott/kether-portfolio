import gql from "graphql-tag";

export const GET_USER = gql`
  query User($id: ID!) {
    user(where: { id: $id }) {
      id
      firstName
      lastName
      email
      phone
      address
      city
      zipCode
      bio
      experiences {
        id
        category
        role
        startDate
        endDate
        company
      }
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
      experiences {
        id
        category
        role
        startDate
        endDate
        company
      }
    }
  }
`;
