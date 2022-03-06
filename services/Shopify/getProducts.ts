import Client from "@services/Apollo";
import { gql } from "@apollo/client";

export default async function getProducts() {
  const { data, error, loading } = await Client.query({
    query: gql`
      query Products {
        products(first: 5) {
          edges {
            node {
              id
              handle
              title
              description
              variants(first: 10) {
                edges {
                  node {
                    id
                    image {
                      height
                      url
                      altText
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return { data, error, loading };
}
