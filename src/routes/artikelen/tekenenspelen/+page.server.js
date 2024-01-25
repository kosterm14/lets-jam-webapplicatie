import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
  query Assets {
    artikel(where: {id: "clrqc8hjc31p10buk1erd6c3e"}) {
      title
      description
      artikelen {
        title
        description {
          text
        }
        visual {
          url(transformation: {document: {output: {format: webp}}})
        }
      }
    }
  }  
  `;

  return await hygraph.request(query);
}
