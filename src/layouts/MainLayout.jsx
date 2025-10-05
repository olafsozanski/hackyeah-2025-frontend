import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@mui/material";

export default function MainLayout({ appBarTitle }) {
    return (
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            <header>
                <Navbar appBarTitle={appBarTitle} />
            </header>
            <main style={{ flexGrow: 1, overflow: "hidden" }}>
                <Outlet />
            </main>
        </Box>
    );
}
