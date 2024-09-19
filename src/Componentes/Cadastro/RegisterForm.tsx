import React, { useEffect } from 'react';
import FormInput from '../Inputs/FormInput';

interface RegisterFormProps {
    form: {
        name: string;
        email: string;
        phone: string;
        cpf: string;
        birthdate: string;
        gender: string;
        password: string;
        confirmPassword: string;
        photo: string;
        instagram: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ form, onChange, onSubmit }) => {
    useEffect(() => {
        const cadastrar = document.getElementById('cadastrar') as HTMLButtonElement;

        cadastrar.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o envio do formulário

            const usuarioData = {
                nome: (document.getElementById('name') as HTMLInputElement).value,
                email: (document.getElementById('email') as HTMLInputElement).value,
                telefone: (document.getElementById('phone') as HTMLInputElement).value,
                cpf: (document.getElementById('cpf') as HTMLInputElement).value,
                data_nascimento: (document.getElementById('birthdate') as HTMLInputElement).value,
                id_sexo: (document.getElementById('gender') as HTMLSelectElement).value,
                foto_perfil: (document.getElementById('photo') as HTMLInputElement).value,
                link_instagram: (document.getElementById('instagram') as HTMLInputElement).value,
                senha: (document.getElementById('password') as HTMLInputElement).value,
                confirmar_senha: (document.getElementById('confirmPassword') as HTMLInputElement).value,
            };

            console.log(usuarioData); 
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* Container para o formulário */}
            <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-[#52B693] mb-6">Cadastro</h2>
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <FormInput
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            label="Nome Completo"
                            required
                        />
                        <FormInput
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            label="Email"
                            required
                        />
                        <FormInput
                            id="phone"
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            label="Telefone"
                            required
                        />
                        <FormInput
                            id="cpf"
                            type="text"
                            name="cpf"
                            value={form.cpf}
                            onChange={onChange}
                            label="CPF"
                            required
                        />
                        <FormInput
                            id="birthdate"
                            type="date"
                            name="birthdate"
                            value={form.birthdate}
                            onChange={onChange}
                            label="Data de Nascimento"
                            required
                        />
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Sexo</label>
                            <select
                                id="gender"
                                name="gender"
                                value={form.gender}
                                onChange={onChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                required
                            >
                                <option value="">Selecione</option>
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                                <option value="3">Outro</option>
                            </select>
                        </div>
                        <FormInput
                            id="photo"
                            type="text"
                            name="photo"
                            value={form.photo}
                            onChange={onChange}
                            label="Link da Foto de Perfil"
                        />
                        <FormInput
                            id="instagram"
                            type="text"
                            name="instagram"
                            value={form.instagram}
                            onChange={onChange}
                            label="Link do Instagram"
                        />
                        <FormInput
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            label="Senha"
                            required
                        />
                        <FormInput
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={onChange}
                            label="Confirmar Senha"
                            required
                        />
                        <div className="flex flex-col items-center mt-4">

                            <p className="mt-4 text-sm text-center">
                                Já tem uma conta?{' '}
                                <a href="/login" className="text-[#296856] font-semibold">Login</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
