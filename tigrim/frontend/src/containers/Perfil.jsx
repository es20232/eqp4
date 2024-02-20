import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar"
import {
  Stack,
  Box,
} from "@mui/material";
import DadosPerfil from '../components/DadosPerfil';

const Perfil = () => {
  return (

    <Box>
      <Navbar/>
      <Stack direction='row' spacing={2} >
        <Sidebar/>
        <DadosPerfil/>
        <Rightbar/>
      </Stack>
    </Box>

  )
}

export default Perfil