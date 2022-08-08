import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "utils/context";
import { Layout } from "components/common";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainProvider>
  );
}

export default MyApp;
