import { Stack, Typography } from "@mui/material";
import React from "react";

const VectorTypes = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "start",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>Latest</Typography>
      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>
        Popular
      </Typography>
      <Typography sx={{ fontFamily: "Poppins, sans-serif" }}>|</Typography>
      <Typography
        sx={{ fontFamily: "Poppins, sans-serif", color: "yellow.main" }}
      >
        Premium
      </Typography>
      <Typography
        sx={{ fontFamily: "Poppins, sans-serif", color: "blue.main" }}
      >
        Free
      </Typography>
    </Stack>
  );
};

export default VectorTypes;
