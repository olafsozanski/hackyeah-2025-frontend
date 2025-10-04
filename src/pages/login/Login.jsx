import {
    Box,
    Container,
    TextField,
} from "@mui/material";
import { useState } from "react";

export default function Login() {
    const [credentials, setCredentials] = useState({
        mail: "",
        password: "",
    });

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Container>
            <form
                style={{
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        height: "100vh",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        id="mail"
                        type="email"
                        name="mail"
                        value={credentials.mail}
                        onChange={handleChange}
                        label="E-mail"
                        fullWidth
                    />
                    <TextField
                        id="password"
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        label="Hasło"
                        fullWidth
                    />
                </Box>
            </form>
        </Container>
    );
}
