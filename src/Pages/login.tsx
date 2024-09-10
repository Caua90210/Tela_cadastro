// src/components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Componentes/Login/LoginForm';

const Login: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        userType: 'client' as 'client' | 'psychologist'  // Adiciona um estado para o tipo de usuário
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const endpoint = form.userType === 'client'
                ? 'http://localhost:3000/users'
                : 'http://localhost:3000/psicologo';

            const response = await axios.get(endpoint, {
                params: {
                    email: form.email,
                    password: form.password
                }
            });

            // Verifica se há algum usuário retornado na resposta
            if (response.data.length > 0) {
                navigate('/home');
            } else {
                alert('Email ou senha inválidos');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Por favor, tente novamente.');
        }
    };

    return (
        <LoginForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onUserTypeChange={(e) => setForm({ ...form, userType: e.target.value as 'client' | 'psychologist' })}
        />
    );
};

export default Login;
