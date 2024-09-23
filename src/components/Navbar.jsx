import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Signout } from './components/admin-signout';
import { useCookies } from 'react-cookie';

export default function Navbar() {
    const [cookies, setCookie, removeCookie] = useCookies(['admin-id']);
  return (
    <div>
         <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Video Library</Link>
            </Typography>
            <Box>
              <Button color="inherit" component={Link} to="/user-login">
                User Login
              </Button>
              {cookies['admin-id'] === undefined ? (
                <Button color="inherit" component={Link} to="/admin-login">
                  Admin Login
                </Button>
              ) : (
                <Signout />
              )}
            </Box>
          </Toolbar>
        </AppBar>
    </div>
  )
}
