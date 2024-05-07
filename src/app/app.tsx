import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { AppProvider } from "./app-provider";
import { Provider } from "react-redux";
import { store } from "@/entities/store";
const inter = Inter({ subsets: ["latin"] });

export function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return (
    <AppProvider>
      <div className={inter.className}>
        <Component {...pageProps} />;
      </div>
    </AppProvider>
  );
=======
  return  (
  <AppProvider>
    <div className={inter.className}>
      <Component {...pageProps} />;
    </div>
    </AppProvider>
  )
  
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
}
