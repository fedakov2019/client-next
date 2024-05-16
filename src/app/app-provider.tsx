import { store } from "@/entities/store";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { CssBaseline} from "@mui/material";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { theme } from "./theme";

export function AppProvider({ children }: { children?: ReactNode }) {
  return ( <Provider store={store()}>
    <ThemeProvider>
       
    <CssBaseline />
   {children} 
    </ThemeProvider>
    
    </Provider>)
}
