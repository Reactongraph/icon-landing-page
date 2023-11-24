import * as React from 'react';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MainGrid, HeadToolbar,TabItem,LoginButton } from './HeaderStyle';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MainGrid>
        <HeadToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src='/Images/icon.svg' alt='logo' className='w-[70px] h-[32px]'></img>
          </IconButton>
          <Grid>
          <Tabs aria-label="basic tabs example">
            <TabItem label="How it works"/>
            <TabItem label="About us" />
            <TabItem label="Categories" />
            <TabItem label = "FAQs" />
          </Tabs>
          </Grid>
          <Grid>
          <LoginButton>Login</LoginButton>
          <Button style={{backgroundColor:"black", color:"white",textTransform:"none"}}>Create an account</Button>
          </Grid>
        </HeadToolbar>
      </MainGrid>
    </Box>
  );
}
