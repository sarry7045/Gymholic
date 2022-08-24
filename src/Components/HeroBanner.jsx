import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "112px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "34px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "195px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "20px",
          textTransform: "none",
          color: "white",
          borderRadius: "7px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "200px",
      }}
    >
      Exercise
    </Typography>
    <img
      src="./assets/images/bannerr.png"
      alt="hero-banner"
      className="hero-banner-img"
    />
  </Box>
);

export default HeroBanner;
