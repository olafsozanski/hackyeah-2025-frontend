import { Box, Button, Container, Typography } from "@mui/material";

export default function Welcome() {
    return (
        <Container sx={{
            height: "100vh"
        }}>
            <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                <Typography variant="h3">Nazwa aplikacji</Typography>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'1rem'} flex={1}>
                    <img style={{width: '100%'}} src="https://picsum.photos/seed/picsum/600"/>
                    <Typography variant="h4">
                        Wolontariusze i organizacje <Typography variant="h4" color="primary.main" component={'span'}>w jednym miejscu</Typography>
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'}>
                    <Button variant="contained">Rozpocznij</Button>
                    <Button variant="outlined">Zaloguj się</Button>
                </Box>
            </Box>
        </Container>
    );
}