// src/components/ToggleButton.tsx
import React from 'react';

interface ToggleButtonProps {
    active: boolean;
    onClick: () => void;
    label: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ active, onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className={`py-2 px-4 rounded-lg font-bold transition-colors ${active ? 'bg-[#52B693] text-white' : 'bg-white text-[#52B693] border border-[#52B693]'} hover:bg-[#429e78] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#429e78']`}
        >
            {label}
        </button>
    );
};

export default ToggleButton;
