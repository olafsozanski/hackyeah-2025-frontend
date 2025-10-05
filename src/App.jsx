import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "./pages/welcome/Welcome";
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import MainLayout from "./layouts/MainLayout";
import { RoleProvider } from "./context/RoleContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {theme} from './theme.jsx';
import Details from "./pages/details/Details";
import {Provider} from 'jotai';
import {store} from './store/store.js';
import { useState } from "react";
import Chats from "./pages/chatsList/ChatsList";
import Chat from "./pages/chat/Chat";
import SubPageLayout from "./layouts/SubPageLayout";
import {colors} from './colors.js';

const queryClient = new QueryClient();

function App() {
    const [appBarTitle, setAppBarTitle] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <RoleProvider>
                        <Box sx={{ height: '100vh', bgcolor: colors.slate[100] }}>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/" element={<Welcome />} />
                                    <Route element={<MainLayout appBarTitle={appBarTitle}/>}>
                                        <Route path="home" element={<Home setAppBarTitle={setAppBarTitle}/>} />
                                        <Route path="chats" element={<Chats setAppBarTitle={setAppBarTitle}/>} />
                                    </Route>
                                    <Route element={<SubPageLayout previousPage={previousPage} />}>
                                        <Route path="/listings/:id" element={<Details setPreviousPage={setPreviousPage} />} />
                                        <Route path="/chats/:id" element={<Chat setPreviousPage={setPreviousPage} />} />
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
