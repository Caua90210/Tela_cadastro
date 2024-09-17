// src/components/RegisterFormPsicologo.tsx
import React from 'react';
import FormInput from '../Inputs/FormInput';

interface RegisterFormPsicologoProps {
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
        crp: string; // CIP (registro profissional)
        description: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterFormPsicologo: React.FC<RegisterFormPsicologoProps> = ({ form, onChange, onSubmit }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            {/* Container para o formulário */}
            <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-[#52B693] mb-6">Cadastro de Psicólogo</h2>
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <FormInput
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            label="Nome Completo"
                            required
                        />
                        <FormInput
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            label="Email"
                            required
                        />
                        <FormInput
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            label="Telefone"
                            required
                        />
                        <FormInput
                            type="text"
                            name="cpf"
                            value={form.cpf}
                            onChange={onChange}
                            label="CPF"
                            required
                        />
                        <FormInput
                            type="text"
                            name="crp"
                            value={form.crp}
                            onChange={onChange}
                            label="CIP (Registro Profissional)"
                            required
                        />
                        <FormInput
                            type="date"
                            name="birthdate"
                            value={form.birthdate}
                            onChange={onChange}
                            label="Data de Nascimento"
                            required
                        />
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Sexo</label>
                            <select
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
                            type="text"
                            name="photo"
                            value={form.photo}
                            onChange={onChange}
                            label="Link da Foto de Perfil"
                        />
                        <FormInput
                            type="text"
                            name="instagram"
                            value={form.instagram}
                            onChange={onChange}
                            label="Link do Instagram"
                        />
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Descrição</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={onChange}
                                className="mt-1 p-2 block w-full border rounded-md"
                                rows={4}
                                placeholder="Descreva sua experiência e qualificações"
                                required
                            ></textarea>
                        </div>
                        <FormInput
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            label="Senha"
                            required
                        />
                        <FormInput
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={onChange}
                            label="Confirmar Senha"
                            required
                        />
                        <div className="flex flex-col items-center mt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#52B693] text-white p-3 rounded-lg font-bold hover:bg-[#429e78] transition-colors"
                            >
                                Cadastrar
                            </button>
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

export default RegisterFormPsicologo;
