import React from 'react';
import { useState } from 'react';
import DataGrid from './Components/DataGrid';
const Author = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState();
  setNewData(data.filter((item: any) => item.role === 'Author'));
  return (
    <>
      <DataGrid data={newData} />
    </>
  );
};

export default Author;
