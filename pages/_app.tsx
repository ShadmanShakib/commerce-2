import { MantineProvider } from "@mantine/core";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import Client from "../services/Apollo";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={Client}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </ApolloProvider>
  );
}

export default MyApp;
