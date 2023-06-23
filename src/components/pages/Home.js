import React, { useState } from "react";
import { Grid, Tab, Tabs, Toolbar, Box } from "@mui/material";
import UserTab from "../helper/UserTab";
import EmploeeTab from "../helper/EmploeeTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Grid sx={{ placeItems: "center" }} container>
        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="User" {...a11yProps(0)} />
            <Tab label="Employee" {...a11yProps(1)} />
          </Tabs>
        </Grid>
      </Grid>
      <div index={value} style={{ maxWidth: "90vw", margin: "auto" }}>
        <TabPanel value={value} index={0}>
          <UserTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EmploeeTab />
        </TabPanel>
      </div>
    </>
  );
}
