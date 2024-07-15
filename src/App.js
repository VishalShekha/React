import React, { useMemo, useState, createContext } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import Home from "./routeing/pages/Home";
import Header from "./routeing/components/Header";
import Footer from "./routeing/components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./routeing/pages/AboutUs";
import { lightTheme, darkTheme } from "./theme"; //Dark Theme
import "./styles.css"; // keeps the footer down
import NotFound from "./routeing/pages/NotFound";
import Products from "./routeing/pages/Products";
import NewProducts from "./routeing/pages/NewProducts";
import FeaturedProducts from "./routeing/pages/FeaturedProducts";
export const ColorModeContext = createContext({ toggleColorMode: () => {} }); //Dark Theme

function App() {
  //Dark Theme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  //Dark Theme

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <div className="content">
            {" "}
            {/* Keeps footer below */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/products" element={<Products />}>
                <Route index element={<NewProducts />} />
                {/* This is to give a default sub component when you go to prducts page */}
                <Route path="new" element={<NewProducts />}></Route>
                <Route path="featured" element={<FeaturedProducts />}></Route>
              </Route>
              <Route path="*" element={<NotFound />} />
              {/* '*' means when no other route is matched */}
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
