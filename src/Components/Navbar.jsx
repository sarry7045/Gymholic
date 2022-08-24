import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "123px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <img
            src="./assets/images/fitness.png"
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0px 20px" }}
          />
        </Link>
        <Stack
          direction="row"
          gap="60px"
          fontFamily="Alegreya"
          fontSize="21px"
          alignItems="flex-end"
          marginBottom="13px"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              // borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
