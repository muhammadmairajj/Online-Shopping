import { CssBaseline, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid container justifyContent="center">
        {/* <Grid item sm={4} sx={{backgroundColor:'gray', p: 5, color:'white'}}> */}
        <Grid item sm={4} xs={12}>
          <h1>Dashboard</h1>
          <Typography variant="h5">Name: Muhammad Mairaj</Typography>
          <Typography variant="h5">Email: muhammadmairajjgmail.com</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
