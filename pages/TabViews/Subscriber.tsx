import React from "react";
import DataGrid from "./Components/DataGrid";
const Subscriber = ({ data }: { data: any }) => {
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Subscriber;
