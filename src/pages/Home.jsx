import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box, Stack } from "@mui/material";
import Landing from "../components/Landing";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Stack direction={"column"}>
      <Navbar />
      <Landing />
      <Footer />
    </Stack>
  );
};

export default Home;
