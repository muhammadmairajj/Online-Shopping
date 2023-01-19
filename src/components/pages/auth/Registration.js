import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Alert,
  FormControlLabel,
  Checkbox,
  Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    checkbox: "",
  });

  const [error, setError] = useState({
    msg: "",
    type: "",
    status: false,
  });

  const { name, email, password, cpassword, checkbox } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    // setUser('');
    if (name && email && password && cpassword && checkbox !== null) {
      if (password === cpassword) {
        console.log(user);
        setError({ status: true, msg: "SignUp Success", type: "success" });
        navigate('/dashboard');
        setUser("");
      } else {
        setError({
          status: true,
          msg: "Password And ConfirmPassword doesn't match",
          type: "error",
        });
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: "error" });
    }
  };
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>   
      <Box
        component="form"
        sx={{ mt: 1 }}
        noValidate
        autoComplete="off"
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          name="name"
          label="Enter Name"
          onChange={onInputChange}
          value={name || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Enter Email"
          onChange={onInputChange}
          value={email || ""}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Enter Password"
          name="password"
          type="password"
          value={password || ""}
          onChange={onInputChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="cpassword"
          label="Enter ConfirmPassword"
          name="cpassword"
          type="password"
          value={cpassword || ""}
          onChange={onInputChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              value="agree"
              checkbox={checkbox}
              color="primary"
              name="checkbox"
              id="checkbox"
              onChange={onInputChange}
            />
          }
          label="I agree to term and condition."
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            SignUp
          </Button>
        </Box>
        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </Grid>
    </Grid>
  );
}

export default Registration;
