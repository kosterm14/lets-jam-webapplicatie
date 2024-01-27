import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = gql`
      query Over {
        overs {
            title
            text {
                html
            }
        }
    }
  `;

    return await hygraph.request(query);
}