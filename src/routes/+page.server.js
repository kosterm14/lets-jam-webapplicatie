import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = gql`
      query Homepage {
        homepages {
            title
            text {
                html
            }   
            image1 {
                url
            }
            image2 {
                url
            }
        }
    }
  `;

    return await hygraph.request(query);
}