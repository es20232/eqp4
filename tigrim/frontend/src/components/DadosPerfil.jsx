import React, { useState } from "react";
import { Box, Avatar, Stack, Typography, Divider, Button, Grid  } from "@mui/material";
import { Link } from "react-router-dom";
import FotoPerfil from "./FotoPerfil";

const DadosPerfil = () => {

  const [name, setName] = useState(0);
  const [FotoPerfil, setFotoPerfil] = useState(0);

  return (
    <Box flex={7}>
      <Stack direction="column" spacing={2}>
        <Box paddingTop={5}>
          <Stack direction="row" spacing={2}>
            <Box>
              <Avatar
                sx={{ width: 200, height: 200 }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </Box>
            <Box>
              <Stack spacing={2}>
                <Stack direction="row" spacing={40}>
                  <Typography variant="h4">Manoel Gomes</Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/EditarPerfil"
                  >
                    Editar Perfil
                  </Button>
                </Stack>
                <Box paddingRight={50} paddingTop={4}>
                  <Typography>
                    Exemplo de bio Exemplo de bio Exemplo de bio Exemplo de bio
                    Exemplo de bio Exemplo de bio Exemplo de bio Exemplo de bio
                    Exemplo de bio Exemplo de bio Exemplo de bio
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box paddingRight={40}>
          <Divider orientation="horizontal" flexItem />
        </Box>
        
      </Stack>
    </Box>
  );
};

export default DadosPerfil;
