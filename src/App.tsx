import React, { useContext, useState } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { getTheme, ThemeName } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvier, ThemeContext } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvier>
        <ThemeSwitcher />
        <Layout>
          <Home />
        </Layout>
    </BookStoreThemeProvier>
  );
}

export default App;
