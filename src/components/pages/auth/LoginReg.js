import React, { useState } from "react";
import { Grid, Card, Box, Tab, Tabs, Typography } from "@mui/material";
import Shopping from "../../../Images/Shopping.png";
import UserLogin from "../auth/UserLogin";
import Registration from "../auth/Registration";
import { ShoppingBag } from '@mui/icons-material';


function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function LoginReg() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
      <Grid item lg={7} sm={5} sx={{
        backgroundImage: `url(${Shopping})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block' }
      }}>
      </Grid>
        <Grid  item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ height: 530, mx: "3" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="secondary"
                  indicatorColor="secondary"
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label="Login"
                    sx={{ fontWeight: "bold", textTransform: "none"}}
                  />
                  <Tab
                    label="Registration"
                    sx={{ fontWeight: "bold", textTransform: "none" }}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
            <Box textAlign='center' sx={{mt: 2}}>
                 <ShoppingBag sx={{fontSize:100, color:'#2d42b5'}} />
                <Typography variant='h5' sx={{fontWeight:'bold'}}>Online-Shop</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginReg;
