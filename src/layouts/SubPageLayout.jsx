import { Outlet, useNavigate } from "react-router";
import { Box, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function SubPageLayout({ previousPage }) {
    const navigate = useNavigate();
    return (
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <header>
                <Box sx={{ flexGrow: 1, pt: 1 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ m: 0 }}
                    onClick={() => {
                        navigate(previousPage);
                    }}
                >
                    <ArrowBack />
                </IconButton>
            </Box>
            </header>
            <main style={{ flexGrow: 1, overflow: "hidden" }}>
                <Outlet />
            </main>
        </Box>
    );
}
