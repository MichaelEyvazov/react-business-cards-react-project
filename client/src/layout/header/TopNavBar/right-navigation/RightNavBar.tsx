import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchBar from "../search-bar/SearchBar";
import MoonIcon from "@mui/icons-material/DarkMode";
import SunIcon from "@mui/icons-material/LightMode";
import MoreButton from "./MoreButton";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useUser } from "../../../../users/providers/UserProvider";
import { useMenu } from "../menu/MenuProvider";

const RightNavBar = () => {
  const setOpen = useMenu();
  const { isDark, toggleDark } = useTheme();
  const { user } = useUser();

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton onClick={toggleDark} sx={{ marginLeft: 1 }}>
          {isDark ? <SunIcon /> : <MoonIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged />}
      </Box>

      <MoreButton onClick={() => setOpen(true)} />
    </>
  );
};

export default RightNavBar;
