import React, { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import NavLink from "../NavLink";

const MobileNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleShowMobileNav = () => {
    setShowMobileNav(true);
  };
  const handleCloseMovileNav = () => {
    setShowMobileNav(false);
  };
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
      <Box onClick={handleShowMobileNav} sx={{ cursor: "pointer" }}>
        <Menu />
      </Box>
      {showMobileNav && (
        <Stack
          id="mobile-nav"
          sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: "50%",
            bgcolor: "white.main",
            p: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction={"column"}
            sx={{ gap: 2, justifyContent: "center", alignItems: "start" }}
          >
            {NavLinks.map((link, index) => {
              return <NavLink name={link.name} to={link.to} key={index} />;
            })}
          </Stack>
          <Box
            sx={{ position: "fixed", top: 16, right: 16, cursor: "pointer" }}
            onClick={handleCloseMovileNav}
          >
            <Close />
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default MobileNav;
