import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
  query Assets {
    artikel(where: {id: "clrqfdkc562vu0bvzgjf9cc6i"}) {
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
  console.log(query);

  return await hygraph.request(query);

}