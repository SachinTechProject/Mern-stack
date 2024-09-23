// import axios from "axios";
// import { useFormik } from "formik";
// import { useEffect, useState } from "react"
// import { Link, useNavigate } from "react-router-dom";


// export function AddVideo(){

//     const [categories, setCategories] = useState([{CategoryId:0, CategoryName:''}]);

//     let navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {VideoId:0, Title:'', Url:'', Description:'', Views:0, Likes:0, Dislikes:0, CategoryId:0},
//         onSubmit: (video)=>{
           
//             axios.post('http://127.0.0.1:4000/add-video',video)
//             .then(()=>{
//                 alert('Video Added Successfully..');
//                 navigate('/admin-dashboard');
//             })
//             video.preventDefault()
//         }
//     })

//     function LoadCategories(){
//         axios.get('http://127.0.0.1:4000/get-categories')
//         .then(response=>{
//             response.data.unshift({CategoryId:'-1', CategoryName:'Select Category'});
//             setCategories(response.data);
//         })
//     }

//     useEffect(()=>{
//         LoadCategories();
//     },[])

//     return(
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <h5 className="text-warning">Add New Video</h5>
//                 <dl className="row">
//                     <dt className="col-3">Video Id</dt>
//                     <dd className="col-9"><input onChange={formik.handleChange} tpye="number" name="VideoId" /></dd>
//                     <dt className="col-3">Title</dt>
//                     <dd className="col-9"><input onChange={formik.handleChange} type="text" name="Title" /></dd>
//                     <dt className="col-3">URL</dt>
//                     <dd className="col-9"><input onChange={formik.handleChange} type="text" name="Url" /></dd>
//                     <dt className="col-3">Description</dt>
//                     <dd className="col-9"><textarea onChange={formik.handleChange} rows="4" cols="40" name="Description"></textarea></dd>
//                     <dt className="col-3">Views</dt>
//                     <dd className="col-9"><input onChange={formik.handleChange} type="number" name="Views" /></dd>
//                     <dt className="col-3">Likes</dt>
//                     <dd className="col-9"><input onChange={formik.handleChange} type="number" name="Likes" /></dd>
//                     <dt className="col-3">Dislikes</dt>
//                     <dd className="col-9"><input onChange={formik.handleChange} type="number" name="Dislikes" /></dd>
//                     <dt className="col-3">Category</dt>
//                     <dd className="col-9">
//                         <select name="CategoryId" onChange={formik.handleChange}>
//                             {
//                                 categories.map(category=><option key={category.CategoryId} value={category.CategoryId}>{category.CategoryName}</option>)
//                             }
//                         </select>
//                     </dd>
//                 </dl>
//                 <button className="btn btn-primary">Add Video</button>
//                 <Link className="btn btn-warning ms-2" to="/admin-dashboard">Cancel</Link>
//             </form>
//         </div>
//     )
// }


import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Container, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export function AddVideo() {
  const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: "" }]);

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: { VideoId: 0, Title: "", Url: "", Description: "", Views: 0, Likes: 0, Dislikes: 0, CategoryId: 0 },
    onSubmit: (video) => {
      axios.post('http://127.0.0.1:4000/add-video', video)
        .then(() => {
          alert("Video Added Successfully");
          navigate("/admin-dashboard");
        });
    }
  });

  function LoadCategories() {
    axios.get("http://127.0.0.1:4000/get-categories")
      .then(response => {
        response.data.unshift({ CategoryId: "-1", CategoryName: "Select Category" });
        setCategories(response.data);
      });
  }

  useEffect(() => {
    LoadCategories();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ mt: 3 }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" component="h1" gutterBottom color="warning.main">
          Add New Video
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Video ID"
          name="VideoId"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.VideoId}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          name="Title"
          onChange={formik.handleChange}
          value={formik.values.Title}
        />
        <TextField
          fullWidth
          margin="normal"
          label="URL"
          name="Url"
          onChange={formik.handleChange}
          value={formik.values.Url}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="Description"
          multiline
          rows={4}
          onChange={formik.handleChange}
          value={formik.values.Description}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Views"
          name="Views"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Views}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Likes"
          name="Likes"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Likes}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Dislikes"
          name="Dislikes"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Dislikes}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            name="CategoryId"
            value={formik.values.CategoryId}
            onChange={formik.handleChange}
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category.CategoryId} value={category.CategoryId}>
                {category.CategoryName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit">
            Add Video
          </Button>
          <Button
            variant="contained"
            color="warning"
            component={Link}
            to="/admin-dashboard"
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
