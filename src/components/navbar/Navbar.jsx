import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavLinkContainer from "./NavLinkContainer";
import MobileNav from "./MobileNav/MobileNav";
import gmail from "/gmail.png";
import facebook from "/facebook.png";
import Logo from "/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Container sx={{ p: { md: 3, xs: 2 } }}>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Stack
            direction={"row"}
            sx={{ justifyContent: "start", alignItems: "center", gap: 6 }}
          >
            <Link to={"/"}>
              <div className="w-10">
                <img src={Logo} alt="Logo" />
              </div>
            </Link>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <NavLinkContainer />
            </Box>
          </Stack>
          <Box sx={{ display: { md: "none" } }}>
            <MobileNav />
          </Box>
          <Stack
            direction={"row"}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "start",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderColor: "black.main",
                  color: "black.main",
                  fontFamily: "Poppins, sans-serif",
                  ":hover": {
                    bgcolor: "black.main",
                    borderColor: "black.main",
                    color: "white.main",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
            <Stack
              direction={"row"}
              sx={{ justifyContent: "start", alignItems: "center", gap: 0.1 }}
            >
              <div className="w-12 cursor-pointer">
                <img src={gmail} alt="Gmail logo" />
              </div>
              <div className="w-12 cursor-pointer">
                <img src={facebook} alt="Gmail logo" />
              </div>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
