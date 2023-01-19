import React, { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Alert,
  Grid
} from "@mui/material";

function SendPasswordResetEmail() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
      })

      const handleSubmit = (e) => {
        e.preventDefault();
        if(email !== "") {
            console.log(email)
            setError({ status: true, msg: "Password Reset Email Sent. Check Your Email !!", type: 'success' })
            setEmail("")
        } else {
            setError({ status: true, msg: "Please Provide Valid Email", type: 'error' })
        }
      }
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
      <Box
        component="form"
        sx={{ mt: 1 }}
        noValidate
        autoComplete="off"
        id="password-reset-email-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email || ""}
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Send
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type} sx={{mt:3}} >{error.msg}</Alert> : ""}
      </Box>
    </Grid>
    </Grid>
  )
}

export default SendPasswordResetEmail
