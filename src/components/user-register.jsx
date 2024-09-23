// import axios from "axios"
// import { useFormik } from "formik"
// import { useNavigate } from "react-router-dom"


// export   function UserRegister(){

//     let navigate = useNavigate();
//     const formik = useFormik({
//         initialValues: {
//             UserId:'',
//             UserName: '',
//             Password: '',
//             Email:'',
//             Mobile:''
//         },
//         onSubmit: (user)=> {
//             axios.post(`http://127.0.0.1:4000/register-user`,user)
//             .then(()=>{
//                 alert('User Registered');
//                 navigate('/user-login');
//             })
//         }
//     })

//     return(
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <h3>Register User</h3>
//                 <dl>
//                     <dt>UserId</dt>
//                     <dd><input type="text" required onChange={formik.handleChange} name="UserId" /></dd>
//                     <dt>User Name</dt>
//                     <dd><input type="text" required onChange={formik.handleChange} name="UserName" /></dd>
//                     <dt>Password</dt>
//                     <dd><input type="password" required onChange={formik.handleChange} name="Password"/></dd>
//                     <dt>Email</dt>
//                     <dd><input type="email" required onChange={formik.handleChange} name="Email" /></dd>
//                     <dt>Mobile</dt>
//                     <dd><input type="text" required onChange={formik.handleChange} name="Mobile" /></dd>
//                 </dl>
//                 <button type="submit" className="btn btn-warning">Register</button>
//             </form>
//         </div>
//     )
// }



import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

export function UserRegister() {
    let navigate = useNavigate();
    
    const formik = useFormik({
        initialValues: {
            UserId: '',
            UserName: '',
            Password: '',
            Email: '',
            Mobile: ''
        },
        onSubmit: (user) => {
            axios.post(`http://127.0.0.1:4000/register-user`, user)
                .then(() => {
                    alert('User Registered');
                    navigate('/user-login');
                });
        }
    });

    return (
        <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h4" gutterBottom>
                    Register User
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="UserId"
                            name="UserId"
                            onChange={formik.handleChange}
                            value={formik.values.UserId}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="User Name"
                            name="UserName"
                            onChange={formik.handleChange}
                            value={formik.values.UserName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Password"
                            name="Password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.Password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Email"
                            name="Email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.Email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            label="Mobile"
                            name="Mobile"
                            onChange={formik.handleChange}
                            value={formik.values.Mobile}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="warning">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}
