// import { Link } from "react-router-dom";


// export function UserError(){
//     return(
//         <div>
//             <h2>Invalid Credentials</h2>
//             <Link to="/user-login">Try Again</Link>
//         </div>
//     )
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

export function UserError() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '120px', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h2" sx={{ fontSize: '36px', margin: '20px 0' }}>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '18px', marginBottom: '40px' }}>
        We couldn't find the page or the credentials you provided are incorrect.
      </Typography>
      
      <Button
        variant="contained"
        component={Link}
        to="/user-login"
        sx={{ mb: 2, backgroundColor: '#721c24', '&:hover': { backgroundColor: '#5c1a1d' } }}
      >
        Try Again
      </Button>
      <Button
        variant="outlined"
        component={Link}
        to="/register-user"
        sx={{
          color: '#721c24',
          borderColor: '#721c24',
          '&:hover': { backgroundColor: '#f8d7da', borderColor: '#721c24' }
        }}
      >
        Signup
      </Button>
    </Box>
  );
}

export default UserError;
