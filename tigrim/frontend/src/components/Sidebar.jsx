import {
  AccountBox,
  Home
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
      <Box flex={1} p={5} sx={{ display: { xs: "none", sm: "block" } }}>
          <Box position="fixed">
              <List>
                  <ListItem disablePadding>
                      <ListItemButton component={Link} to="/">
                          <ListItemIcon>
                              <Home />
                          </ListItemIcon>
                          <ListItemText primary="Home" sx={{ fontSize: '32px' }} />
                      </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                      <ListItemButton component={Link} to="/Perfil">
                          <ListItemIcon>
                              <AccountBox />
                          </ListItemIcon>
                          <ListItemText primary="Profile" sx={{ fontSize: '32px' }} />
                      </ListItemButton>
                  </ListItem>
              </List>
          </Box>
      </Box>
  );
};

export default Sidebar;