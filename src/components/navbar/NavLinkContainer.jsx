import { Box, Stack } from "@mui/material";
import React from "react";
import NavLink from "./NavLink";
import NavDropDown from "./DropDown/NavDropDown";

const NavLinkContainer = () => {
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
    <Stack
      direction={"row"}
      sx={{ gap: 4, justifyContent: "start", alignItems: "center" }}
    >
      <Stack direction={"row"} sx={{ gap: 4 }}>
        {NavLinks.map((navLink, index) => {
          return <NavLink name={navLink.name} to={navLink.to} key={index} />;
        })}
      </Stack>
      <NavDropDown name={"More"} />
    </Stack>
  );
};

export default NavLinkContainer;
