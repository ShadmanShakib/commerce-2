import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "utils/context";
import { Layout } from "components/common";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <MainProvider>
      <MantineProvider withCSSVariables withGlobalStyles>
        <QueryClientProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </MantineProvider>
    </MainProvider>
  );
}

export default MyApp;
