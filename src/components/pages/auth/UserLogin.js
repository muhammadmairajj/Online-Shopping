import React, { useState } from "react";
import { Box, TextField, Button, Alert, Grid } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

function UserLogin() {
  const [user, setUser] = useState({
    email: "",
    password: ""
});

  const [error, setError] = useState({
    msg: "",
    type: "",
    status: false
  })

  const { email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    // setUser('');
    if(email && password) {
      console.log(user);  
      setError({ status: true, msg: "Login Success", type: 'success' })
      navigate('/dashboard');
      setUser('');
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  };
//   const [error, setError] = useState({
//     status: false,
//     msg: "",
//     type: ""
//   })
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       email: data.get('email'),
//       password: data.get('password'),
//     }
//     if (actualData.email && actualData.password) {
//       console.log(actualData);

//       document.getElementById('login-form').reset()
//       setError({ status: true, msg: "Login Success", type: 'success' })
//       navigate('/dashboard')
//     } else {
//       setError({ status: true, msg: "All Fields are Required", type: 'error' })
//     }
//   }
  return (
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}> 
      <Box
        component="form"
        sx={{ mt: 4 }}
        noVal4date
        autoComplete="off"
        id="login-form"
        onSubmit={handleSubmit}
      >
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
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        <NavLink to="/resetemail">Forget Password.?</NavLink>
        {error.status ? <Alert severity={error.type} sx={{mt:3}} >{error.msg}</Alert> : ""}
      </Box>
    </Grid>
    </Grid>
  );
}

export default UserLogin;
