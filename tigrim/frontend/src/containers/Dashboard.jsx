import React from 'react';
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Stack, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Rightbar from '../components/Rightbar';

const Dashboard = () => {
    return (
        <Box>
            <Navbar/>
            <Stack direction='row' spacing={2}>
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </Stack>
            <Add/>
        </Box>
    );
};

export default Dashboard;