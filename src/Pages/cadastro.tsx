// src/components/Register.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../Componentes/Cadastro/RegisterForm';
import RegisterFormPsicologo from '../Componentes/Cadastro/RegisterFormPsicologo';
import ToggleButton from '../Componentes/Buttons/TuggleButton';

const Register: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        cpf: '',
        birthdate: '',
        gender: '',
        password: '',
        confirmPassword: '',
        crp: ''
    });
    const [userType, setUserType] = useState<'client' | 'psychologist'>('client');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        const clientData = {
            nome: form.name,
            email: form.email,
            senha: form.password,
            telefone: form.phone,
            cpf: form.cpf,
            data_nascimento: form.birthdate,
            sexo: form.gender,
            crp: userType === 'psychologist' ? form.crp : undefined
        };

        const endpoint = userType === 'client' ? 'http://localhost:3000/users' : 'http://localhost:3000/psicologo';

        try {
            await axios.post(endpoint, clientData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('Usuário cadastrado com sucesso!');
            navigate('/login');
        } catch (error) {
            console.error('Erro ao cadastrar o usuário:', error);
            alert('Erro ao cadastrar o usuário. Por favor, tente novamente.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gray-100">
            
            <div className="mb-6 flex space-x-4">
                <ToggleButton
                    active={userType === 'client'}
                    onClick={() => setUserType('client')}
                    label="Cliente"
                />
                <ToggleButton
                    active={userType === 'psychologist'}
                    onClick={() => setUserType('psychologist')}
                    label="Psicólogo"
                />
            </div>
            
            <div className="w-full max-w-md">
                {userType === 'client' ? (
                    <RegisterForm
                        form={form}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <RegisterFormPsicologo
                        form={form}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default Register;
