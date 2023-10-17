import { Stack, Typography } from "@mui/material";
import React from "react";

const Content = () => {
  return (
    <Stack
      direction={"column"}
      sx={{ justifyContent: "center", alignItems: "center", gap: 3 }}
    >
      <Typography
        variant="h3"
        fontFamily={"Poppins,sans-serif"}
        sx={{
          color: "black.main",
          display: { xs: "none", md: "block" },
          textAlign: "center",
        }}
      >
        Popular Pro Stock Images
      </Typography>
      <Typography
        variant="h4"
        fontFamily={"Poppins,sans-serif"}
        sx={{
          color: "black.main",
          display: { xs: "block", md: "none" },
          textAlign: "center",
        }}
      >
        Popular Pro Stock Images
      </Typography>
      <Typography
        variant="body1"
        fontFamily={"Poppins,sans-serif"}
        sx={{
          color: "gray.main",
          width: "25rem",
          textAlign: "center",
        }}
      >
        High quality Vectors with worry-free licensing for personal and
        commercial use.
      </Typography>
    </Stack>
  );
};

export default Content;
