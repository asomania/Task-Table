import React from 'react';
import DataGrid from './Components/DataGrid';
const Subscriber = ({ data }: { data: any }) => {
  data = data.filter((item: any) => item.role === 'Subscriber');
  return (
    <>
      <DataGrid data={data} />
    </>
  );
};

export default Subscriber;
