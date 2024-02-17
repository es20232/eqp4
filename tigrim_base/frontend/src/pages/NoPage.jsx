import React from 'react'
import {
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const NoPage = () => {

  return (
    <Box sx={{
      marginTop: 40,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Stack spacing={2}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Typography variant='h1'>
            404
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>
            Desculpe, a página não foi encontrada.
          </Typography>
        </Box>
        <Box paddingTop={2} sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Button variant="contained"
                  component={Link}
                  to="/">
            Voltar
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default NoPage