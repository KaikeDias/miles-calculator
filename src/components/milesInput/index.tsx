import React, { ChangeEvent } from "react";

interface MilesInputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
}

export default function MilesInput({label, value, onChange}: MilesInputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
      };
    
    return (
        <div className="input-group">
            <label htmlFor={label}>{label}</label>
            <input 
                type="number"
                id={label}
                name={label}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}