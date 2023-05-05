import React from "react";
import DataGrid from "./Components/DataGrid";
const Administator = ({ data }: { data: any }) => {
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Administator;
