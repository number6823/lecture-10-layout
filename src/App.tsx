import GlobalStyle from "./styles/GlobalStyle.ts";
import { RouterProvider } from "react-router";
import { AppRouter } from "./router/AppRouter.tsx";
import {ThemeProvider} from "styled-components";
import { DarkTheme, LightTheme } from "./styles/theme.ts";
import { useState } from "react";

function App() {
    const [thema,setThema] = useState<"light" |"dark" >("light");

    const onClick= () => {
        if (thema == "light") {
            setThema("dark");
        } else {
            setThema("light");
        }
    }
    return (
        <ThemeProvider theme={thema === "light" ? LightTheme : DarkTheme}>
            <GlobalStyle />
            <RouterProvider router={AppRouter(onClick)} />
        </ThemeProvider>
    );
}

export default App;
