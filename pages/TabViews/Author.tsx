import React from "react";
import DataGrid from "./Components/DataGrid";
const Author = ({ data }: { data: any }) => {
  data = data.filter((item: any) => item.role === "Author");
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Author;
