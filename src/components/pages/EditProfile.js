import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import AddForm from "../shared/AddForm";

export default function EditProfile() {
  const location = useLocation();
  return (
    <Box
      sx={{
        minWidth: "60vw",
        minHeight: "80vh",
        flexDirection: "column",
        gap: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Update Profile</Typography>
      <AddForm submitLabel="Update" singlevalues={location.state} />
    </Box>
  );
}
