import {
    Box, Button,
    Container, Stack,
    TextField, Typography,
} from '@mui/material';
import { useState } from "react";
import {useMutation} from '@tanstack/react-query';
import {client} from '../../client.js';
import {login} from '../../api/auth.js';
import {useLogin} from '../../mutations/login.js';
import {useNavigate} from 'react-router';

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate();
    
    const {mutate, isPending} = useLogin();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container sx={{ height: '100%' }}>
            <Stack 
                justifyContent="center" 
                component="form" 
                height="100%" 
                gap={4}
                onSubmit={(e) => {
                    e.preventDefault();
                    mutate(credentials);
                }}
            >
                <header>
                    <Typography variant="h1">Zaloguj się</Typography>
                    <Typography variant="body1" sx={{ mt: 0.5 }}>
                        Wprowadź swoje dane, by się zalogować.
                    </Typography>
                </header>
                <Stack gap={2}>
                    <TextField
                        id="mail"
                        type="email"
                        name="email"
                        defaultValue={credentials.email}
                        onChange={handleChange}
                        label="E-mail"
                        fullWidth
                        disabled={isPending}
                    />
                    <TextField
                        id="password"
                        type="password"
                        name="password"
                        defaultValue={credentials.password}
                        onChange={handleChange}
                        label="Hasło"
                        fullWidth
                        disabled={isPending}
                    />
                </Stack>

                <Stack gap={2}>
                    <Button type="submit" variant="contained" loading={isPending}>
                        Zaloguj
                    </Button>

                    <Button 
                        type="button" 
                        variant="outlined" 
                        color="secondary" 
                        disabled={isPending}
                        onClick={() => navigate('/')}
                    >
                        Wróć
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}
