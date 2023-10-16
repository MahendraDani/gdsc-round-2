import { Stack } from "@mui/material";
import React from "react";
import { ArrowDropDownOutlined, SearchOutlined } from "@mui/icons-material";

const Searchbar = () => {
  return (
    <Stack
      direction={"row"}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <div className="flex flex-row items-center justify-start gap-2 font-[Poppins] p-2 ">
        <button className="border-[1.5px] border-black p-1 rounded-sm bg-white">
          <div className="flex items-center justify-between">
            <div className="text-sm">Vectors</div>
            <div>
              <ArrowDropDownOutlined />
            </div>
          </div>
        </button>
        <div className="flex flex-row items-center justify-between gap-1 border-[1.5px] border-black px-2 rounded-sm bg-white">
          <input
            placeholder="Search"
            className="p-1 w-full md:w-[40em] outline-none focus:outline-none"
          />
          <div>
            <SearchOutlined />
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default Searchbar;
