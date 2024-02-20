import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Stack, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Rightbar from '../components/Rightbar';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}posts/`);
                setPosts(response.data);
            } catch (error) {
                console.error('Erro ao buscar os posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <Box>
            <Navbar/>
            <Stack direction='row' spacing={2}>
                <Sidebar/>
                <Feed posts={posts}/>
                <Rightbar/>
            </Stack>
            <Add/>
        </Box>
    );
};

export default Dashboard;
