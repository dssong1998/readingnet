const { gql } = require("@apollo/client");

const DELETE_HISTORY_MUTATION = gql`
  mutation deleteHistory($id: Int!) {
    deleteHistory(id: $id) {
      ok
    }
  }
`;
export default DELETE_HISTORY_MUTATION;
