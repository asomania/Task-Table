import React from 'react';
import DataGrid from './Components/DataGrid';
import { useState } from 'react';

const Contributor = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState();
  setNewData(data.filter((item: any) => item.role === 'Contributor'));
  return (
    <>
      <DataGrid data={newData} />
    </>
  );
};

export default Contributor;
