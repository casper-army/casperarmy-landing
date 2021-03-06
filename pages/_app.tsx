import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { Navbar } from "../components/global/Navbar/navbar";
import "regenerator-runtime/runtime";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import Script from "next/script";
import { hotjar } from 'react-hotjar'
import { useEffect } from "react";


function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: any) => page);

    useEffect(() => {
      hotjar.initialize(3040506, 6)
    }, [])


  const theme = extendTheme({
    fonts: {
      heading: `'Sora', normal`,
      body: `'Sora', normal`,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-61KGRL6TQY`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-61KGRL6TQY', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@300;400;500;600;700&family=Mulish:wght@300;400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
