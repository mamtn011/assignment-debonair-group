const formateEmpData = (data) => {
  const { empID, firstName, lastName, district, employeeType } = data;
  return {
    empid: empID,
    name: firstName + " " + lastName,
    employeeType: employeeType,
  };
};

const formateLocationData = (location) => {
  if ("districtID" in location) {
    return {
      id: location.districtID,
      name: location.districtName,
    };
  } else if ("divID" in location) {
    return {
      id: location.divID,
      name: location.divisionName,
    };
  } else {
    return {};
  }
};

export { formateEmpData, formateLocationData };
