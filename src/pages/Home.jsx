import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box, Stack } from "@mui/material";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <Stack direction={"column"}>
      <Navbar />
      <Landing />
    </Stack>
  );
};

export default Home;
