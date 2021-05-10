const { gql } = require("@apollo/client");

const LOGIN_MUTATION = gql`
  mutation login($password: String!) {
    login(password: $password) {
      ok
      token
    }
  }
`;
export default LOGIN_MUTATION;
