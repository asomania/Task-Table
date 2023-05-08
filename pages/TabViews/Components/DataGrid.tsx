import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Dialog, Pagination } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogForm from './DialogForm';

const Index = ({ data }: { data: any }) => {
  const [editDialog, setEditDialog] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5) as any;
  const [editData, setEditData] = useState<any>();
  const handleEdit = (id: any) => {
    // Handle edit action heres
    console.log(`Edit row with id ${id}`);
    //data id edit object all username email role

    setEditData(data.find((item: any) => item.id === id));
    setEditDialog(!editDialog);
  };

  const handleDelete = (id: any) => {
    // Handle delete action here
    console.log(`Delete row with id ${id}`);
    async function deleteData() {
      const response = await fetch(`https://6450be73e1f6f1bb229de7cf.mockapi.io/persons/${id}`, {
        method: 'DELETE',
      });

      window.location.reload();
    }
    deleteData();
  };

  const columns: GridColDef[] = [
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 130,
      renderCell: (params) => (
        <img src={params.value} alt="Avatar" style={{ width: 50, height: 50 }} />
      ),
    },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'role', headerName: 'Role', width: 130 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 130,
      renderCell: (params) => (
        <>
          <EditIcon
            style={{ color: 'blue', marginRight: 10, cursor: 'pointer' }}
            onClick={() => handleEdit(params.row.id)}
          />
          <DeleteIcon
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      ),
    },
  ];

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <>
      <DataGrid
        slots={{
          footer: () => (
            <Pagination
              count={Math.ceil(data.length / pageSize)}
              page={page + 1}
              onChange={(_, page) => setPage(page - 1)}
            />
          ),
        }}
        rows={paginatedData}
        columns={columns}
        checkboxSelection
        sx={{ border: 'none' }}
      />

      <Dialog open={editDialog} onClose={() => setEditDialog(false)}>
        <DialogForm editValues={editData} />
      </Dialog>
    </>
  );
};

export default Index;
