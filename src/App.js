import React, { useMemo, useState, createContext } from "react";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import Home from "./routeing/pages/Home";
import Header from "./routeing/components/Header";
import Footer from "./routeing/components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme"; //Dark Theme
import "./styles.css"; // keeps the footer down
import NotFound from "./routeing/pages/NotFound";
import Products from "./routeing/pages/Products";
import NewProducts from "./routeing/pages/NewProducts";
import FeaturedProducts from "./routeing/pages/FeaturedProducts";
import User from "./routeing/components/User";
import UserDetails from "./routeing/components/UserDetails";
import CircularProgress from "@mui/material/CircularProgress";

// import AboutUs from "./routeing/pages/AboutUs";
const LazyAbout = React.lazy(() => import("./routeing/pages/AboutUs"));
// brings the bundle slowing and smooth

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
            {/* Keeps footer below */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/about-us"
                element={
                  // this is where you add the loading sign and page
                  <React.Suspense fallback={<CircularProgress />}>
                    <LazyAbout />
                  </React.Suspense>
                }
              ></Route>
              <Route path="/products" element={<Products />}>
                <Route index element={<NewProducts />} />
                {/* This is to give a default sub component when you go to prducts page */}
                <Route path="new" element={<NewProducts />}></Route>
                <Route path="featured" element={<FeaturedProducts />}></Route>
              </Route>
              <Route path="user" element={<User />}>
                <Route path=":userId" element={<UserDetails />} />
                {/* ':userId' is a param , which mean dynamic link it can be anything a string or a number */}
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
