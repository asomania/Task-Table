import React from "react";
import DataGrid from "./Components/DataGrid";
const Author = ({ data }: { data: any }) => {
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Author;
