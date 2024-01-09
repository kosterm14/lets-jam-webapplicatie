import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query ArtikelenHomepages {
      artikelenHomepages {
        description
        id
        title
        img {
          url
        }
      }
    }
  `;

  return await hygraph.request(query);
}
