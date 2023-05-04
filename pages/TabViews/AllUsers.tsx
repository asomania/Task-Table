import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const index = ({ data }: { data: any }) => {
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

  return (
    <>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </>
  );
};

export default index;
