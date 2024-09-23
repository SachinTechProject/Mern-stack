// import { Link } from "react-router-dom";


// export function AdminError()
// {
//     return(
//         <div className="text-center">
//             <h2 className="text-danger">Invalid Credentials</h2>
//             <Link to="/admin-login">Try Again</Link>
//         </div>
//     )
// }

import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";
// import './AdminError.css'; // Optional: for additional custom styles

export function AdminError() {
  return (
   <div>
        <Container maxWidth="md" className="admin-error-container">
      <Box textAlign="center" py={10}>
        <Typography variant="h1" color="error" gutterBottom>
          403
        </Typography>
        <Typography variant="h5" gutterBottom>
          Invalid Admin Credentials
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Sorry, you do not have the right credentials to access this page. Please check your login details and try again.
        </Typography>
        <Button
          component={Link}
          to="/admin-login"
          variant="contained"
          color="error"
          size="large"
        >
          Try Again
        </Button>
      </Box>
    </Container>
   </div>
  );
}
