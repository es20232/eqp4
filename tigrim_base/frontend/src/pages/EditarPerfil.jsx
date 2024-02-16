import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import {
    Box,
    Stack,
    Avatar,
    Button,
    TextField
} from "@mui/material";

const EditarPerfil = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [nick, setNick] = useState('john_doe');
    const [bio, setBio] = useState('A brief bio about me');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNickChange = (event) => {
        setNick(event.target.value);
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const [profilePicture, setProfilePicture] = useState("https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");

    const handleSubmit = () => {
        // Logica para atualizar os dados do perfil
        console.log('Profile updated:', { name, email, nick, bio });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // Assuming you have a function to handle image upload
            // Replace the following line with your logic to upload the image
            const imageUrl = URL.createObjectURL(file);
            setProfilePicture(imageUrl);
        }
    };

    return (
        <Box>
            <Navbar />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Stack direction='row' spacing={2}>
                    <Box padding={2} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>

                        <Stack spacing={2} sx={{alignItems: 'center'}}>
                            <Avatar
                                sx={{ width: 250, height: 250 }}
                                src={profilePicture}
                            />
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="contained-button-file"
                                type="file"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span">
                                    Trocar Foto
                                </Button>
                            </label>
                        </Stack>
                        
                    </Box>
                    <Stack spacing={2}>
                        <Stack direction='row' spacing={2}>
                            <TextField label="Name" value={name} onChange={handleNameChange} />
                            <TextField label="Nick@" value={nick} onChange={handleNickChange} />
                        </Stack>
                        
                        <TextField fullWidth label="Email" value={email} onChange={handleEmailChange} />
                        
                        <TextField label="Bio" multiline rows={4} value={bio} onChange={handleBioChange} />
                        
                        <Stack direction="row" justifyContent="space-around">
                            <Button variant='contained' onClick={handleSubmit}>Salvar Alterações</Button>
                            <Button variant='contained' >Cancelar</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default EditarPerfil;
