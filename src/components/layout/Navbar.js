import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/login" style={{textDecoration:'none', color:'#fff'}}>Online-App</NavLink>
          </Typography>
          <Button
            component={NavLink}
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#2d42b5" : "" };
            }}
            sx={{ color: "white", textTransform: "none" }}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to="/contact"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#2d42b5" : "" };
            }}
            sx={{ color: "white", textTransform: "none" }}
          >
            Contact
          </Button>

          <Button
            component={NavLink}
            to="/login"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#2d42b5" : "" };
            }}
            sx={{ color: "white", textTransform: "none" }}
          >
            Login/Registration
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
