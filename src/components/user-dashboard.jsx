import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, Button, Grid, Select, MenuItem, Typography } from '@mui/material';

export function UserDashboard() {
    const [videos, setVideos] = useState([{ VideoId: 0, Title: '', Url: '', Description: '', Views: 0, Likes: 0, Dislikes: 0, CategoryId: 0 }]);
    const [cookies, setCookies, removeCookie] = useCookies(['user-id']);
    const [categories, setCategories] = useState([{ CategoryId: 0, CategoryName: '' }]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    function LoadCategories() {
        axios.get('http://127.0.0.1:4000/get-categories')
            .then(response => {
                // Add default "Select Category" option at the beginning
                response.data.unshift({ CategoryId: '', CategoryName: 'Select Category' });
                setCategories(response.data);
            });
    }

    function LoadVideos(categoryId = '') {
        // If a category is selected, pass it as a query parameter
        const url = categoryId ? `http://127.0.0.1:4000/get-videos?categoryId=${categoryId}` : 'http://127.0.0.1:4000/get-videos';
        axios.get(url)
            .then(response => {
                setVideos(response.data);
            });
    }

    useEffect(() => {
        LoadVideos();
        LoadCategories();
    }, []);

    function handleSignoutClick() {
        removeCookie('user-id');
        navigate('/user-login');
    }

    function handleCategoryChange(event) {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        LoadVideos(selectedValue);  // Fetch videos based on the selected category
    }

    return (
 
        

        <div style={{ margin: '20px' }}>
            <Typography variant="h4" gutterBottom>
                {cookies['user-id']} Dashboard
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleSignoutClick}
                    style={{ marginLeft: '10px' }}
                >
                    Signout
                </Button>
            </Typography>

            {/* <div style={{ marginBottom: '20px' }}>
                <Select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    displayEmpty
                    style={{ minWidth: 200 }}
                >
                    {categories.map((category) => (
                        <MenuItem key={category.CategoryId} value={category.CategoryId}>
                            {category.CategoryName}
                        </MenuItem>
                    ))}
                </Select>
            </div> */}

            <Grid container spacing={3}>
                {videos.map((video) => (
                    <Grid item xs={12} sm={6} md={4} key={video.VideoId}>
                        <Card>
                            <CardHeader title={video.Title} />
                            <CardContent>
                                <iframe
                                    src={video.Url}
                                    width="100%"
                                    height="200"
                                    title={video.Title}
                                    style={{ border: 'none' }}
                                ></iframe>
                            </CardContent>
                            <CardContent>
                                <p style={{height:'60px'}}>{video.Description}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
