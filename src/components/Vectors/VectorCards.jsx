import React from "react";
import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image3.png";
import { Paper, Stack, Typography } from "@mui/material";

const VectorCards = () => {
  const cards = [
    {
      name: "Dog Illustration",
      imageUrl: image1,
    },
    {
      name: "Astronaut Riding",
      imageUrl: image2,
    },
    {
      name: "Rockstar Guitarist",
      imageUrl: image3,
    },
  ];
  return (
    <Stack
      sx={{
        gap: 4,
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "20em", md: "auto" },
        mx: "auto",
      }}
    >
      {cards.map((item, index) => {
        return (
          <Paper
            key={index}
            sx={{
              flexGrow: "1",
              p: 2,
            }}
          >
            <Stack direction={"column"} gap={2}>
              <img src={item.imageUrl} alt="image 1" className="rounded-lg" />
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  fontFamily: "Poppins,sans-serif",
                }}
              >
                {item.name}
              </Typography>
              <button className="font-[Poppins] text-[#979797]">
                Download
              </button>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default VectorCards;
