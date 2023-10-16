import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import image1 from "/image1.png";
import image2 from "/image2.png";
import image3 from "/image3.png";

const VectorCardGroup = () => {
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
    <AvatarGroup max={3}>
      {cards.map((item, index) => {
        return <Avatar alt={item.name} src={item.imageUrl} key={index} />;
      })}
    </AvatarGroup>
  );
};

export default VectorCardGroup;
