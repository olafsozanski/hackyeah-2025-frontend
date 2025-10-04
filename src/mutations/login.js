import {useMutation} from '@tanstack/react-query';
import {login} from '../api/auth.js';
import {useSetToken, useSetUser} from '../store/auth.js';
import {useNavigate} from 'react-router';

export const useLogin = () => {
    const setToken = useSetToken();
    const setUser = useSetUser();
    const navigate = useNavigate();
    
    return useMutation({
        mutationKey: ['login'],
        mutationFn: (data) => login(data),
        onSuccess: ({user, token}) => {
            setToken(token);
            setUser(user);
            navigate('/home');
        },
    });
};