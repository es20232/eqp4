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
} from "@mui/material";
import React, { useState } from "react";


const Post = () => {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);

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

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
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
    </Card>
    
  );
};

export default Post;
