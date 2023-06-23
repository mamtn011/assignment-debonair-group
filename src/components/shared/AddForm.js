import React, { useContext, useState, useEffect } from "react";
import { useFormikContext, withFormik } from "formik";
import * as yup from "yup";
import { Box, Grid } from "@mui/material";
import { SelectInput, TextInput, SubmitButton } from "../helper/FormInputs";
import { axiosInstance } from "../../config/axios";
import { DataContext } from "../../context/DataContext";
import { formateLocationData } from "../../lib/Formate";

// loading districts according to division
const loadDistrict = async (divId) => {
  try {
    const response = await axiosInstance.get(`/Employee/district/${divId}`);
    return response.data.readDistrictData.map((data) =>
      formateLocationData(data)
    );
  } catch (err) {
    console.log(err.response.data);
    return;
  }
};

const DistrictInput = ({ formik }) => {
  const { values } = useFormikContext();

  const [distData, setDistData] = useState(null);
  useEffect(() => {
    if (values?.division) {
      (async () => {
        const districts = await loadDistrict(values.division);
        setDistData(districts);
      })();
    }
  }, [values]);
  return (
    distData && (
      <SelectInput
        name="district"
        label="District"
        formik={formik}
        options={distData}
      />
    )
  );
};

// form validation schema (yup)
const validationSchema = yup.object({
  fName: yup
    .string("Enter First Name")
    .min(3, "Min length 3")
    .required("First Name is required"),
  lName: yup
    .string("Enter First Name")
    .min(3, "Min length 3")
    .required("First Name is required"),
});

// form inputs
function AddForm(props) {
  const { division } = useContext(DataContext);
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "80%",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <form onSubmit={props.handleSubmit}>
        <Grid container>
          <TextInput name="fName" label="First Name" formik={props} />
          <TextInput name="lName" label="Last Name" formik={props} />
          <TextInput name="eType" label="Employee Type" formik={props} />
          <SelectInput
            name="division"
            label="Division"
            formik={props}
            options={division || []}
          />
          <DistrictInput formik={props} />
          <SubmitButton label={props.submitLabel} />
        </Grid>
      </form>
    </Box>
  );
}

// formik HOC
export default withFormik({
  mapPropsToValues: (props) => {
    return {
      fName: props?.singlevalues?.firstName || " ",
      lName: props?.singlevalues?.lastName || " ",
      eType: props?.singlevalues?.employeeType || " ",
      division: props?.singlevalues?.divisionId || 0,
      district: props?.singlevalues?.districeID || 0,
    };
  },

  validationSchema: validationSchema,

  handleSubmit: (values, formikBag) => {
    const saveData = {
      firstName: values.fName,
      lastName: values.lName,
      employeeType: values.eType,
      districeID: values.district,
    };
    (async () => {
      if (formikBag.props.submitLabel == "Add Now") {
        try {
          const response = await axiosInstance.post(
            "http://59.152.62.177:8085/api/Employee/SaveEmployeeInformation",
            saveData
          );
          console.log(response, "success");
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const response = await axiosInstance.put(
            `http://59.152.62.177:8085/api/Employee/UpdateEmployeeInformation/${formikBag.props.singlevalues.empID}`,
            saveData
          );
        } catch (err) {
          console.log(err);
        }
      }
    })();
  },
})(AddForm);
