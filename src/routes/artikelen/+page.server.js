import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
      query Assets {
        introTeksts {
          title
          description {
            text
          }
        }
        artikelenHomepages(first: 6) {
          img {
            url
          }
          title
          description
        }
      }
  `;

  return await hygraph.request(query);
}
