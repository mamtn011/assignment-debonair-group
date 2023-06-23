import React from "react";
import { Box } from "@mui/material";

export default function ModalBox({ children }) {
  return (
    <Box
      display="flex"
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
