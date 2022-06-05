import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      heading: `'Sora', normal`,
      body: `'Sora', normal`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400;500;600;700&family=Mulish:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
