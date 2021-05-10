const { gql } = require("@apollo/client");

const UPDATE_POST_MUTATION = gql`
  mutation updatePost(
    $id: Int!
    $title: String
    $payload: String
    $file: Upload
    $image: Upload
  ) {
    updatePost(
      id: $id
      title: $title
      payload: $payload
      file: $file
      image: $image
    ) {
      ok
      error
      post {
        id
      }
    }
  }
`;
export default UPDATE_POST_MUTATION;
