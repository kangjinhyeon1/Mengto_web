"use client"

import React from "react";

interface InputType {
    type: "text" | "password";
    label: string;
    placeholder?: string;
    name: string;
    value: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}

export default function Input({ type, label, placeholder, name, value, onChange }: InputType) {
    return (
        <div className="flex flex-col w-full gap-2">
            <label className='text-titleMedium text-gray-700'>{label}</label>
            <input
                className="
                w-full
                h-[40px] 
                border-[1px] 
                border-soild 
                rounded-[5px] 
                shadow-m 
                text-bodyLarge 
                outline-none
                p-3
                "
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}