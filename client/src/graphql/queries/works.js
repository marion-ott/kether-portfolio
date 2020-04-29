import gql from "graphql-tag";

export const GET_WORK = gql`
  query Work($id: ID!) {
    work(where: { id: $id }) {
      id
      title
      organization
      description
      skills
      softwares
    }
  }
`;

export const GET_WORKS = gql`
  query {
    works {
      id
      title
    }
  }
`;
