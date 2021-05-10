const { gql } = require("@apollo/client");

const SEE_POST_QUERY = gql`
  query seePosts($type: String!, $page: Int) {
    seePosts(type: $type, page: $page) {
      totalCnt
      posts {
        id
        title
        payload
        file
        image
        createdAt
      }
    }
  }
`;
export default SEE_POST_QUERY;
