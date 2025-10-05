import { Box, Button, Container, Typography } from "@mui/material";
import {useNavigate} from 'react-router';

export default function Welcome() {
    const navigate = useNavigate();
    
    return (
        <Container sx={{
            height: "100vh",
            py: 2,
        }}>
            <Box display={'flex'} flexDirection={'column'} height={'100%'}>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={'1rem'} flex={1}>
                    <img style={{width: '100%'}} src="/hands.png"/>
                    <Typography variant="h1">
                        Wolontariusze i organizacje <Typography variant="h1" color="primary.main" component={'span'}>w jednym miejscu</Typography>
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'}>
                    <Button 
                        variant="contained"
                        onClick={() => navigate('/login')}
                    >
                        Rozpocznij
                    </Button>
                    <Button 
                        variant="outlined"
                        onClick={() => navigate('/login')}
                    >
                        Zaloguj się
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}