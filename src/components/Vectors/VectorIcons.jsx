import { Bookmarks, Sort } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

const VectorIcons = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "start",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Sort sx={{ fontSize: 15, cursor: "pointer" }} />
      <Bookmarks sx={{ fontSize: 15, cursor: "pointer" }} />
    </Stack>
  );
};

export default VectorIcons;
