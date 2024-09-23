// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link, useNavigate } from "react-router-dom";

// export function AdminDashBoard(){


//     const [videos, setVideos] = useState([{VideoId:0, Title:'', Url:'', Description:'', Views:0, Likes:0, Dislikes:0, CategoryId:0}])
   

//     function LoadVideos(){
//         axios.get('http://127.0.0.1:4000/get-videos')
//         .then(response=>{
//             setVideos(response.data);
//         })
//     }

//     useEffect(()=>{
//         LoadVideos();
//     },[])

   

//     return(
//         <div>
//             <h5 className="text-center">Admin Dash Board</h5>
//             <Link to="/add-video" className="bi bi-camera-video-fill btn btn-light"> Add New</Link>
//             <table className="table table-hover">
//                 <thead>
//                     <th>Title</th>
//                     <th>Preview</th>
//                     <th>Actions</th>
//                 </thead>
//                 <tbody>
//                    {
//                     videos.map(video=>
//                       <tr>
//                         <td>{video.Title}</td>
//                         <td><iframe width="400" height="100" src={video.Url}></iframe></td>
//                         <td>
//                             <Link to={`/edit-video/${video.VideoId}`} className="bi bi-pen btn btn-warning"></Link>
//                             <Link to={`/delete-video/${video.VideoId}`} className="bi ms-2 bi-trash-fill btn btn-danger"></Link>
//                         </td>
//                       </tr>
//                     )
//                    }
//                 </tbody>
//             </table>
//         </div>
//     )
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid,CardMedia,CardActions } from '@mui/material';



export function AdminDashBoard() {

    const [videos, setVideos] = useState([{ VideoId: 0, Title: '', Url: '', Description: '', Views: 0, Likes: 0, Dislikes: 0, CategoryId: 0 }]);

    function LoadVideos() {
        axios.get('http://127.0.0.1:4000/get-videos')
            .then(response => {
                setVideos(response.data);
            });
    }

    useEffect(() => {
        LoadVideos();
    }, []);

    return (
        <div style={{ margin: '20px' }}>
                  <div style={{ margin: '20px' }}>
            <Typography variant="h5" align="center" gutterBottom>Admin Dashboard</Typography>

            <Button
                variant="contained"
               
                component={Link}
                to="/add-video"
                style={{ marginBottom: '20px' }}
            >
                Add New
            </Button>

            <Grid container spacing={3}>
                {videos.map(video => (
                    <Grid item xs={12} sm={6} md={4} key={video.VideoId}>
                        <Card>
                            <CardMedia
                                component="iframe"
                                height="200"
                                src={video.Url}
                                title={video.Title}
                            />
                            <CardContent>
                                <Typography variant="h6">{video.Title}</Typography>
                                <Typography variant="body2" color="textSecondary">{video.Description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="warning"
                                    
                                    component={Link}
                                    to={`/edit-video/${video.VideoId}`}
                                    style={{ marginRight: '10px' }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    
                                    component={Link}
                                    to={`/delete-video/${video.VideoId}`}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>

        </div>
    );
}
