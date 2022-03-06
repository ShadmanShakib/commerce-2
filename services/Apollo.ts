import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}.myshopify.com/api/2022-01/graphql.json`,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  headers: {
    "X-Shopify-Storefront-Access-Token":
      process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN || "",
  },
});

export default Client;
