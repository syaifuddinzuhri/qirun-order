import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/roboto/700.css";
import "../styles/carousel.css";
import 'react-datetime/css/react-datetime.css';

import { ChakraProvider } from "@chakra-ui/react";
import type { AppContext } from "next/app";
import App from "next/app";
import { DefaultSeo } from "next-seo";
import type { ReactElement } from "react";
import React from "react";

import { theme } from "@/configs/themeConfiguration";
import { appHead } from "@/constants/app";
import type { NextAppProps } from "@/interfaces/next";

const MyApp = ({ Component, pageProps }: NextAppProps): ReactElement => {
  const getLayout = Component?.layout ?? ((children: JSX.Element) => children);
  const page = getLayout(<Component {...pageProps} />);

  return (
    <ChakraProvider theme={theme}>
        <DefaultSeo {...appHead} />
        <>{page}</>
    </ChakraProvider>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
