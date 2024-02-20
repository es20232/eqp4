import React from "react";
import { Box, Avatar, Stack, Typography, Divider, Button, Grid  } from "@mui/material";
import { Link } from "react-router-dom";
import FotoPerfil from "./FotoPerfil";

const DadosPerfil = () => {
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
                <Typography>@Manoelzinho</Typography>
                <Box paddingRight={40}>
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
        <Grid container spacing={2}>
          {itemData.map((item, index) => (
            <Grid item key={index}>
              <FotoPerfil
                imageUrl={item.img}
                description={item.title}
              />
            </Grid>
          ))}
        </Grid>
        
      </Stack>
    </Box>
  );
};

export default DadosPerfil;

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfxGIHGzRuxAEa6FuE0bK9bJrLKBDzOE1fA&usqp=CAU',
    title: 'rlibgmewoaiwrgn ,áoerign aieorng áeprignv aeroi',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];