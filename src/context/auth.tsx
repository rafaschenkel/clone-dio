import React, { createContext, useState } from 'react';
import { IAuthContext, IAuthContextProviderProps, ILoginData } from './types';
import { IUser } from '../types/user';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);

    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const { data } = await api.get(
                `users?email=${loginData.email}&password=${loginData.password}`
            );
            if (data.length === 1) {
                setUser(data[0]);
                navigate('/feed');
            } else {
                alert('Usuário ou senha inválidos!');
            }
        } catch (error) {
            alert('Houve um erro, tente novamente!');
        }
    };

    const handleLogoff = () => {
        setUser({} as IUser);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogoff }}>
            {children}
        </AuthContext.Provider>
    );
};
