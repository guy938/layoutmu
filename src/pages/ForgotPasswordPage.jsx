// src/pages/ForgotPasswordPage.jsx

import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function ForgotPasswordPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#fff",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Forgot Password
        </Typography>
        <Typography variant="body1" mb={2}>
          Please enter your email address. We will send you a link to reset your password.
        </Typography>

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Send Reset Link
        </Button>
      </Box>
    </Box>
  );
}
