import React from 'react'
import {
    Box,
    Avatar,
    Stack,
    Typography,
    Divider,
  } from "@mui/material";

const DadosPerfil = () => {
  return (
    <Box flex={3}>
        <Stack direction='column' spacing={2}>
            <Box paddingTop={5}>
                <Stack direction='row' spacing={2}>
                    <Box>
                        <Avatar
                            sx={{ width: 200, height: 200 }}
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box>
                        <Stack spacing={1}>
                            <Typography variant='h4'>
                                Manoel Gomes
                            </Typography>
                            <Typography>
                                @Manoelzinho
                            </Typography>
                            <Typography>
                                manoel@gmail.com
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Box>
                Parte de baixo da pagina
            </Box>
        </Stack>
    </Box>
  )
}

export default DadosPerfil