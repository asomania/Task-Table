import React, { useState, useEffect } from 'react';
import DataGrid from './Components/DataGrid';

const Contributor = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data.filter((item: any) => item.role === 'Contributor'));
  }, [data]);

  return (
    <>
      <DataGrid data={newData} />
    </>
  );
};

export default Contributor;
