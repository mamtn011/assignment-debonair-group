import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../config/axios";
import { formateLocationData } from "../lib/Formate";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [division, setDivision] = useState(null);

  useEffect(() => {
    (async () => {
      await loadEmployee();
      await loadDivision();
    })();
  }, []);

  const loadEmployee = async () => {
    try {
      const response = await axiosInstance.get(`/Employee/EmployeeData`);
      setEmployeeData(response.data.readEmployeeData);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  const loadSingleData = async (id) => {
    try {
      const response = await axiosInstance.get(
        `/Employee/IndividualEmployeeData/${id}`
      );
      return response.data.readEmployeeData[0];
    } catch (err) {
      console.log(err.response.data);
      return;
    }
  };
  const loadDivision = async () => {
    try {
      const response = await axiosInstance.get(`/Employee/Division`);
      const divData = response.data.readDivisionData.map((data) =>
        formateLocationData(data)
      );
      setDivision(divData);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const value = {
    employeeData,
    division,
    loadSingleData,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
