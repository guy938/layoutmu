import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoginEnabled, setIsLoginEnabled] = useState(false);
  const navigate = useNavigate();

  // useEffect สำหรับตรวจสอบ password กับ email เพื่อเปิดปุ่ม login และเช็ค password error
  useEffect(() => {
    if (password && password.length < 8) {
      setPasswordError("ລະຫັດຜ່ານຢ່າງນ້ອຍຕ້ອງມີ 8 ຕົວອັກສອນ");
    } else {
      setPasswordError("");
    }

    if (email && password && password.length >= 8) {
      setIsLoginEnabled(true);
    } else {
      setIsLoginEnabled(false);
    }
  }, [email, password]);

  // useEffect แยกสำหรับ reset loginError เมื่อ loginError เปลี่ยน (หรือจะเอาไว้แสดง log/debug)
  useEffect(() => {
    if (loginError) {
      // ถ้าต้องการทำอะไรตอน loginError เปลี่ยน สามารถใส่ได้ที่นี่
      // console.log("Login error changed:", loginError);
    }
  }, [loginError]);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === "bounsy12@gmail.com" && password === "12345678") {
        navigate("/index");
      } else {
        setLoginError("ອີເມວ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
      }
    }, 1500);
  };

  const toggleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", backgroundColor: "#e0e0e0", px: 2 }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: 400 },
          maxWidth: 400,
          p: { xs: 3, sm: 4 },
          backgroundColor: "#2D2CD1",
          color: "#fff",
          borderRadius: 2,
          boxShadow: 4,
        }}
      >
        <Box textAlign="center" mb={3}>
          <LockOutlinedIcon sx={{ fontSize: 40 }} />
          <Typography
            variant="h4"
            fontWeight="bold"
            mt={1}
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
          >
            LOGIN
          </Typography>
        </Box>

        <TextField
          fullWidth
          margin="normal"
          label="Email *"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            style: {
              fontSize: "1rem",
              backgroundColor: "#fff",
              borderRadius: 4,
            },
          }}
          InputLabelProps={{
            style: { fontSize: "1rem" },
          }}
          error={Boolean(loginError)}
          helperText={loginError}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password *"
          type={showPassword ? "text" : "password"}
          value={password}
          error={Boolean(passwordError || loginError)}
          helperText={passwordError || loginError}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: {
              fontSize: "1rem",
              backgroundColor: "#fff",
              borderRadius: 4,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword} edge="end" tabIndex={-1}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { fontSize: "1rem" },
          }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: "#fff" }} />}
            label={
              <Typography sx={{ color: "#fff", fontSize: "0.9rem" }}>
                Remember me
              </Typography>
            }
          />
          <Typography
            onClick={() => navigate("/forgot-password")}
            sx={{
              color: "#fff",
              fontSize: "0.9rem",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Forgot password?
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={!isLoginEnabled || loading}
          sx={{
            mt: 3,
            py: 1.5,
            fontSize: "1rem",
            backgroundColor: "#FFA500",
            color: "#000",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ff9800",
            },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "#000" }} />
          ) : (
            "Login"
          )}
        </Button>

        <Typography mt={2} textAlign="center" fontSize="0.9rem">
          Not registered yet?{" "}
          <Typography
            component="span"
            onClick={() => navigate("/register")}
            sx={{
              color: "#fff",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Create an Account
          </Typography>
        </Typography>
      </Box>
    </Grid>
  );
}
