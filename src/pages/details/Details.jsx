import {
    Alert,
    Box,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Container,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useParams } from "react-router";
import { useListingById } from "../../hooks/useListing";
import BusinessIcon from "@mui/icons-material/Business";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect } from "react";

export default function Details({ setPreviousPage }) {
    const { id } = useParams();
    const { data, isLoading, error } = useListingById(id);

    useEffect(() => {
        setPreviousPage("/home");
    }, [setPreviousPage]);

    if (isLoading) return <CircularProgress />;
    if (error) return <Alert severity="error">Błąd odczytu ogłoszenia</Alert>;

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Box>
                <Typography variant="h2">{data.title}</Typography>
                <Typography variant="body1">{data.description}</Typography>
            </Box>
            <Card
                elevation={5}
                sx={{
                    boxSizing: "border-box",
                }}
            >
                <CardContent>
                    <Typography variant="h5">
                        {data.organization?.name}
                    </Typography>
                    <Typography variant="body1">
                        {data.organization?.description}
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        mt={2}
                    >
                        <BusinessIcon />
                        <Typography variant="subtitle1">
                            {data.organization?.type}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <LanguageIcon />
                        <Typography variant="subtitle1">
                            {data.organization?.website}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <PhoneIcon />
                        <Typography variant="subtitle1">
                            {data.organization?.phone}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <HomeIcon />
                        <Typography variant="subtitle1">
                            {data.organization?.address}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
            <Card elevation={5}>
                <CardContent>
                    <Typography variant="h5">Niezbędne umiejętności</Typography>
                    <Box
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        gap={1}
                        mt={2}
                    >
                        {data.requiredSkills &&
                            data.requiredSkills.map((skill) => {
                                return (
                                    <Chip key={skill._id} label={skill.name} />
                                );
                            })}
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
