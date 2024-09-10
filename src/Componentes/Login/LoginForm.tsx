// src/components/LoginForm.tsx
import React from 'react';
import FormInput from '../Inputs/FormInput';

interface LoginFormProps {
    form: {
        email: string;
        password: string;
        userType: 'client' | 'psychologist'; // Adiciona o tipo de usuário
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onUserTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Função para lidar com a mudança do tipo de usuário
}

const LoginForm: React.FC<LoginFormProps> = ({ form, onChange, onSubmit, onUserTypeChange }) => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-[#52B693] flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold">Login</h2>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <form className="bg-white p-8 shadow-md rounded-lg w-4/5" onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <FormInput
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={onChange}
                                label="Email"
                                required
                            />
                        </div>
                        <div>
                            <FormInput
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={onChange}
                                label="Senha"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="userType" className="block text-sm font-medium text-gray-700">Tipo de Usuário</label>
                            <select
                                id="userType"
                                name="userType"
                                value={form.userType}
                                onChange={onUserTypeChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="client">Cliente</option>
                                <option value="psychologist">Psicólogo</option>
                            </select>
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

export default LoginForm;
