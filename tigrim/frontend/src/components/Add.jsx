import {
  Avatar,
  Button,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Add as AddIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import imgNone from "../assets/imgNone.jpg";
import { uploadPost } from "../actions/postActions";
import axios from 'axios';

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  const [postPicture, setPostPicture] = useState(imgNone);
  const [description, setDescription] = useState("Sem Descrição");

  const dispatch = useDispatch();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', postPicture);
    formData.append('description', description);
  
    try {
      const token = sessionStorage.getItem('authorization'); // Obtenha o token JWT do sessionStorage
      if (!token) {
        throw new Error('Token JWT não encontrado');
      }
  
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/posts/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token // Inclua o token JWT nos cabeçalhos da requisição
        }
      });
  
      dispatch(uploadPost(postPicture, description));
      setOpen(false);
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPostPicture(imageUrl);
    }
  };

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Postar"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"white"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
          sx={{ width: 600, height: "auto"}}
        >
          <Typography variant="h5" color="gray" textAlign="center">
            Criar Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          <Box >
            <Stack spacing={2} 
              sx={{  display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              }}>
              <img
                src={postPicture}
                alt="Imagem selecionada"
                style={{ width: "50%", height: "50%" }}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                  Escolher Imagem
                </Button>
              </label>
            </Stack>
          </Box>
          
          <Box>
            <TextField
              sx={{ width: "100%", marginTop: '10px'}}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="Descrição"
              variant="standard"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Box>
          
          <Button fullWidth variant="contained" sx={{ marginTop: '10px' }} onClick={handleSubmit}>Postar</Button>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
