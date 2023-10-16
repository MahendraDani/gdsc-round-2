import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ name, to }) => {
  return (
    <Link to={to}>
      <Typography
        sx={{
          ":hover": {
            color: "blue.main",
          },
        }}
      >
        {name}
      </Typography>
    </Link>
  );
};

export default NavLink;
