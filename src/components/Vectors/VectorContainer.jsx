import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import VectorTypes from "./VectorTypes";
import { Bookmarks, Sort } from "@mui/icons-material";

const VectorContainer = () => {
  return (
    <Container>
      <Stack direction={"cloumn"}>
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <VectorTypes />
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
        </Stack>
      </Stack>
    </Container>
  );
};

export default VectorContainer;
