import { Box, Container } from "@mui/material";
import React from "react";
import NavLinkContainer from "./NavLinkContainer";

const Navbar = () => {
  const NavLinks = [
    {
      name: "Vectors",
      to: "/",
    },
    {
      name: "Photos",
      to: "/",
    },
    {
      name: "PSD",
      to: "/",
    },
    {
      name: "Video",
      to: "/",
    },
  ];
  return (
    <Box>
      <Container sx={{ p: 3 }}>
        <NavLinkContainer />
      </Container>
    </Box>
  );
};

export default Navbar;
