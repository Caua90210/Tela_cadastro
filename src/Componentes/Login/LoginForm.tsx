import FormInput from '../Inputs/FormInput';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
    form: {
        email: string;
        password: string;
        userType: 'client' | 'psychologist';
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onUserTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    
}

const LoginForm: React.FC<LoginFormProps> = ({ form, onChange, onSubmit, onUserTypeChange }) => {
    const [selectedButton, setSelectedButton] = useState<'Cliente' | 'Psicológo'>('Cliente');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleButtonClick(buttonName: 'Cliente' | 'Psicológo') {
        setSelectedButton(buttonName);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleUserTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        // Atualize o estado de userType conforme necessário
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lógica de login aqui
    return (
        <form className="bg-white p-8 rounded-lg" onSubmit={onSubmit}>
                <div className="title flex justify-center pb-8">
                    <h1 className='text-6xl font-semibold text-[#13916D]'>Login</h1>
                </div>
                <div className="ClienteOrPsicologo flex border-[#96E3CD] border-2 items-center justify-center rounded-xl mb-4">
                    <button
                        className={`w-[10rem] h-[2rem] rounded-xl font-semibold ${selectedButton === 'Cliente' ? 'bg-[#296856] text-[#ffffff]' : 'text-[#296856]'}`}
                        onClick={() => handleButtonClick('Cliente')}
                    >
                        Cliente
                    </button>
                    <button
                        className={`w-[10rem] h-[2rem] rounded-xl font-semibold ${selectedButton === 'Psicológo' ? 'bg-[#296856] text-[#ffffff]' : 'text-[#296856]'}`}
                        onClick={() => handleButtonClick('Psicológo')}
                    >
                        Psicológo
                    </button>
                </div>
            <div className='flex flex-col'>
                <div>
                    <FormInput
                        id='email'
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
                        id='password'
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
    );
};



    return (
        <div className="flex h-screen">
            <div className='flex flex-col'>
            {/* <LoginForm
                    form={{ email, password, userType: selectedButton === 'Cliente' ? 'client' : 'psychologist' }}
                    onChange={handleInputChange} // Ajuste se necessário
                    onSubmit={handleSubmit}
                    onUserTypeChange={handleUserTypeChange}
                /> */}
                <div className="ClienteOrPsicologo flex border-[#96E3CD] border-2 items-center justify-center rounded-xl mb-4">
                    <button
                        className={`w-[10rem] h-[2rem] rounded-xl font-semibold ${selectedButton === 'Cliente' ? 'bg-[#296856] text-[#ffffff]' : 'text-[#296856]'}`}
                        onClick={() => handleButtonClick('Cliente')}
                    >
                        Cliente
                    </button>
                    <button
                        className={`w-[10rem] h-[2rem] rounded-xl font-semibold ${selectedButton === 'Psicológo' ? 'bg-[#296856] text-[#ffffff]' : 'text-[#296856]'}`}
                        onClick={() => handleButtonClick('Psicológo')}
                    >
                        Psicológo
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;
