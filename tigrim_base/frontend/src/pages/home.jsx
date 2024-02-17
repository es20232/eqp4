import React from 'react'
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Rightbar from '../components/Rightbar';

const home = () => {
  return (
    
    <box>
      <Navbar/>
      <Stack direction='row' spacing={2}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </box>

  )
}

export default home