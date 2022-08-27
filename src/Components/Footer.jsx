import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="80px">
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "15px", xs: "15px" } }}
      // mt="11px"
      textAlign="center"
      pb="20px"
      marginTop="10px"
    >
      Created by ❤️
      <a
        style={{ marginLeft: "5px" }}
        href="https://surajyadav.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Suraj Yadav
      </a>
    </Typography>
  </Box>
);

export default Footer;
