"use client"

export default function Button({
    children,
    margin
}: {
    children: React.ReactNode,
    margin?: number
}) {
    return (
        <button className={`w-full min-w-20 h-10 mt-${margin} text-gray-50 duration-300 border rounded-[5px] bg-main hover:brightness-105 active:bg-sub`}>
            {children}
        </button>
    );
}