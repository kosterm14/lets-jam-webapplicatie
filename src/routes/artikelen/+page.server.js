import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
  query Assets {
    artikelenHomepages(first: 6) {
      title
      description
      img {
        url
      }
    }
  }
  `;

  return await hygraph.request(query);
}
