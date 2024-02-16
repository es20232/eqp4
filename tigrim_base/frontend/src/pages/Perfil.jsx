import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Stack,
  Box,
} from "@mui/material";
import DadosPerfil from '../components/DadosPerfil';

const Perfil = () => {
  return (

    <Box>
      <Navbar/>
      <Stack direction='row' spacing={2}>
        <Sidebar/>
        <DadosPerfil/>

      </Stack>
    </Box>

  )
}

export default Perfil