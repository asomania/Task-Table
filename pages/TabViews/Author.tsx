import React, { useState, useEffect } from 'react';
import DataGrid from './Components/DataGrid';

const Author = ({ data }: { data: any }) => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(data.filter((item: any) => item.role === 'Author'));
  }, [data]);

  return (
    <>
      <DataGrid data={newData} />
    </>
  );
};

export default Author;
