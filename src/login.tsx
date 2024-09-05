import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:5000/users', {
                params: {
                    email: form.email,
                    password: form.password
                }
            });

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
        <div className="flex h-screen">
            <div className="w-1/2 bg-[#52B693] flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold">Login</h2>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <form className="bg-white p-8 shadow-md rounded-lg w-4/5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Senha</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                type="submit"
                                className="w-full bg-[#296856] text-white p-2 rounded-md font-bold hover:bg-green-300 hover:text-[#296856]"
                            >
                                Entrar
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-sm">Não tem uma conta? <a href="/register" className="text-[#296856] font-semibold">Cadastrar</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
