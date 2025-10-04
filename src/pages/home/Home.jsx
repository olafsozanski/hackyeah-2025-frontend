import { Alert, Avatar, Box, CircularProgress, Container, Typography } from "@mui/material";
import useAllListing from "../../hooks/useAllListing";
import moment from "moment";

function Listing({item}) {
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
                    {item.title}
                </Typography>
                <Typography variant="subtitle2">{item.organization.name}</Typography>
                <Typography variant="subtitle2">
                    {moment(item.date).format('DD.MM.YYYY hh:mm')}
                </Typography>
            </Box>
        </Box>
    );
}

export default function Home() {
    const { data, isLoading, error } = useAllListing();

    console.log(data);
    
    
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                }}
            >
                {isLoading && <CircularProgress />}
                {error && <Alert severity="error">Błąd odczytu tablicy</Alert>}
                {!isLoading && data.map((item) => {
                    return <Listing key={item._id} item={item}/>
                })}
            </Container>
        </>
    );
}
