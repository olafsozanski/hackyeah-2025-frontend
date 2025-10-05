import {Alert, Avatar, Box, ButtonBase, CircularProgress, Container, Typography} from '@mui/material';
import { useAllListings } from "../../hooks/useListing";
import moment from "moment";
import {useNavigate} from 'react-router';
import { useEffect } from 'react';

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
                <Box color="secondary.main" fontSize="0.875rem">{item.organization.name}</Box>
                <Box color="secondary.main" fontSize="0.875rem">
                    {moment(item.date).format('DD.MM.YYYY hh:mm')}
                </Box>
            </Box>
        </ButtonBase>
    );
}

export default function Home({setAppBarTitle}) {
    const { data, isPending, error } = useAllListings();    
    useEffect(() => {
        setAppBarTitle("Tablica");
    }, [setAppBarTitle]);

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
