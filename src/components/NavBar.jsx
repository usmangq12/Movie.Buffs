import React from "react";
import { useState } from "react";
import { Grid, Button } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Logo } from "../assest";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { MenuBar } from "./Menu";
import { menus } from "../constants";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [items, setItems] = useState([]);

  const handleClick = (event) => {
    const filteredItems = menus.filter((menu) => menu.id === event.target.id)[0]
      .items;
    setItems(filteredItems);

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      item
      direction="row"
      justifyContent="center"
      color="white"
      sx={{ bgcolor: "rgb(3,37,65)" }}
      height="65px"
    >
      <Grid
        container
        item
        alignItems="center"
        xs={5}
        justifyContent="space-around"
      >
        <Button
          sx={{
            textDecoration: "none",
            width: "200px",
            maxWidth: "100%",
          }}
        >
          <img src={Logo} alt="logo" style={{ maxWidth: "100%" }} />
        </Button>

        <Button
          id="menu-btn-1"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
          sx={{
            color: "white",
          }}
        >
          Movies
        </Button>

        <Button
          id="menu-btn-2"
          aria-owns={anchorEl ? "simple-menu-2" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
          sx={{
            color: "white",
          }}
        >
          TV Shows
        </Button>

        <Button
          id="menu-btn-3"
          aria-owns={anchorEl ? "simple-menu-3" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
          sx={{
            color: "white",
          }}
        >
          People
        </Button>

        <Button
          id="menu-btn-4"
          aria-owns={anchorEl ? "simple-menu-4" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
          sx={{
            color: "white",
          }}
        >
          More
        </Button>

        <MenuBar
          id="simple-menu-4"
          anchorEl={anchorEl}
          onClose={handleClose}
          items={items}
        />
      </Grid>

      <Grid
        container
        item
        alignItems="center"
        xs={4}
        marginLeft="100px"
        justifyContent="space-around"
      >
        <Button
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          <AddSharpIcon />
        </Button>

        <Button
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "700",
            textTransform: "uppercase",
            border: " 2px solid ",
          }}
        >
          EN
        </Button>

        <Button
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Login
        </Button>

        <Button
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Join TMDB
        </Button>

        <Button
          sx={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          <SearchSharpIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
