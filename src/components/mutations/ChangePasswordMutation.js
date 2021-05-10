const { gql } = require("@apollo/client");

const CHANGE_PASSWORD_MUTATION = gql`
  mutation changePassword($curPassword: String!, $newPassword: String!) {
    changePassword(curPassword: $curPassword, newPassword: $newPassword) {
      ok
    }
  }
`;

export default CHANGE_PASSWORD_MUTATION;
