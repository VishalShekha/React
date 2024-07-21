import React from "react";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <Button variant="contained" component={Link} to="new">
        New
      </Button>
      <Button variant="contained" component={Link} to="featured">
        Featured
      </Button>
      <Outlet />
      {/* This is to tell the react where to render the sub route components */}
    </div>
  );
}

export default Products;
