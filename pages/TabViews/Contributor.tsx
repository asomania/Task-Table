import React from "react";
import DataGrid from "./Components/DataGrid";

const Contributor = ({ data }: { data: any }) => {
  data = data.filter((item: any) => item.role === "Contributor");
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Contributor;
