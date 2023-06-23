import React from "react";
import { Box } from "@mui/material";
import { Outlet, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Single from "../pages/Single";
import EditProfile from "../pages/EditProfile";

export default function Content() {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        backgroundColor: "#eeefff",
        padding: "20px",
      }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/edit" element={<EditProfile />} />
      </Routes>
      <Outlet />
    </Box>
  );
}
