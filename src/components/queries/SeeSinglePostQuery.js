const { gql } = require("@apollo/client");

const SEE_SINGLE_POST_QUERY = gql`
  query seeSinglePost($id: Int!) {
    seeSinglePost(id: $id) {
      id
      title
      payload
      file
      image
      createdAt
    }
  }
`;
export default SEE_SINGLE_POST_QUERY;
