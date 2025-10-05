import { AppBar, Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import ArticleIcon from '@mui/icons-material/Article';
import ChatIcon from '@mui/icons-material/Chat';
import { useNavigate } from "react-router";

export default function Navbar({appBarTitle}) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();

    function handleOpen() {
        setOpenDrawer(true);
    }

    function handleClose() {
        setOpenDrawer(false);
    }

    function handleLink(path) {
        setOpenDrawer(false);
        navigate(path);
    }

    return (
        <>
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {appBarTitle}
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <SwipeableDrawer
                    open={openDrawer}
                    onClose={handleClose}
                    onOpen={handleClose}
                >
                    <List>
                        <ListItemButton onClick={() => {handleLink("/home")}}>
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tablica" />
                        </ListItemButton>
                        <ListItemButton onClick={() => {handleLink("/chats")}}>
                            <ListItemIcon>
                                <ChatIcon />
                            </ListItemIcon>
                            <ListItemText primary="Chat" />
                        </ListItemButton>
                    </List>
                </SwipeableDrawer>
            </React.Fragment>
        </>
    );
}