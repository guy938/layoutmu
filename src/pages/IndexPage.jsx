import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GroupIcon from "@mui/icons-material/Group";

// ✅ import จากโฟลเดอร์เดียวกัน
import ProductList from "./ProductList";
import ProductManagement from "./ProductManagement";
import UserManagement from "./UserManagement";

export default function IndexPage() {
  const [selectedPage, setSelectedPage] = useState("productList");

  const renderContent = () => {
    switch (selectedPage) {
      case "productList":
        return <ProductList />;
      case "productManagement":
        return <ProductManagement />;
      case "userManagement":
        return <UserManagement />;
      default:
        return <ProductList />;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden", bgcolor: "#f0f2f5" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          height: "70px",
          justifyContent: "center",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#1976d2",
        }}
      >
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            ລະບົບຈັດການຂໍ້ມູນຜະລິດຕະພັນ
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        sx={{
          width: 200,
          minWidth: 100,
          maxWidth: 200,
          mt: "70px",
          height: "calc(100vh - 70px)",
          bgcolor: "#ffffff",
          boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
          p: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          ຜູ້ໃຊ້: Admin
        </Typography>
        <List>
          <ListItem button onClick={() => setSelectedPage("productList")}>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="ລາຍການຜະລິດຕະພັນ" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPage("productManagement")}>
            <ListItemIcon>
              <EditNoteIcon />
            </ListItemIcon>
            <ListItemText primary="ຈັດການຜະລິດຕະພັນ" />
          </ListItem>
          <ListItem button onClick={() => setSelectedPage("userManagement")}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="ຈັດການຜູ້ໃຊ້" />
          </ListItem>
        </List>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: "70px",
          ml: "20px",
          p: "10px 20px 10px 10px",
          height: "calc(100vh - 70px)",
          overflowY: "auto",
        }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          {renderContent()}
        </Paper>
      </Box>
    </Box>
  );
}
