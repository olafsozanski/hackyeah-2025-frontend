import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "./pages/welcome/Welcome";
import { CssBaseline } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import { RoleProvider } from "./context/RoleContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RoleProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route element={<MainLayout />}>
                            <Route path="home" element={<Home />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
                <CssBaseline />
            </RoleProvider>
        </QueryClientProvider>
    );
}

export default App;
