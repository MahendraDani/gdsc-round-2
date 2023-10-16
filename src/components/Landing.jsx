import { Container, Stack } from "@mui/material";
import React from "react";
import Content from "./Content";
import Searchbar from "./Searchbar";
import VectorContainer from "./Vectors/VectorContainer";

const Landing = () => {
  return (
    <Container sx={{ mt: 3 }}>
      <Stack direction={"column"} sx={{ gap: 3 }}>
        <Content />
        <Searchbar />
        <VectorContainer />
      </Stack>
    </Container>
  );
};

export default Landing;
