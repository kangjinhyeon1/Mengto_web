"use client"

export default function Button({
    children
}: { children: React.ReactNode }) {
    return (
        <button className={`w-full h-10 text-gray-50 duration-300 mt-5 border rounded-[5px] bg-main hover:brightness-105 active:bg-sub`}>
            {children}
        </button>
    );
}