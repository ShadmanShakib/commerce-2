import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainProvider } from "utils/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
