import { Avatar, Box, Container, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Listing() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: 2,
                gap: 2,
                borderBottom: "1px solid grey",
            }}
        >
            <Avatar></Avatar>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    Kierowca samochodu
                </Typography>
                <Typography variant="subtitle2">Szlachetna paczka</Typography>
                <Typography variant="subtitle2">
                    09.09.2025 - wieczór
                </Typography>
            </Box>
        </Box>
    );
}

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                }}
            >
                <Listing />
                <Listing />
                <Listing />
                <Listing />
            </Container>
        </QueryClientProvider>
    );
}
