import React from "react";
import { Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Grid
        xs={12}
        sx={{
          backgroundColor: "#111",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <Typography variant="p" component="p" color="#fff">
          Copyright &copy; All right reseved.
        </Typography>
      </Grid>
    </>
  );
}
