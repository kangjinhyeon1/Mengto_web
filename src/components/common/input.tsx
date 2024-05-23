"use client"
interface InputType {
    type: "text" | "password";
    label: string;
    placeholder?: string;
}

export default function Input({ type, label, placeholder }: InputType) {
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
            />
        </div>
    );
}