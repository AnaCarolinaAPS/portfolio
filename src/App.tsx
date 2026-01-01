import { useTheme } from './hooks/theme';
import { useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import { MainRoutes } from './routes';
import { GlobalStyles } from './themes/GlobalStyles';

function App() {
  const { handleInitTheme, theme } = useTheme()
    
    useEffect(() => {
        // Apply theme saved by user to local storage
        handleInitTheme()
    }, [])
    
    return (
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <MainRoutes>
                
            </MainRoutes>
        </ThemeProvider>
    )
}

export default App
