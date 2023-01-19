import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Alert,
  Grid
} from "@mui/material";
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      })
      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== "" && cpassword !== "") {
            if(password === cpassword) {
                console.log(password, cpassword)
                setError({ status: true, msg: "Password Reset Successfully. Redirecting to Login Page...", type: 'success' });
                setPassword('');
                setCPassword('');
                setTimeout(() => {
                    navigate("/login")
                  }, 3000)
            } else {
                setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
            }
        } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
      }
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
      <h1>Reset Password</h1>
      <Box
        component="form"
        sx={{ mt: 1 }}
        noValidate
        autoComplete="off"
        id="reset-password"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="New Password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="cpassword"
          name="cpassword"
          type="password"
          label="New ConfirmPassword"
          onChange={(e)=>setCPassword(e.target.value)}
          value={cpassword || ""}
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Save
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type} sx={{mt:3}} >{error.msg}</Alert> : ""}
      </Box>
    </Grid>
    </Grid>
  )
}

export default ResetPassword
