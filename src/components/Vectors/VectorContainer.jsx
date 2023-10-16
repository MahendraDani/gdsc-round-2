import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import VectorTypes from "./VectorTypes";
import VectorIcons from "./VectorIcons";
import VectorCards from "./VectorCards";

const VectorContainer = () => {
  return (
    <Container>
      <Stack direction={"column"} gap={2}>
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <VectorTypes />
          <VectorIcons />
        </Stack>
        <VectorCards />
      </Stack>
    </Container>
  );
};

export default VectorContainer;
