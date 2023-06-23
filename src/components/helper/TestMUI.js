import React, { useState } from "react";
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Modal,
  Box,
} from "@mui/material";

export default function TestMUI() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar>
        {/* <Toolbar>
          <Typography sx={{ padding: "5px" }}>Home</Typography>
          <Typography sx={{ padding: "5px" }}>User</Typography>
          <Typography sx={{ padding: "5px" }}>Employee</Typography>
        </Toolbar> */}
        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Home" active />
          <Tab label="User" />
          <Tab label="Employee" />
        </Tabs>
      </AppBar>
      <Typography variant="h3">Hello</Typography>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add New User
      </Button>
      <Button variant="contained" color="info">
        Add New Employee
      </Button>
      <Button
        variant="contained"
        size="small"
        color="warning"
        sx={{ color: "black", margin: "5px" }}
      >
        Update
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ width: "200px", backgroundColor: "red", padding: "30px" }}>
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" />
            <br />
            <label htmlFor="">Name</label>
            <input type="text" />
            <br />
            <label htmlFor="">Name</label>
            <input type="text" />
          </form>
        </Box>
      </Modal>
    </>
  );
}
