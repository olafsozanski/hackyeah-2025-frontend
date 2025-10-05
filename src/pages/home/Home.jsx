import {Alert, Avatar, Box, ButtonBase, CircularProgress, Container, Typography} from '@mui/material';
import { useAllListings } from "../../hooks/useListing";
import moment from "moment";
import {useNavigate} from 'react-router';

function Listing({item}) {
    const navigate = useNavigate();
    return (
        <ButtonBase
            sx={{
                fontSize: '1rem',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: 'left',
                p: 2,
                gap: 2,
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: 'divider',
            }}
            onClick={() => navigate(`/listings/${item._id}`)}
        >
            <Avatar></Avatar>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    fontWeight="bold"
                    fontSize="1rem"
                    lineHeight="135%"
                    mb={0.25}
                >
                    {item.title}
                </Box>
                <Typography variant="subtitle2">{item.organization.name}</Typography>
                <Typography variant="subtitle2">
                    {moment(item.date).format('DD.MM.YYYY hh:mm')}
                </Typography>
            </Box>
        </ButtonBase>
    );
}

export default function Home() {
    const { data, isPending, error } = useAllListings();    
    
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                }}
            >
                {isPending && <CircularProgress />}
                {error && <Alert severity="error">Błąd odczytu tablicy</Alert>}
                {!isPending && data.map((item) => {
                    return <Listing key={item._id} item={item}/>
                })}
            </Container>
        </>
    );
}
