import { AppBar, Box, Divider, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";

export default function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false);

    function handleOpen() {
        setOpenDrawer(true);
    }

    function handleClose() {
        setOpenDrawer(false);
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
                            Tablica
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <SwipeableDrawer
                    open={openDrawer}
                    onClose={handleClose}
                    onOpen={handleClose}
                >
                    <List sx={{
                        width: '50vw%'
                    }}>
                        <ListItem>
                            jagjshdga
                        </ListItem>
                        <ListItem>
                            jagjshdga
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </React.Fragment>
        </>
    );
}