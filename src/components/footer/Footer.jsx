import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Container>
      <Stack
        direction={"column"}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          pt: 8,
          pb: 6,
          gap: 2,
        }}
      >
        <Typography sx={{ fontFamily: "Poppins" }}>
          Developed by Mahendra Dani
        </Typography>
        <Stack
          direction={"row"}
          sx={{ alignItems: "center", justifyContent: "center", gap: 2 }}
        >
          <Link to={"https://github.com/MahendraDani"} target="_blank">
            <GitHub />
          </Link>
          <Link to={"https://linkedin.com/in/mahendra-dani"} target="_blank">
            <LinkedIn />
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
