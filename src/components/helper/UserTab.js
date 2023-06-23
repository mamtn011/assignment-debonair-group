import React, { useContext, useState } from "react";
import DataTable from "react-data-table-component";
import { Typography, Button, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { formateEmpData } from "../../lib/Formate";
import { DataContext } from "../../context/DataContext";
import AddButton from "../shared/AddButton";
import ModalBox from "../shared/ModalBox";
import AddForm from "../shared/AddForm";
export default function UserTab() {
  const { employeeData } = useContext(DataContext);
  const [open, setOpen] = useState(false);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.empid,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Employee Type",
      selector: (row) => row.employeeType,
    },
    {
      name: "Details",
      selector: (row) => row.details,
    },
  ];
  const data = employeeData
    .filter((employee) => employee.employeeType === "Admin")
    .map((edata, idx) => {
      const formatedEdata = formateEmpData(edata);

      return {
        id: idx + 1,
        ...formatedEdata,
        details: <Link to={"/single/" + formatedEdata.empid}>View</Link>,
      };
    });

  return (
    <>
      <AddButton color="info" label="Add New" event={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)} className="modal-area">
        <ModalBox>
          <AddForm submitLabel="Add Now" />
        </ModalBox>
      </Modal>

      <Typography variant="h5" component="h1" align="center">
        User List
      </Typography>
      <DataTable columns={columns} data={data} />
    </>
  );
}
