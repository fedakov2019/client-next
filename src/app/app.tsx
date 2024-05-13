
import { Inter } from "next/font/google";
import { AppProvider } from "./app-provider";


import * as React from "react";
import Head from "next/head";
import { AppProps as NextAppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { EmotionCache } from "@emotion/react";
import { theme } from "./theme";
import { createEmotionCache } from "./create-emotion-cache";
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const inter = Inter({ subsets: ["latin"] });
export interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

export function App(props: AppProps) {
  const { Component,  pageProps } = props;
  return ( 
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppProvider>
      <div className={inter.className}>
        <Component {...pageProps} />;
      </div>
      </AppProvider>
    
      </ThemeProvider>
    </AppCacheProvider>
    
  );
}
    

