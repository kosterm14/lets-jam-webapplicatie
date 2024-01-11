import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query Artikelen {
  detailpaginas(first: 10) {
    title
    tekst {
      text
    }
    slug
  }
}
  `;

  return await hygraph.request(query);
}
