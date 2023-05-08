import React from 'react';
import { useState } from 'react';
import DataGrid from './Components/DataGrid';
const Administator = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState();

  setNewData(data.filter((item: any) => item.role === 'Administator'));
  return (
    <>
      <DataGrid data={newData} />
    </>
  );
};

export default Administator;
