import React from "react";
import DataGrid from "./Components/DataGrid";
const Administator = ({ data }: { data: any }) => {
  data = data.filter((item: any) => item.role === "Administator");
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Administator;
