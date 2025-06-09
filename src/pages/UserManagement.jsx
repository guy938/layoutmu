import React, { useState } from "react";
import {
  Box, TextField, Button, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = form;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }
    setForm({ name: "", email: "", role: "" });
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...users];
    updated.splice(index, 1);
    setUsers(updated);
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>ຈັດການຜູ້ໃຊ້</Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField name="name" label="ຊື່ຜູ້ໃຊ້" value={form.name} onChange={handleChange} sx={{ mr: 2 }} />
        <TextField name="email" label="ອີເມວ" value={form.email} onChange={handleChange} sx={{ mr: 2 }} />
        <TextField name="role" label="ສະຖານະ" value={form.role} onChange={handleChange} sx={{ mr: 2 }} />
        <Button variant="contained" onClick={handleAddOrUpdate}>
          {editIndex !== null ? "ແກ້ໄຂ" : "ເພີ່ມ"}
        </Button>
      </Paper>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ຊື່</TableCell>
            <TableCell>ອີເມວ</TableCell>
            <TableCell>ສະຖານະ</TableCell>
            <TableCell>ຈັດການ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, idx) => (
            <TableRow key={idx}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
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
