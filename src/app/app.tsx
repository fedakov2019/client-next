import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { AppProvider } from "./app-provider";
import { Provider } from "react-redux";
import { store } from "@/shared/api/store";
const inter = Inter({ subsets: ["latin"] });

export function App({ Component, pageProps }: AppProps) {
  return  (
  <Provider store={store}>
    <div className={inter.className}>
      <Component {...pageProps} />;
    </div>
    </Provider>
  )
  
}
