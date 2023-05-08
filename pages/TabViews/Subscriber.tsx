import React from 'react';
import DataGrid from './Components/DataGrid';
import { useState } from 'react';
const Subscriber = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState();
  setNewData(data.filter((item: any) => item.role === 'Subscriber'));
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Subscriber;
