import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import VectorTypes from "./VectorTypes";
import VectorIcons from "./VectorIcons";
import VectorCards from "./VectorCards";
import VectorCardGroup from "./VectorCardGroup";
import { ArrowForward } from "@mui/icons-material";

const VectorContainer = () => {
  return (
    <Container>
      <Stack direction={"column"} gap={4}>
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
        <Stack
          direction={"row"}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack
            direction={"row"}
            sx={{ justifyContent: "start", alignItems: "center", gap: 2 }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                width: "7rem",
                color: "gray.main",
                cursor: "pointer",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Discover all collections
            </Typography>
            <VectorCardGroup />
          </Stack>
          <Box>
            <Button
              variant="standard"
              endIcon={<ArrowForward />}
              sx={{ fontFamily: "Poppins", textTransform: "none" }}
            >
              Next Page
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default VectorContainer;
