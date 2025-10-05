import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "./pages/welcome/Welcome";
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import MainLayout from "./layouts/MainLayout";
import { RoleProvider } from "./context/RoleContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {theme} from './theme.jsx';
import {Provider} from 'jotai';
import {store} from './store/store.js';

const queryClient = new QueryClient();

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <RoleProvider>
                        <Box sx={{ height: '100vh' }}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Welcome />} />
                                    <Route element={<MainLayout />}>
                                        <Route path="home" element={<Home />} />
                                    </Route>
                                    <Route path="/login" element={<Login />} />
                                </Routes>
                            </BrowserRouter>
                        </Box>
                        <CssBaseline />
                    </RoleProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
