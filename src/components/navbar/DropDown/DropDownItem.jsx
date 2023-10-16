import { MenuItem } from "@mui/material";
import React from "react";

const DropDownItem = ({ onClick, name }) => {
  return (
    <div>
      <MenuItem
        onClick={onClick}
        sx={{
          bgcolor: "transparent",
          ":hover": { bgcolor: "transparent", color: "blue.main" },
          ":focus": { bgcolor: "transparent" },
        }}
      >
        {name}
      </MenuItem>
    </div>
  );
};

export default DropDownItem;
