const { gql } = require("@apollo/client");

const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $type: String!
    $title: String!
    $payload: String!
    $file: Upload
    $image: Upload
  ) {
    createPost(
      type: $type
      title: $title
      payload: $payload
      file: $file
      image: $image
    ) {
      ok
    }
  }
`;
export default CREATE_POST_MUTATION;
