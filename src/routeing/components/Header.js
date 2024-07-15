import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ThemeToggle from "./ThemeToggle"; //Dark Theme
// import { Link } from "react-router-dom"; // This is used to for normal link
import { NavLink, useLocation } from "react-router-dom"; //This is used for finding the active link

function Header() {
  const location = useLocation();

  // const isProductRoute = /^\/products(\/.*)?$/i.test(location.pathname); // for all sub routes for products

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          DEMO
        </Typography>
        <Button
          color="inherit"
          component={NavLink}
          to="/"
          sx={{
            fontWeight: location.pathname === "/" ? "bold" : "normal",
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/about-us"
          sx={{
            fontWeight: location.pathname === "/about-us" ? "bold" : "normal",
          }}
        >
          About Us
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to="/products"
          sx={{
            fontWeight: location.pathname === "/products" ? "bold" : "normal",
          }}
        >
          Products
        </Button>
        <ThemeToggle /> {/* Dark Theme */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
