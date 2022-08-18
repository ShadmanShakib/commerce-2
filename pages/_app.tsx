import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "utils/context";
import { Layout } from "components/common";
import { MantineProvider } from "@mantine/core";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <MantineProvider withCSSVariables withGlobalStyles>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </MainProvider>
  );
}

export default MyApp;
