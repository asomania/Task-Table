import React, { useState, useEffect } from 'react';
import DataGrid from './Components/DataGrid';

const Subscriber = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data.filter((item: any) => item.role === 'Subscriber'));
  }, [data]);

  return (
    <>
      <DataGrid data={newData} />
    </>
  );
};

export default Subscriber;
