import {Alert, Avatar, Box, ButtonBase, CircularProgress, Container, Typography} from '@mui/material';
import {useNavigate} from 'react-router';
import { useEffect } from 'react';
import { useAllChats } from '../../hooks/useChat';
import { useUser } from '../../store/auth';

function ChatLink({chat}) {
    const navigate = useNavigate();
    const currentUser = useUser();
    const name = chat.users
        .filter((user) => user._id !== currentUser._id)
        .map((user) => user.name)
        .join(', ');
        
    return (
        <ButtonBase
            sx={{
                fontSize: '1rem',
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
                textAlign: 'left',
                p: 2,
                gap: 2,
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: 'divider',
            }}
            onClick={() => navigate(`/chats/${chat._id}`)}
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
                    {name}
                </Box>
                {chat.listing && (
                    <Box
                        fontSize="0.875rem"
                        lineHeight="135%"
                        color="secondary.main"
                        mb={0.25}
                    >
                        odnośnie: {chat.listing.title}
                    </Box>
                )}
            </Box>
        </ButtonBase>
    );
}

export default function Chats({setAppBarTitle}) {
    const { data, isPending, error } = useAllChats();    
    useEffect(() => {
        setAppBarTitle("Wszystkie chaty");
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
                {error && <Alert severity="error">Błąd odczytu chatów</Alert>}
                {!isPending && data.map((chat) => {
                    return <ChatLink key={chat._id} chat={chat}/>
                })}
            </Container>
        </>
    );
}
