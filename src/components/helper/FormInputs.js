import React from "react";
import { TextField, Grid, MenuItem, Button } from "@mui/material";

export function TextInput({ name, label, type = "text", formik }) {
  return (
    <Grid item xs="12" className="form__inputs">
      <TextField
        fullWidth
        id={name}
        name={name}
        label={label}
        type={type}
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </Grid>
  );
}

export function SelectInput({ name, label, formik, options }) {
  return (
    <Grid item xs="12" className="form__inputs">
      <TextField
        select
        defaultValue="Select"
        variant="outlined"
        fullWidth
        id={name}
        name={name}
        label={label}
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      >
        {options.map((data) => {
          return (
            <MenuItem key={data.id} value={data.id}>
              {data.name}
            </MenuItem>
          );
        })}
      </TextField>
    </Grid>
  );
}

export function SubmitButton({ label }) {
  return (
    <Grid item xs="12" className="form__inputs">
      <Button color="primary" variant="contained" fullWidth type="submit">
        {label}
      </Button>
    </Grid>
  );
}
