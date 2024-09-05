import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

        if (form.password !== form.confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        try {
            await axios.post('http://localhost:5000/users', form);
            alert('Usuário cadastrado com sucesso!');
            navigate('/login'); 
        } catch (error) {
            console.error('Erro ao cadastrar o usuário:', error);
            alert('Erro ao cadastrar o usuário. Por favor, tente novamente.');
        }
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-[#52B693] flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold">Cadastro</h2>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <form className="bg-white p-8 shadow-md rounded-lg w-4/5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            />
                        </div>
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
                            <label className="block text-sm font-medium text-gray-700">Telefone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">CPF</label>
                            <input
                                type="text"
                                name="cpf"
                                value={form.cpf}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
                            <input
                                type="date"
                                name="birthdate"
                                value={form.birthdate}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700">Sexo</label>
                            <select
                                name="gender"
                                value={form.gender}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
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
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-[#296856] text-white p-2 rounded-md font-bold hover:bg-green-300 hover:text-[#296856]">
                                Cadastrar
                            </button>
                            <div className="mt-4 text-center">
                                <p className="text-sm">Já tem uma conta? <a href="/login" className="text-[#296856] font-semibold">Login</a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
