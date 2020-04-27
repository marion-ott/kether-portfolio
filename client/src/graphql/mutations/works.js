import gql from "graphql-tag";

export const CREATE_WORK = gql`
  mutation CreateWork($title: String!, $description: String!) {
    createWork(input: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;

export const DELETE_WORK = gql`
  mutation DeleteWork($id: ID!) {
    deleteWork(id: $id) {
      id
      title
      description
    }
  }
`;

export const UPDATE_WORK = gql`
  mutation UpdateWork($id: ID!, $title: String, $description: String) {
    updateWork(id: $id, input: { title: $title, description: $description }) {
      id
      title
      description
    }
  }
`;
