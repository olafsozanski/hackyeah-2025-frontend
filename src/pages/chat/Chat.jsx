import {
    Box,
    TextField,
    IconButton,
    CircularProgress,
    Alert, Typography, Stack,
} from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, useRef } from "react";
import { useChatById } from "../../hooks/useChat";
import { useParams } from "react-router";
import { useUser } from "../../store/auth";

const Message = ({ message }) => {
    const currentUser = useUser();
    const align =  !message.sender ? "right" : (message.sender._id !== currentUser._id ? "right" : "left");

    return (
        <>
            <Typography fontSize="0.875rem" textAlign={align}>
                {message.sender.name}
            </Typography>
            <Box
                sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: align, 
                }}
            >
                <Box
                    sx={{
                        display: "inline-block",
                        p: 1.5,
                        bgcolor: "white",
                        borderRadius: 2,
                        boxShadow: 1,
                        maxWidth: '90%',
                    }}
                >
                    {message.content}
                </Box>
            </Box>
        </>
    );
};

export default function Chat({ setPreviousPage }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);
    const { id } = useParams();
    const { data, isLoading, error } = useChatById(id);
    const currentUser = useUser();

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        setPreviousPage("/chats");
    }, [setPreviousPage]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { content: input, _id: Date.now(), user: currentUser }]);
        setInput("");
    };

    if (isLoading) return <CircularProgress />;
    if (error) return <Alert severity="error">Błąd odczytu chatu</Alert>;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            {/* Lista wiadomości */}
            <Stack
                gap={1}
                sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    p: 2,
                    bgcolor: "#f5f5f5",
                }}
            >
                {data.map((message) => {
                    return <Message key={message._id} message={message} />;
                })}
                {messages.map((message) => {
                    return <Message key={message._id} message={message} />;
                })}
                <div ref={messagesEndRef} />
            </Stack>

            {/* Input na dole */}
            <Box
                sx={{
                    display: "flex",
                    p: 1,
                    borderTop: "1px solid #ddd",
                    bgcolor: "white",
                }}
            >
                <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <IconButton onClick={handleSend} color="primary">
                    <SendIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
