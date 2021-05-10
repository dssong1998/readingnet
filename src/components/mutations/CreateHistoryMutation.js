const { gql } = require("@apollo/client");

const CREATE_HISTORY_MUTATION = gql`
  mutation createHistory($year: Int!) {
    createHistory(year: $year) {
      ok
    }
  }
`;
export default CREATE_HISTORY_MUTATION;
