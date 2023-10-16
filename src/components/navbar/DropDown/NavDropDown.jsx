import { Box, Menu, MenuItem, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import DropDownItem from "./DropDownItem";

const NavDropDown = ({ name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownItems = [
    {
      name: "Vectors",
    },
    {
      name: "PSD",
    },
    {
      name: "Videos",
    },
  ];
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "start",
          alignItems: "center",
          gap: 0.3,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Typography>{name}</Typography>
        <Box>
          <ArrowDropDownOutlined />
        </Box>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {dropDownItems.map((item, index) => {
          return (
            <DropDownItem onClick={handleClose} name={item.name} key={index} />
          );
        })}
      </Menu>
    </Box>
  );
};

export default NavDropDown;
