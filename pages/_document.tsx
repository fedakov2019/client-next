import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { AppType } from "next/app";
import {  theme, roboto,createEmotionCache} from "@/app";
import {DocumentHeadTags,documentGetInitialProps} from '@mui/material-nextjs/v14-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v14-pagesRouter'


export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {

  
  const initialProps = await documentGetInitialProps(ctx);//,{
  //  emotionCache:createEmotionCache(),
  //});


  return initialProps;
};
