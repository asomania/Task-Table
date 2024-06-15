import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridFilterModel } from '@mui/x-data-grid';
import { Box, Button, Dialog, Pagination, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogForm from './DialogForm';
import SearchIcon from '@mui/icons-material/Search';

const Index = ({ data }: { data: any }) => {
  const [editDialog, setEditDialog] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const [editData, setEditData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>(data);
  const [paginatedData, setPaginatedData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = React.useState([]);

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
      const response = await fetch(`https://666d6cb47a3738f7cacc567a.mockapi.io/persons/${id}`, {
        method: 'DELETE',
      });

      window.location.reload();
    }
    deleteData();
  };

  const selectedDelete = () => {
    selectedRows.map((item: any) => {
      handleDelete(item.id);
    });
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
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
    },
    { field: 'username', headerName: 'Username', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'role', headerName: 'Role', width: 250 },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 250,
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const filtered = data.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);
  useEffect(() => {
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    setPaginatedData(filteredData.slice(startIndex, endIndex));
  }, [filteredData, page, pageSize]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex ', alignItems: 'center', gap: ' 10px ' }}>
          {' '}
          <SearchIcon />
          <TextField
            id="search"
            variant="standard"
            type="search"
            value={searchTerm}
            onChange={handleChange}
            InputProps={{
              disableUnderline: true,
              style: { border: 'none' },
            }}
            placeholder="Search"
          />
        </Box>
        <Box>
          <Button sx={{ color: 'red' }} onClick={selectedDelete}>
            <DeleteIcon />
          </Button>
        </Box>
      </Box>
      <DataGrid
        slots={{
          footer: () => (
            <Pagination
              sx={{ display: 'flex', justifyContent: 'center' }}
              count={Math.ceil(data.length / pageSize)}
              page={page + 1}
              onChange={(_, page) => setPage(page - 1)}
            />
          ),
        }}
        rows={paginatedData}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={(ids: any) => {
          const selectedIDs = new Set(ids);
          const selectedRows = data.filter((row: any) => selectedIDs.has(row.id));
          setSelectedRows(selectedRows);
        }}
        sx={{ border: 'none' }}
      />

      <Dialog open={editDialog} onClose={() => setEditDialog(false)}>
        <DialogForm editValues={editData} />
      </Dialog>
    </>
  );
};

export default Index;
