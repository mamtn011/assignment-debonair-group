import React, { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { Box, Typography } from "@mui/material";

export default function Single() {
  const { loadSingleData } = useContext(DataContext);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      if (id) {
        const sdata = await loadSingleData(+id);
        setData(sdata);
      }
    })();
  }, [id]);

  return (
    <Box
      sx={{
        minWidth: "60vw",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minWidth: "60vw",
          maxWidth: "80vw",
          minHeight: "50vh",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data && (
          <>
            <Typography variant="h4" p={3}>
              Name: {data.firstName + " " + data.lastName}
            </Typography>
            <Typography variant="h6" component="p">
              Employee Type: {data.employeeType}
            </Typography>
            <Typography variant="h6" component="p">
              Discrict: {data.district}
            </Typography>
            <Typography variant="h6" component="p">
              Division: {data.disvision}
            </Typography>
            <NavLink to="/edit" state={data}>
              Update Profile
            </NavLink>
          </>
        )}
      </Box>
    </Box>
  );
}
