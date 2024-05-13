import { store } from "@/entities/store";
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import { ReactNode } from "react";
import { Provider } from "react-redux";


export function AppProvider({ children }: { children?: ReactNode }) {
  return <StyledEngineProvider injectFirst>
  <CssVarsProvider><Provider store={store()}>{children} </Provider></CssVarsProvider>
    </StyledEngineProvider>;
}
