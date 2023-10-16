import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box, Stack } from "@mui/material";
import Landing from "../components/Landing";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#edece2] via-[#d1e3fd] to-[#f3e5df]">
      <Stack direction={"column"}>
        <Navbar />
        <Landing />
        <Footer />
      </Stack>
    </div>
  );
};

export default Home;
