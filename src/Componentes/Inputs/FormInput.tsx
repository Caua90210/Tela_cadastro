// src/Inputs/FormInput.tsx
import React from 'react';

interface FormInputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ type, name, value, onChange, label, required = false }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 block w-full border rounded-md"
                required={required}
            />
        </div>
    );
};

export default FormInput;
