import { store } from "@/shared/api/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";


export function AppProvider({ children }: { children?: React.ReactNode }) {
  return (
  <Provider store={store}>
    {children} </Provider>
  )
}
