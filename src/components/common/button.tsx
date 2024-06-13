"use client"

export default function Button({
    children,
    margin,
    onClick,
}: {
    children: React.ReactNode,
    margin: string,
    onClick: ()=>void,
}) {

    const marginTopValue: any = {
        none: "",
        small: "mt-5",
        medium: "mt-10",
        large: "mt-15"
    }

    return (
        <button
            onClick={onClick}
            className={`w-full min-w-20 h-10 ${marginTopValue[margin]} text-gray-50 duration-300 border rounded-[5px] bg-main hover:brightness-105 active:bg-sub`}
        >
            {children}
        </button>
    );
}