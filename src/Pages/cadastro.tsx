import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import RegisterForm from '../Componentes/Cadastro/RegisterForm';
import RegisterFormPsicologo from '../Componentes/Cadastro/RegisterFormPsicologo';
import ToggleButton from '../Componentes/Buttons/TuggleButton';
import { registerUser } from '../Ts/cliente_psicologo';

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
        cip: '',
        photo: '',
        instagram: '',
        description: '',
    });

    const [userType, setUserType] = useState<'client' | 'psychologist'>('client');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {
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
            id_sexo: Number(form.gender),
            foto_perfil: form.photo,
            link_instagram: form.instagram,
            cip: userType === 'psychologist' ? form.cip : undefined
        };

        try {
            await registerUser(userType, clientData);
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
                    />
                ) : (
                    <RegisterFormPsicologo
                        form={form}
                        onChange={handleChange}
                    />
                )}
                <button
                    id="cadastrar"
                    onClick={handleRegister}
                    className="w-full bg-[#52B693] text-white p-3 rounded-lg font-bold hover:bg-[#429e78] transition-colors mt-4"
                >
                    Cadastrar
                </button>
            </div>
        </div>
    );
};

export default Register;
