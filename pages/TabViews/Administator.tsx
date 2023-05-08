import React, { useState, useEffect } from 'react';
import DataGrid from './Components/DataGrid';

const Administrator = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data.filter((item: any) => item.role === 'Administrator'));
  }, [data]);

  return (
    <>
      <DataGrid data={newData} />
    </>
  );
};

export default Administrator;
