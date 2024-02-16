import { ThumbUpOffAlt, ThumbUpAlt, ThumbDownOffAlt, ThumbDownAlt } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";

const Post = () => {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);
  const [commentText, setCommentText] = useState(""); // Estado para armazenar o texto do comentário

  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (!userLiked) {
      setLikesCount(likesCount + 1);
      setUserLiked(true);
    }
  };

  const handleDislike = () => {
    if (!userDisliked) {
      setDislikesCount(dislikesCount + 1);
      setUserDisliked(true);
    }
  };

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        id: comments.length + 1,
        author: "John Doe", // Nome do perfil, não manipulável pelo usuário
        text: commentText,
      };
      setComments([...comments, newComment]);
      setCommentText(""); // Limpar o campo de texto do comentário após adicionar
      console.log(newComment); // Exibir o comentário no console
    }
  };

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">R</Avatar>}
        title="John Doe"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lugar legal, não sei onde é, e nem se existe, achei na internet
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like" onClick={handleLike}>
          <Checkbox
            icon={<ThumbUpOffAlt />}
            checkedIcon={<ThumbUpAlt sx={{ color: "blue" }} />}
            checked={userLiked}
            readOnly
          />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likesCount}
        </Typography>
        <IconButton aria-label="dislike" onClick={handleDislike}>
          <Checkbox
            icon={<ThumbDownOffAlt />}
            checkedIcon={<ThumbDownAlt sx={{ color: "red" }} />}
            checked={userDisliked}
            readOnly
          />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {dislikesCount}
        </Typography>
      </CardActions>

      {/* Sessão de Comentários */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Comentários
        </Typography>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Typography variant="subtitle1" color="text.secondary">
              {comment.author}:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {comment.text}
            </Typography>
            <hr />
          </div>
        ))}
      </CardContent>

      {/* Área de Formulário para Novos Comentários */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Adicionar Comentário
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Seu Comentário"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button onClick={handleAddComment} variant="contained" sx={{ mt: 1 }}>
          Adicionar Comentário
        </Button>
      </CardContent>
    </Card>
  );
};

export default Post;
