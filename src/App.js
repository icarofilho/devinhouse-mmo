// Styles
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
// Hooks
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
// Components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// Pages
import News from "./pages/News";
import Games from "./pages/Games";
import Details from "./pages/Details";
import { lightTheme } from "./Theme/LightTheme";
import { DarkTheme } from "./Theme/DarkTheme";

function App() {
    
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark((theme) => !theme);
    };

    return (
        <>
            <ThemeProvider theme={dark ? DarkTheme : lightTheme}>
                <GlobalStyle />
                <BrowserRouter>
                    <Header toggleTheme={toggleTheme} theme={dark}/>
                    <Switch>
                        <Route exact path="/" component={News} />
                        <Route exact path="/games" component={Games} />
                        <Route exact path="/games/:id" component={Details} />
                        <Route
                            path="*"
                            component={() => {
                                return <h1>404</h1>;
                            }}
                        />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
