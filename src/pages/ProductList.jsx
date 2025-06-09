import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CircularProgress, Box, Tooltip } from "@mui/material";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        const withImages = data.map((item) => ({
          ...item,
          img: null,
        }));
        setProducts(withImages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ ເກິດຂໍ້ຜິດພາດ:", err);
        setLoading(false);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "pro_name",
      headerName: "ຊື່ສິນຄ້າ",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "cat_name",
      headerName: "ໝວດສິນຄ້າ",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "price",
      headerName: "ລາຄາ",
      width: 130,
      
    },
  ];

  if (loading) {
    return (
      <CircularProgress style={{ margin: "100px auto", display: "block" }} />
    );
  }

  const CustomRow = (props) => {
    const { id, row, ...other } = props;
    return (
      <Tooltip title="ເບີ່ງ" placement="top" arrow>
        <div {...other} />
      </Tooltip>
    );
  };

  return (
    <Box
      sx={{
        height: 520,
        width: "100%",
        padding: 3,
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "gray",
          color: "#1976d2",
          fontWeight: "bold",
          fontSize: 16,
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#bbdefb",
          cursor: "pointer",
        },
        "& .MuiDataGrid-cell": {
          padding: "8px 12px",
          fontSize: 14,
        },
      }}
    >
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        getRowId={(row) => row.id}
        components={{
          Row: CustomRow,
        }}
      />
    </Box>
  );
}
