import React from "react";
import { Button } from "@mui/material";
function handleEvent() {
  return null;
}
export default function AddButton({
  label,
  color = "primary",
  event = handleEvent(),
}) {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={event}
      sx={{ marginTop: "10px" }}
    >
      {label}
    </Button>
  );
}
