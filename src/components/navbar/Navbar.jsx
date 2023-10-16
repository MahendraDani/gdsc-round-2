import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import NavLinkContainer from "./NavLinkContainer";
import MobileNav from "./MobileNav/MobileNav";

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
            sx={{ justifyContent: "start", alignItems: "center", gap: 3 }}
          >
            <Typography>Logo</Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <NavLinkContainer />
            </Box>
          </Stack>
          <Box sx={{ display: { md: "none" } }}>
            <MobileNav />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
