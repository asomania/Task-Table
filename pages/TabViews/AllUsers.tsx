import React from 'react';
import DataGrid from './Components/DataGrid';
import DialogForm from './Components/DialogForm';
const Index = ({ data }: { data: any }) => {
  return (
    <>
      <DataGrid data={data} />
      <DialogForm />
    </>
  );
};

export default Index;
