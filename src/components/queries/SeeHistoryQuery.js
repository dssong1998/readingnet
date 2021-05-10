const { gql } = require("@apollo/client");

const SEE_HISTORY = gql`
  query seeHistories {
    seeHistories {
      id
      year
      payload
    }
  }
`;

export default SEE_HISTORY;
