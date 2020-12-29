import { gql } from "apollo-server-micro";

export default gql`
  type CloudinaryResource {
    id: String
    width: Int
    height: Int
    format: String
    resourceType: String
    createdAt: DateTime

    # Dynamic props
    url(height: Int, width: Int): String
  }
`;