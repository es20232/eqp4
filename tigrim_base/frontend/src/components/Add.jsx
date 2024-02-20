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
import {
  Add as AddIcon
} from "@mui/icons-material";
import { Box } from "@mui/system";
import imgNone from "../assets/imgNone.jpg"

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
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);
  const [userID, setUserID] = useState(0);
  const [descricao, setDescricao] = useState("Sem Descricão");

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Post updated:", { userID, dislikesCount, likesCount, descricao, postPicture });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Assuming you have a function to handle image upload
      // Replace the following line with your logic to upload the image
      const imageUrl = URL.createObjectURL(file);
      setPostPicture(imageUrl);
    }
  };
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
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
        onClose={(e) => setOpen(false)}
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
              onChange={handleDescricaoChange}
            />
          </Box>
          
          <Button fullWidth variant="contained" sx={{ marginTop: '10px' }} onClick={handleSubmit}>Postar</Button>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;
