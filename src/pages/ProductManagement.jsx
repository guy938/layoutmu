import React, { useState } from "react";
import {
  Box, TextField, Button, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", brand: "", price: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = form;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, form]);
    }
    setForm({ name: "", brand: "", price: "" });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>ຈັດການຜະລິດຕະພັນ</Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField name="name" label="ຊື່ສິນຄ້າ" value={form.name} onChange={handleChange} sx={{ mr: 2 }} />
        <TextField name="brand" label="ຍີ່ຫໍ້" value={form.brand} onChange={handleChange} sx={{ mr: 2 }} />
        <TextField name="price" label="ລາຄາ" value={form.price} onChange={handleChange} sx={{ mr: 2 }} />
        <Button variant="contained" onClick={handleAddOrUpdate}>
          {editIndex !== null ? "ແກ້ໄຂ" : "ເພີ່ມ"}
        </Button>
      </Paper>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ຊື່</TableCell>
            <TableCell>ຍີ່ຫໍ້</TableCell>
            <TableCell>ລາຄາ</TableCell>
            <TableCell>ຈັດການ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((prod, idx) => (
            <TableRow key={idx}>
              <TableCell>{prod.name}</TableCell>
              <TableCell>{prod.brand}</TableCell>
              <TableCell>{prod.price}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(idx)}><Edit /></IconButton>
                <IconButton onClick={() => handleDelete(idx)}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
