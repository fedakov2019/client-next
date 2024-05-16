
import { Inter } from "next/font/google";
import { AppProvider } from "./app-provider";
import {  CssVarsProvider } from '@mui/joy/styles';
import { StyledEngineProvider } from '@mui/material/styles';


import * as React from "react";
import Head from "next/head";
import { AppProps as NextAppProps } from "next/app";
import { ThemeProvider,CssBaseline,useTheme } from "@mui/material";

import { EmotionCache } from "@emotion/react";

import { createEmotionCache } from "./create-emotion-cache";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const inter = Inter({ subsets: ["latin"] });
export interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

export function App(props: AppProps) {
  const { Component,  pageProps } = props;
  const customTheme = useTheme();
  return (  
   <AppCacheProvider {...props}> 
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
     
   
     
       
  <AppProvider>
 
      <div className={inter.className}>
        <Component {...pageProps} />;
      </div>
      </AppProvider>
    
      
   
    </AppCacheProvider>
    
    
  );
}
    


