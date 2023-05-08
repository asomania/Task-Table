import React from 'react';
import DataGrid from './Components/DataGrid';
const Index = ({ data }: { data: any }) => {
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Index;
