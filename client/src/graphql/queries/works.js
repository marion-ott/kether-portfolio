import gql from "graphql-tag";

export const GET_WORK = gql`
  query GetWork($id: ID!) {
    work(id: $id) {
      id
      title
      description
    }
  }
`;

export const GET_WORKS = gql`
  query {
    works {
      id
      title
      description
    }
  }
`;
