import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../Ts/cliente_psicologo'; // Certifique-se de fornecer o caminho correto

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
        cip: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterFormPsicologo: React.FC<RegisterFormPsicologoProps> = ({ form, onChange, onSubmit }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const cadastrar = document.getElementById('cadastrar') as HTMLButtonElement;

        const handleRegister = async () => {
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
                cip: form.cip 
            };

            try {
                await registerUser('psychologist', clientData);
                alert('Usuário cadastrado com sucesso!');
                navigate('/login');
            } catch (error) {
                console.error('Erro ao cadastrar o usuário:', error);
                alert('Erro ao cadastrar o usuário. Por favor, tente novamente.');
            }
        };

        cadastrar.addEventListener('click', handleRegister);

        return () => {
            cadastrar.removeEventListener('click', handleRegister);
        };
    }, [form, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-[#52B693] mb-6">Cadastro de Psicólogo</h2>
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 gap-4">
                        <input type="text" id="name" name="name" value={form.name} onChange={onChange} placeholder="Nome Completo" required />
                        <input type="email" id="email" name="email" value={form.email} onChange={onChange} placeholder="Email" required />
                        <input type="tel" id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="Telefone" required />
                        <input type="text" id="cpf" name="cpf" value={form.cpf} onChange={onChange} placeholder="CPF" required />
                        <input type="text" id="cip" name="cip" value={form.cip} onChange={onChange} placeholder="CIP (Registro Profissional)" required />
                        <input type="date" id="birthdate" name="birthdate" value={form.birthdate} onChange={onChange} required />
                        <select id="gender" name="gender" value={form.gender} onChange={onChange} required>
                            <option value="">Selecione</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                            <option value="3">Outro</option>
                        </select>
                        <input type="text" id="photo" name="photo" value={form.photo} onChange={onChange} placeholder="Link da Foto de Perfil" />
                        <input type="text" id="instagram" name="instagram" value={form.instagram} onChange={onChange} placeholder="Link do Instagram" />
                        <input type="password" id="password" name="password" value={form.password} onChange={onChange} placeholder="Senha" required />
                        <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={onChange} placeholder="Confirmar Senha" required />
                        <button type="button" id="cadastrar" className="mt-4 p-2 bg-[#52B693] text-white rounded">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterFormPsicologo;
