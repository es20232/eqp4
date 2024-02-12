import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Stack,
  Divider,
} from "@mui/material";
import DadosPerfil from '../components/DadosPerfil';

const Perfil = () => {
  return (

    <box>
      <Navbar/>
      <Stack direction='row' spacing={2}>
        <Sidebar/>
        <DadosPerfil/>
      </Stack>
    </box>

  )
}

export default Perfil