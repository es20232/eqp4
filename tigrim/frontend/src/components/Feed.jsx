import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = ({posts}) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={8} p={{ xs: 0, md: 2 }}>
      {loading ? (
        // Renderiza o esqueleto enquanto os posts estão sendo carregados
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        // Renderiza dinamicamente os posts
        <Stack spacing={2}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Feed;