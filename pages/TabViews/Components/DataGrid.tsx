import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Index = ({ data }: { data: any }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5) as any;

  const handleEdit = (id: any) => {
    // Handle edit action here
    console.log(`Edit row with id ${id}`);
  };

  const handleDelete = (id: any) => {
    // Handle delete action here
    console.log(`Delete row with id ${id}`);
  };

  const columns: GridColDef[] = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 130,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Avatar"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 130 },
    { field: "username", headerName: "Username", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "role", headerName: "Role", width: 130 },
    {
      field: "edit",
      headerName: "Edit",
      width: 130,
      renderCell: (params) => (
        <>
          <EditIcon
            style={{ color: "blue", marginRight: 10, cursor: "pointer" }}
            onClick={() => handleEdit(params.row.id)}
          />
          <DeleteIcon
            style={{ color: "red", cursor: "pointer" }}
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
              page={page}
              onChange={(_, page) => setPage(page - 1)}
            />
          ),
        }}
        rows={paginatedData}
        columns={columns}
        checkboxSelection
        sx={{ border: "none" }}
      />
    </>
  );
};

export default Index;
