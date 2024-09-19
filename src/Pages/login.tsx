// src/components/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import whiteSquare from '../assets/whiteSquare.svg'
import twoBoys from '../assets/twoBoys.svg'
import vivarisLogo from '../assets/vivarisLogo.svg'
import ContainerLogin from '../Componentes/Login/LoginForm';

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
        <div className="w-full h-full flex bg-[#52B693] flex-row fixed">
      <div className='flex flex-col'>
        <img src={whiteSquare} alt="" className='absolute pl-[40rem] -z-10' />
        <div className='flex'>
          <img src={vivarisLogo} alt="" />
        </div>
        <h1 className='text-[#ffffff] text-8xl font-semibold pl-[90px] mt-[144px]'>Seja<br />Bem Vindo!</h1>
        <img src={twoBoys} alt="" className='mt-[5rem] ml-[400px] ' />
      </div>
      <div className='flex flex-col p-8 ml-12 justify-center '>
      <ContainerLogin
            
            // onChange={handleChange}
            // onSubmit={handleSubmit}
            // onUserTypeChange={(e) => setForm({ ...form, userType: e.target.value as 'client' | 'psychologist' })}
        />
      </div>
    </div>


    );
};

export default Login;
