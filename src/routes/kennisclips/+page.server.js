// import { gql } from "graphql-request";
// import { hygraph } from "$lib/utils/hygraph.js";

// import getQueryUrl from "$lib/queries/kennisclipurl.js";

// export const load = async ({ params }) => {
//   const { slug } = params;
//   const queryUrl = getQueryUrl(gql, slug);

//   return await hygraph.request(queryUrl);
// };

import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
  let query = gql`
    query VisualThinking {
      categories(first: 10) {
        title
        youTubeLink
        content {
          html
        }
      }
    }
  `;

  return await hygraph.request(query);
}
