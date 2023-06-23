import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#111" }}>
        <Toolbar>
          <Grid sx={{ placeItems: "center" }} container>
            <Grid xs={2} item>
              <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <HomeIcon fontSize="large" />
              </NavLink>
            </Grid>
            <Grid
              xs={10}
              item
              sx={{ display: "flex", justifyContent: "right" }}
            >
              <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <Typography variant="h5">Home</Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
