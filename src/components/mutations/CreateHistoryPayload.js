const { gql } = require("@apollo/client/core");

const HISTORY_PAYLOAD_MUTATION = gql`
  mutation updateHistory($year: Int!, $payload: String!) {
    updateHistory(year: $year, payload: $payload) {
      ok
    }
  }
`;
export default HISTORY_PAYLOAD_MUTATION;
