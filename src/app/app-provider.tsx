import { store } from "@/entities/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

<<<<<<< HEAD
export function AppProvider({ children }: { children?: React.ReactNode }) {
  return <Provider store={store()}>{children} </Provider>;
=======

export function AppProvider({ children }: { children?: React.ReactNode }) {
  return (
  <Provider store={store()}>
    {children} </Provider>
  )
>>>>>>> bc952f9fef0bdb70faebe640cfd98bc3a63524dc
}
